import formidable from "formidable";
import fs from "fs";
import path from "path";
import compressAudio from "../../utils/compressAudio";

export const config = {
	api: {
		bodyParser: false,
	},
};

export default async function handler(req, res) {
	if (req.method === "POST") {
		try {
			const form = new formidable.IncomingForm();
			form.uploadDir = path.join(process.cwd(), "uploads");
			form.keepExtensions = true;

			form.parse(req, async (err, fields, files) => {
				if (err) {
					return res.status(400).json({ message: "Error parsing form data." });
				}

				const { audio } = files;
				const { bitrate } = fields;

				if (!audio || !bitrate) {
					return res.status(400).json({ message: "Missing audio or bitrate." });
				}

				const inputPath = audio.path;
				const outputPath = `${
					path.parse(inputPath).name
				}_compressed${path.extname(inputPath)}`;

				await compressAudio(inputPath, outputPath, bitrate);

				const compressedAudio = fs.readFileSync(outputPath);

				res.writeHead(200, {
					"Content-Type": "audio/mpeg",
					"Content-Disposition": `attachment; filename=${path.basename(
						outputPath
					)}`,
					"Content-Length": compressedAudio.length,
				});

				res.end(compressedAudio);
			});
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: "Internal server error." });
		}
	} else {
		res.status(405).end(); // Method Not Allowed
	}
}
