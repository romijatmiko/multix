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
							Image Resizer
						</h2>
						<p className="mb-4">
							We are creating a tool that helps you be more productive and
							efficient when building websites and webapps
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
										<div class="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
											<div class="flex items-center justify-between">
												<span class="truncate pr-3 text-base font-medium text-[#07074D]">
													{mp3FileName}
												</span>
											</div>
											<div class="relative flex items-center justify-center md:hidden">
												<button type="button">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke-width="1.5"
														stroke="currentColor"
														aria-hidden="true"
														class="h-6 w-auto text-slate-900">
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
													</svg>
												</button>
											</div>
										</div>
									)}
									<div class="relative flex items-center justify-center md:hidden">
										<button onClick={handleConvert}>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												aria-hidden="true"
												class="h-6 w-auto text-slate-900">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
											</svg>
										</button>
									</div>
									{wavFile && (
										<div>
											<p>Selected file: {mp3File.name}</p>
											<p>Download Link:</p>
											<a
												href={URL.createObjectURL(wavFile)}
												download="audio.wav">
												Download WAV
											</a>
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
