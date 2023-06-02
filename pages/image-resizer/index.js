import Navbar from "@/components/navbar";
import "../../app/globals.css";
import Image from "next/image";
import Card from "@/components/card";
import Footer from "@/components/footer";

export default function Home() {
	return (
		<header class="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
			<Navbar />

			<div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
				<div class="w-full h-64 lg:w-1/2 lg:h-auto">
					<img
						class="h-full w-full object-cover"
						src="https://images.unsplash.com/photo-1523461811963-7f1023caeddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80"
						alt="Winding mountain road"
					/>
				</div>

				<div class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
					<div class="flex flex-col p-12 md:px-16">
						<h2 class="text-2xl font-medium uppercase text-black-800 lg:text-4xl">
							Image Resizer
						</h2>
						<p class="mt-4">
							An image resizer is a tool or software that allows you to change
							the dimensions or size of an image. It enables users to scale an
							image up or down, maintaining its aspect ratio or altering it as
							desired.
						</p>

						<div class="mt-8"></div>
					</div>
				</div>
			</div>
			<div class="flex items-center justify-center">
				<div class="mx-auto w-full max-w-[550px] bg-white">
					<form class="py-4 px-9">
						<div class="mb-5"></div>

						<div class="mb-6 pt-4">
							<label class="mb-5 block text-xl font-semibold text-[#07074D]">
								Upload File
							</label>

							<div class="mb-8">
								<input type="file" name="file" id="file" class="sr-only" />
								<label
									for="file"
									class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
									<div>
										<span class="mb-2 block text-xl font-semibold text-[#07074D]">
											Drop files here
										</span>
										<span class="mb-2 block text-base font-medium text-[#6B7280]">
											Or
										</span>
										<span class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
											Browse
										</span>
									</div>
								</label>
							</div>

							<div class="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
								<div class="flex items-center justify-between">
									<span class="truncate pr-3 text-base font-medium text-[#07074D]">
										banner-design.png
									</span>
									<button class="text-[#07074D]">
										<svg
											width="10"
											height="10"
											viewBox="0 0 10 10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
												fill="currentColor"
											/>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
												fill="currentColor"
											/>
										</svg>
									</button>
								</div>
							</div>

							<div class="rounded-md bg-[#F5F7FB] py-4 px-8">
								<div class="flex items-center justify-between">
									<span class="truncate pr-3 text-base font-medium text-[#07074D]">
										banner-design.png
									</span>
									<button class="text-[#07074D]">
										<svg
											width="10"
											height="10"
											viewBox="0 0 10 10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
												fill="currentColor"
											/>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
												fill="currentColor"
											/>
										</svg>
									</button>
								</div>
								<div class="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
									<div class="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-[#6A64F1]"></div>
								</div>
							</div>
						</div>

						<div>
							<button class="hover:shadow-form w-full rounded-md bg-[#F37726] py-3 px-8 text-center text-base font-semibold text-white outline-none">
								Send File
							</button>
						</div>
					</form>
				</div>
			</div>

			<Footer />
		</header>
	);
}
