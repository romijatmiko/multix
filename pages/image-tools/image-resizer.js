import React, { useState } from "react";
import Compressor from "compressorjs";
import Navbar from "@/components/navbar";
import "../../app/globals.css";
import Image from "next/image";
import Card from "@/components/card";
import Footer from "@/components/footer";

export default function Home() {
	const [originalImage, setOriginalImage] = useState(null);
	const [compressedImage, setCompressedImage] = useState(null);
	const [imageWidth, setImageWidth] = useState(0);
	const [imageHeight, setImageHeight] = useState(0);

	const handleImageChange = (event) => {
		const file = event.target.files[0];

		new Compressor(file, {
			quality: 0.6,
			maxWidth: 9000,
			maxHeight: 9000,
			success(result) {
				setOriginalImage(URL.createObjectURL(file));
				setCompressedImage(URL.createObjectURL(result));
				setImageWidth(result.width);
				setImageHeight(result.height);
			},
			error(err) {
				console.error("Error compressing image:", err.message);
			},
		});
	};

	const handleWidthChange = (event) => {
		const width = parseInt(event.target.value);
		setImageWidth(width);
	};

	const handleHeightChange = (event) => {
		const height = parseInt(event.target.value);
		setImageHeight(height);
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
											className="h-full w-full opacity-0"
											onChange={handleImageChange}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					{originalImage && (
						<div className="py-20 bg-white px-2">
							<div className="relative h-20 rounded-lg  bg-white-100 flex justify-center items-center">
								<div className="absolute">
									<div className="flex flex-col items-center">
										<Image
											src={compressedImage}
											alt="Google Docs"
											width={60}
											height={30}
										/>
									</div>
								</div>
							</div>
						</div>
					)}
					{compressedImage && (
						<div class="flex flex-1 flex-col  justify-center space-y-5 max-w-md mx-auto mt-8">
							<div class="flex flex-col space-y-2 text-center">
								<h2 class="text-lg md:text-lg font-bold">Set High & Width</h2>
							</div>
							<div class="flex flex-col max-w-md space-y-5">
								<input
									type="number"
									id="widthInput"
									value={imageWidth}
									onChange={handleWidthChange}
									placeholder="Width"
									class="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
								/>
								<input
									placeholder="Height"
									type="number"
									id="heightInput"
									value={imageHeight}
									onChange={handleHeightChange}
									class="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
								/>
								<a href={compressedImage} download="compressed_image.jpg">
									<button class="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
										Resize & Download
									</button>
								</a>
							</div>
						</div>
					)}
				</div>
			</section>

			<Footer />
		</header>
	);
}
