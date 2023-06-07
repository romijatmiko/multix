import React, { useState } from "react";

function AudioUpload() {
	const [file, setFile] = useState(null);
	const [outputPath, setOutputPath] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleFileChange = (event) => {
		setFile(event.target.files[0]);
	};

	const handleUpload = async () => {
		try {
			const formData = new FormData();
			formData.append("audio", file);

			const response = await fetch("/api/convert", {
				method: "POST",
				body: formData,
			});

			if (response.ok) {
				const data = await response.json();
				setOutputPath(data.outputPath);
			} else {
				setErrorMessage("Failed to convert audio");
			}
		} catch (error) {
			console.error("Error uploading audio:", error);
			setErrorMessage("Failed to convert audio");
		}
	};

	return (
		<div>
			<input type="file" accept="audio/*" onChange={handleFileChange} />
			<button disabled={!file} onClick={handleUpload}>
				Convert Audio
			</button>
			{outputPath && <p>Output file path: {outputPath}</p>}
			{errorMessage && <p>{errorMessage}</p>}
		</div>
	);
}

export default AudioUpload;
