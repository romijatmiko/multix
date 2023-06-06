import ffmpeg from "fluent-ffmpeg";

const compressAudio = (inputPath, outputPath, bitrate) => {
	return new Promise((resolve, reject) => {
		ffmpeg(inputPath)
			.audioBitrate(bitrate)
			.on("end", () => {
				resolve(outputPath);
			})
			.on("error", (error) => {
				reject(error);
			})
			.save(outputPath);
	});
};

export default compressAudio;
