import { useState } from "react";
import Compressor from "compressorjs";

const AudioConverter = () => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [convertedFile, setConvertedFile] = useState(null);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setSelectedFile(file);
	};

	const convertAudio = () => {
		const reader = new FileReader();
		reader.onload = async (event) => {
			const arrayBuffer = event.target.result;
			const compressedData = await compressAudio(arrayBuffer);
			const compressedBlob = new Blob([compressedData], { type: "audio/wav" });
			setConvertedFile(compressedBlob);
		};
		reader.readAsArrayBuffer(selectedFile);
	};

	const compressAudio = (arrayBuffer) => {
		return new Promise((resolve) => {
			const audioContext = new (window.AudioContext ||
				window.webkitAudioContext)();
			audioContext.decodeAudioData(arrayBuffer, (audioBuffer) => {
				const audioData = {
					sampleRate: audioBuffer.sampleRate,
					numberOfChannels: audioBuffer.numberOfChannels,
					channelData: Array.from(audioBuffer.getChannelData(0)),
				};
				const compressorOptions = {
					threshold: -24,
					ratio: 12,
					attack: 0.003,
					release: 0.25,
				};
				const compressor = new Compressor(compressorOptions);
				const compressedData = compressor.compress(audioData);
				const wavData = convertToWav(compressedData);
				resolve(wavData);
			});
		});
	};

	const convertToWav = (audioData) => {
		const wavData = new Uint8Array(audioData.channelData.length * 2);
		let offset = 0;
		for (let i = 0; i < audioData.channelData.length; i++) {
			const sample = audioData.channelData[i];
			const sample16 = Math.max(-1, Math.min(1, sample)) * 0x7fff;
			wavData[offset++] = sample16 & 0xff;
			wavData[offset++] = (sample16 >> 8) & 0xff;
		}
		return wavData;
	};

	const downloadFile = () => {
		const url = URL.createObjectURL(convertedFile);
		const link = document.createElement("a");
		link.href = url;
		link.download = "compressed_audio.wav";
		link.click();
	};

	return (
		<div>
			<input type="file" onChange={handleFileChange} />
			<button onClick={convertAudio} disabled={!selectedFile}>
				Convert Audio
			</button>
			{convertedFile && (
				<div>
					<audio controls src={URL.createObjectURL(convertedFile)}></audio>
					<button onClick={downloadFile}>Download</button>
				</div>
			)}
		</div>
	);
};

export default AudioConverter;
