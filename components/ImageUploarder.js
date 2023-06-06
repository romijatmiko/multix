import React, { useState } from "react";
import Compressor from "compressorjs";

const ImageUploader = () => {
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
		<div>
			<h1>Image Uploader</h1>
			<input type="file" accept="image/*" onChange={handleImageChange} />
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
	);
};

export default ImageUploader;
