import React, { useState } from "react";
import { saveAs } from "file-saver";
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
					const left = audioArray.subarray(
						audioArray.length - remaining,
						audioArray.length - remaining + 1152
					);
					const mp3buf = mp3Encoder.encodeBuffer(left);

					mp3Data.push(mp3buf);
					remaining -= 1152;
				}

				const mp3buf = mp3Encoder.flush();

				if (mp3buf.length > 0) {
					mp3Data.push(mp3buf);
				}

				const mergedMp3Data = new Uint8Array(
					mp3Data.length * mp3Data[0].length
				);

				for (let i = 0, offset = 0; i < mp3Data.length; i++) {
					mergedMp3Data.set(mp3Data[i], offset);
					offset += mp3Data[i].length;
				}

				const mp3Blob = new Blob([mergedMp3Data], { type: "audio/mp3" });
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

	const handleDownload = () => {
		if (convertedFile) {
			saveAs(convertedFile);
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
			<button onClick={handleDownload} disabled={!convertedFile}>
				Download Converted File
			</button>
		</div>
	);
}
