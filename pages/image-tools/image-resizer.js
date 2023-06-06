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
			maxWidth: 800,
			maxHeight: 800,
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
												<i className="fa fa-folder-open fa-4x text-blue-700"></i>
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
						<div>
							<h2>Original Image</h2>
							<img src={originalImage} alt="Original" />
						</div>
					)}
					{compressedImage && (
						<div>
							<h2>Compressed Image</h2>
							<div>
								<label htmlFor="widthInput">Width:</label>
								<input
									type="number"
									id="widthInput"
									value={imageWidth}
									onChange={handleWidthChange}
								/>
							</div>
							<div>
								<label htmlFor="heightInput">Height:</label>
								<input
									type="number"
									id="heightInput"
									value={imageHeight}
									onChange={handleHeightChange}
								/>
							</div>
							<img
								src={compressedImage}
								alt="Compressed"
								style={{ width: imageWidth, height: imageHeight }}
							/>
						</div>
					)}
				</div>
			</section>

			<Footer />
		</header>
	);
}
