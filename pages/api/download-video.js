import { spawn } from "child_process";

export default function handler(req, res) {
	const { url } = req.query;
	const command = `youtube-dl -g -f mp4 ${url}`;

	const process = spawn(command, {
		shell: true,
	});

	let downloadUrl = "";

	process.stdout.on("data", (data) => {
		downloadUrl += data;
	});

	process.stdout.on("end", () => {
		downloadUrl = downloadUrl.trim();
		res.status(200).json({ downloadUrl });
	});

	process.stderr.on("data", (data) => {
		console.error(data.toString());
		res.status(500).end();
	});
}
