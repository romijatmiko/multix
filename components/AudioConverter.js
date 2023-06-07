import { useState } from "react";
import axios from "axios";

export default function AudioConversionForm() {
	const [selectedFile, setSelectedFile] = useState(null);
	const [convertedFile, setConvertedFile] = useState(null);

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const handleFileUpload = async () => {
		if (!selectedFile) return;

		const formData = new FormData();
		formData.append("audio", selectedFile);

		try {
			const response = await axios.post("/api/convert-audio", formData);
			if (response.status === 200) {
				const { convertedAudio } = response.data;
				setConvertedFile(convertedAudio);
			}
		} catch (error) {
			console.error("Error converting audio", error);
		}
	};

	return (
		<div>
			<h1>Audio Converter</h1>
			<input type="file" accept="audio/*" onChange={handleFileChange} />
			<button onClick={handleFileUpload}>Convert Audio</button>
			{convertedFile && (
				<div>
					<h2>Converted Audio:</h2>
					<audio controls>
						<source src={convertedFile} type="audio/mpeg" />
						Your browser does not support the audio element.
					</audio>
				</div>
			)}
		</div>
	);
}
