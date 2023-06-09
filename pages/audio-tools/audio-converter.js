import React, { useState } from "react";
import Compressor from "compressorjs";
import Navbar from "@/components/navbar";
import "../../app/globals.css";
import Image from "next/image";
import Card from "@/components/card";
import Footer from "@/components/footer";

const Mp3ToWavConverter = () => {
	const [mp3File, setMp3File] = useState(null);
	const [mp3FileName, setMp3FileName] = useState("");
	const [wavFile, setWavFile] = useState(null);
	const [compressedSize, setCompressedSize] = useState(0);
	const [duration, setDuration] = useState({ minutes: 0, seconds: 0 });

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setMp3File(file);
		setMp3FileName(file.name);
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

						// Calculate compressed size
						const compressedSize = wavFile.size;
						setCompressedSize(compressedSize);

						// Calculate duration
						const audioDuration = renderedBuffer.duration;
						const minutes = Math.floor(audioDuration / 60);
						const seconds = Math.floor(audioDuration % 60);
						setDuration({ minutes, seconds });
					})
					.catch((error) => {
						console.error("Failed to convert MP3 to WAV:", error);
					});
			});
		};

		reader.readAsArrayBuffer(mp3File);
	};

	return (
		<header className="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
			<Navbar />

			<section className="py-12 bg-white-900 text-black-100 sm:py-12 lg:py-16">
				<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="max-w-xl mx-auto text-center xl:max-w-2xl">
						<h2 className="text-3xl font-bold leading-tight text-black-50 sm:text-4xl xl:text-5xl mb-6">
							Mp3 to Wav
						</h2>
						<p className="mb-4">
							MP3 to WAV is a conversion process that transforms MP3 files into
							WAV format. MP3 is a popular audio compression format widely used
							for storing music and sound in smaller file sizes. However, in
							certain situations, such as when working with applications or
							devices that only support WAV format, converting MP3 to WAV
							becomes necessary.
						</p>
					</div>
					<div className="py-20 bg-white px-2">
						<div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
							<div className="md:flex">
								<div className="w-full p-3">
									<div className="relative border-dotted h-48 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
										<div className="absolute">
											<div className="flex flex-col items-center">
												<Image
													src="/google-docs.png"
													alt="Google Docs"
													width={60}
													height={30}
												/>
												<span className="block text-gray-400 font-normal">
													Attach your files here
												</span>
											</div>
										</div>
										<input
											type="file"
											accept=".mp3"
											onChange={handleFileChange}
											className="h-full w-full opacity-0"
										/>
									</div>
									{mp3File && (
										<div>
											<div className="mb-10 mt-10 rounded-md bg-[#F5F7FB] py-4 px-8">
												<div className="flex items-center justify-between">
													<span className="truncate pr-3 text-base font-medium text-[#07074D]">
														{mp3FileName}
													</span>
												</div>
												<div className="relative flex items-center justify-center md:hidden"></div>
											</div>
											<button
												className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
												onClick={handleConvert}>
												Resize Now
											</button>
										</div>
									)}

									{wavFile && (
										<div className="mt-10 bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
											<div className="px-4 py-5 sm:px-6">
												<h3 className="text-lg leading-6 font-medium text-gray-900">
													File Information
												</h3>
											</div>
											<div className="border-t border-gray-200">
												<dl>
													<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<dt className="text-sm font-medium text-gray-500">
															File Name
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
															{mp3FileName}
														</dd>
													</div>
												</dl>
											</div>
											<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
												<dt className="text-sm font-medium text-gray-500">
													Download
												</dt>
												<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
													<a
														href={URL.createObjectURL(wavFile)}
														download="converted_file.wav"
														className="text-blue-500 hover:text-blue-700">
														Download WAV
													</a>
												</dd>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</header>
	);
};

export default Mp3ToWavConverter;
