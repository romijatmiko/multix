import React, { useState } from "react";
import lamejs from "lamejs";

export default function AudioConverter() {
	const [inputFile, setInputFile] = useState(null);
	const [convertedFile, setConvertedFile] = useState(null);
	const [bitrate, setBitrate] = useState(128);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setInputFile(file);
	};

	const handleBitrateChange = (event) => {
		const selectedBitrate = parseInt(event.target.value);
		setBitrate(selectedBitrate);
	};

	const handleConvert = async () => {
		try {
			const reader = new FileReader();

			reader.onload = async () => {
				const audioData = reader.result;
				const audioContext = new AudioContext();
				const audioBuffer = await audioContext.decodeAudioData(audioData);
				const audioChannelData = audioBuffer.getChannelData(0);
				const audioArray = new Int16Array(audioChannelData.length);

				for (let i = 0; i < audioChannelData.length; i++) {
					audioArray[i] = audioChannelData[i] * 32767; // Convert float (-1 to 1) to int16 (-32767 to 32767)
				}

				const mp3Encoder = new lamejs.Mp3Encoder(
					1,
					audioContext.sampleRate,
					bitrate
				);

				const mp3Data = [];
				let remaining = audioArray.length;

				while (remaining >= 0) {
					const samples = mp3Encoder.encodeBuffer(audioArray);
					mp3Data.push(new Int8Array(samples));
					remaining -= samples.length;
				}

				const finalSamples = mp3Encoder.flush();
				mp3Data.push(new Int8Array(finalSamples));

				const mp3Blob = new Blob(mp3Data, { type: "audio/mp3" });
				const convertedFile = new File([mp3Blob], "converted.mp3", {
					type: "audio/mp3",
				});

				setConvertedFile(convertedFile);
			};

			reader.readAsArrayBuffer(inputFile);
		} catch (error) {
			console.error("Error converting audio:", error);
		}
	};

	return (
		<div>
			<input type="file" accept="audio/*" onChange={handleFileChange} />
			<input
				type="range"
				min="32"
				max="320"
				step="32"
				value={bitrate}
				onChange={handleBitrateChange}
			/>
			<button onClick={handleConvert}>Convert to MP3</button>
			{convertedFile && (
				<a
					href={URL.createObjectURL(convertedFile)}
					download={convertedFile.name}>
					Download Converted File
				</a>
			)}
		</div>
	);
}
