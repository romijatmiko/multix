import axios from "axios";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const formData = new FormData();
		formData.append("fileUpload", req.body.file);

		try {
			const response = await axios.post(
				"https://www.filestackapi.com/api/file",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
						apikey: "AjTMTTdjzR9iTO9SIqVvoz", // Ganti dengan API key Filestack Anda
					},
				}
			);

			res.status(response.status).json(response.data);
		} catch (error) {
			console.error("Error converting file:", error);
			res
				.status(500)
				.json({ error: "Error converting file. Please try again." });
		}
	} else {
		res.status(405).json({ error: "Method Not Allowed" });
	}
}
