import { createApiHandler } from "../../utils/apiHandler";
import sharp from "sharp";
import fs from "fs";

const handler = async (req, res) => {
	try {
		// Pastikan metode HTTP adalah POST
		if (req.method !== "POST") {
			res.status(405).json({ message: "Method Not Allowed" });
			return;
		}

		// Baca file gambar yang diunggah
		const imageBuffer = await fs.promises.readFile(req.file.path);

		// Tentukan ukuran yang diinginkan
		const { width, height } = req.body;

		// Resize gambar menggunakan sharp
		const resizedImageBuffer = await sharp(imageBuffer)
			.resize(Number(width), Number(height))
			.toBuffer();

		// Hapus file asli yang diunggah
		await fs.promises.unlink(req.file.path);

		// Kirim gambar hasil resize sebagai respons
		res.status(200).send(resizedImageBuffer);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

export const config = {
	api: {
		bodyParser: false, // Matikan built-in body parser Next.js agar dapat mengakses data form
	},
};

export default createApiHandler(handler);
