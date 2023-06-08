import React, { useState } from "react";

const Mp3ToWavConverter = () => {
	const [mp3File, setMp3File] = useState(null);
	const [wavFile, setWavFile] = useState(null);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setMp3File(file);
	};

	const handleConvert = () => {
		if (!mp3File) return;

		const reader = new FileReader();
		reader.onload = (event) => {
			const arrayBuffer = event.target.result;
			const audioContext = new (window.AudioContext ||
				window.webkitAudioContext)();
			const offlineContext = new OfflineAudioContext({
				numberOfChannels: 2,
				length: audioContext.sampleRate * 30,
				sampleRate: audioContext.sampleRate,
			});

			offlineContext.decodeAudioData(arrayBuffer, (buffer) => {
				const source = offlineContext.createBufferSource();
				source.buffer = buffer;
				source.connect(offlineContext.destination);

				source.start();
				offlineContext
					.startRendering()
					.then((renderedBuffer) => {
						const audioData = new DataView(
							renderedBuffer.getChannelData(0).buffer
						);
						const wavFile = new Blob([audioData], { type: "audio/wav" });

						setWavFile(wavFile);
					})
					.catch((error) => {
						console.error("Failed to convert MP3 to WAV:", error);
					});
			});
		};

		reader.readAsArrayBuffer(mp3File);
	};

	return (
		<div>
			<h1>MP3 to WAV Converter</h1>
			<input type="file" accept=".mp3" onChange={handleFileChange} />
			<br />
			{mp3File && <p>Selected file: {mp3File.name}</p>}
			<button onClick={handleConvert}>Convert</button>
			{wavFile && (
				<div>
					<p>Selected file: {mp3File.name}</p>
					<p>Download Link:</p>
					<a href={URL.createObjectURL(wavFile)} download="audio.wav">
						Download WAV
					</a>
				</div>
			)}
		</div>
	);
};

export default Mp3ToWavConverter;
