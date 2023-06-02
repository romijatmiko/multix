import { createApiHandler } from "../../utils/apiHandler";
import formidable from "formidable";
import ffmpeg from "ffmpeg-static";

const handler = async (req, res) => {
	try {
		// Pastikan metode HTTP adalah POST
		if (req.method !== "POST") {
			res.status(405).json({ message: "Method Not Allowed" });
			return;
		}

		// Buat objek Formidable untuk meng-handle data form
		const form = formidable({ multiples: false });

		// Parse data form dari request
		const formData = await new Promise((resolve, reject) => {
			form.parse(req, (err, fields, files) => {
				if (err) {
					reject(err);
				} else {
					resolve({ fields, files });
				}
			});
		});

		// Periksa apakah ada file audio yang dikirim
		if (!formData.files || !formData.files.audio) {
			res.status(400).json({ message: "No audio file found" });
			return;
		}

		// Path file audio yang diunggah
		const audioFilePath = formData.files.audio.path;

		// Konversi format audio menggunakan ffmpeg
		const convertedFilePath = `${audioFilePath}.mp3`; // Ubah ekstensi sesuai format yang diinginkan

		// Eksekusi perintah ffmpeg untuk mengonversi format audio
		const command = `${ffmpeg.path} -i ${audioFilePath} ${convertedFilePath}`;
		const { stdout, stderr } = await new Promise((resolve, reject) => {
			exec(command, (error, stdout, stderr) => {
				if (error) {
					reject(error);
				} else {
					resolve({ stdout, stderr });
				}
			});
		});

		// Mengirim file hasil konversi sebagai respons
		res.status(200).download(convertedFilePath, "converted_audio.mp3"); // Ganti nama file dan ekstensi sesuai kebutuhan
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

export default createApiHandler(handler);
