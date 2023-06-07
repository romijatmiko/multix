import multer from "multer";
import fs from "fs";
import { promisify } from "util";
import { pipeline, Transform } from "stream";
import lame from "lamejs";
import { NextApiRequest, NextApiResponse } from "next";

const pipelineAsync = promisify(pipeline);

// Konfigurasi penyimpanan file menggunakan multer
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "path/to/upload/directory");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

// Inisialisasi middleware multer dengan konfigurasi penyimpanan
const upload = multer({
	storage,
	limits: {
		fileSize: 10 * 1024 * 1024, // Batasan ukuran file 10MB
	},
}).single("audio");

// Fungsi transformasi untuk mengonversi buffer audio menjadi MP3
class AudioTransformer extends Transform {
	constructor() {
		super();
		this.mp3Encoder = new lame.Encoder({
			channels: 2,
			bitDepth: 16,
			sampleRate: 44100,
			bitRate: 128,
			outSampleRate: 44100,
			mode: lame.STEREO,
		});
	}

	_transform(chunk, encoding, callback) {
		this.push(this.mp3Encoder.encodeBuffer(chunk));
		callback();
	}

	_flush(callback) {
		this.push(this.mp3Encoder.flush());
		callback();
	}
}

export default async function handler(req, res) {
	try {
		await upload(req, res, async (err) => {
			if (err instanceof multer.MulterError) {
				// Error terkait multer (misalnya melebihi batasan ukuran)
				console.error("Multer error:", err);
				return res
					.status(400)
					.json({ success: false, error: "Failed to upload file" });
			} else if (err) {
				// Error lainnya
				console.error("Error:", err);
				return res
					.status(500)
					.json({ success: false, error: "Internal server error" });
			}

			// Mengambil path file audio dari req.file
			const audioFilePath = req.file.path;

			// Membaca file audio
			const audioBuffer = fs.readFileSync(audioFilePath);

			// Menginisialisasi transformasi audio
			const audioTransformer = new AudioTransformer();

			// Menuliskan hasil transformasi ke file MP3
			const outputPath = "path/to/output.mp3";
			await pipelineAsync(
				fs.createReadStream(audioFilePath),
				audioTransformer,
				fs.createWriteStream(outputPath)
			);

			// Mengirimkan response berhasil
			res.status(200).json({ success: true, outputPath });
		});
	} catch (error) {
		console.error("Error converting audio:", error);
		res.status(500).json({ success: false, error: "Failed to convert audio" });
	}
}
