import { createApiHandler } from "../../utils/apiHandler";
import { remove } from "rembg";

const handler = async (req, res) => {
	try {
		// Pastikan metode HTTP adalah POST
		if (req.method !== "POST") {
			res.status(405).json({ message: "Method Not Allowed" });
			return;
		}

		// Periksa apakah ada file gambar yang dikirim
		if (!req.files || !req.files.image) {
			res.status(400).json({ message: "No image file found" });
			return;
		}

		// Baca buffer gambar dari file yang diunggah
		const imageBuffer = req.files.image.data;

		// Hapus latar belakang gambar menggunakan rembg
		const resultBuffer = await remove(imageBuffer);

		// Kirim hasil gambar yang telah dihapus latar belakangnya
		res.setHeader("Content-Type", "image/png");
		res.send(resultBuffer);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "An error occurred" });
	}
};

export default createApiHandler(handler);
