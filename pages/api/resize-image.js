import formidable from "formidable";
import sharp from "sharp";

export default function handler(req, res) {
	const form = formidable({ multiples: false });

	form.parse(req, async (err, fields, files) => {
		if (err) {
			console.error("Error parsing form data", err);
			return res.status(500).json({ error: "Error parsing form data" });
		}

		try {
			const filePath = files.image.path;
			const resizedImageBuffer = await sharp(filePath)
				.resize(300, 300)
				.toBuffer();

			res.setHeader("Content-Type", files.image.type);
			res.setHeader(
				"Content-Disposition",
				"attachment; filename=resized-image.jpg"
			);
			res.send(resizedImageBuffer);
		} catch (error) {
			console.error("Error resizing image", error);
			return res.status(500).json({ error: "Error resizing image" });
		}
	});

	// Pastikan ada respons yang dikirim setelah pemrosesan permintaan
	// res.send() atau res.json() harus ada di sini
}
