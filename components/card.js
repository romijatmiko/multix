import React from "react";

const Card = () => {
	return (
		<div>
			<ul class="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
				<li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
					<div class="order-1 sm:ml-6 xl:ml-0">
						<h3 class="mb-1 text-slate-900 font-semibold dark:text-slate-200">
							<span class="mb-1 block text-sm font-extrabold leading-6 text-black">
								Audio Tools
							</span>
						</h3>
						<div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
							<p>
								audio compression ensures efficient use of storage space on web
								servers, allowing for the hosting and delivery of a large volume
								of audio content. By reducing the file size, web developers can
								accommodate more audio files within the server's storage
								capacity.
							</p>
						</div>
						<a
							class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
							href="/audio-tools">
							Use Now
							<span class="sr-only">
								, Completely unstyled, fully accessible UI components
							</span>
							<svg
								class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
								width="3"
								height="6"
								viewBox="0 0 3 6"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round">
								<path d="M0 0L3 3L0 6"></path>
							</svg>
						</a>
					</div>
					<img
						src="https://images.unsplash.com/photo-1618609377864-68609b857e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
						alt=""
						class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
						width="1216"
						height="640"
					/>
				</li>
				<li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
					<div class="order-1 sm:ml-6 xl:ml-0">
						<h3 class="mb-1 text-slate-900 font-semibold dark:text-slate-200">
							<span class="mb-1 block text-sm leading-6 font-extrabold text-black">
								Image Tools
							</span>
						</h3>
						<div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
							<p>
								A background remover is a tool or software that allows users to
								easily remove the background from an image. It utilizes advanced
								algorithms and techniques to automatically detect and isolate
								the foreground subject from the bg.
							</p>
						</div>
						<a
							class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
							href="/image-tools">
							Use Now
							<span class="sr-only"></span>
							<svg
								class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
								width="3"
								height="6"
								viewBox="0 0 3 6"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round">
								<path d="M0 0L3 3L0 6"></path>
							</svg>
						</a>
					</div>
					<img
						src="https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
						alt=""
						class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
						width="1216"
						height="640"
					/>
				</li>
				<li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
					<div class="order-1 sm:ml-6 xl:ml-0">
						<h3 class="mb-1 text-slate-900 font-semibold dark:text-slate-200">
							<span class="mb-1 block text-sm leading-6 font-extrabold text-black">
								Video Tools
							</span>
						</h3>
						<div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
							<p>
								An image resizer is a tool or software that allows you to change
								the dimensions or size of an image. It enables users to scale an
								image up or down, maintaining its aspect ratio or altering it as
								desired.
							</p>
						</div>
						<a
							class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
							href="/video-tools">
							Use Now
							<span class="sr-only">
								, Seamless SVG background patterns by the makers of Tailwind
								CSS.
							</span>
							<svg
								class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
								width="3"
								height="6"
								viewBox="0 0 3 6"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round">
								<path d="M0 0L3 3L0 6"></path>
							</svg>
						</a>
					</div>
					<img
						src="https://images.unsplash.com/photo-1523461811963-7f1023caeddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80"
						alt=""
						class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
						width="1216"
						height="640"
					/>
				</li>
				<li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
					<div class="order-1 sm:ml-6 xl:ml-0">
						<h3 class="mb-1 text-slate-900 font-semibold dark:text-slate-200">
							<span class="mb-1 block text-sm leading-6 font-extrabold text-black">
								Social Media Tools
							</span>
						</h3>
						<div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
							<p>
								An image resizer is a tool or software that allows you to change
								the dimensions or size of an image. It enables users to scale an
								image up or down, maintaining its aspect ratio or altering it as
								desired.
							</p>
						</div>
						<a
							class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
							href="/socialmedia-tools">
							Use Now
							<span class="sr-only">
								, Seamless SVG background patterns by the makers of Tailwind
								CSS.
							</span>
							<svg
								class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
								width="3"
								height="6"
								viewBox="0 0 3 6"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round">
								<path d="M0 0L3 3L0 6"></path>
							</svg>
						</a>
					</div>
					<img
						src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
						alt=""
						class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
						width="1216"
						height="640"
					/>
				</li>
				<li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
					<div class="order-1 sm:ml-6 xl:ml-0">
						<h3 class="mb-1 text-slate-900 font-semibold dark:text-slate-200">
							<span class="mb-1 block text-sm leading-6 font-extrabold text-black">
								Youtube Tools
							</span>
						</h3>
						<div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
							<p>
								An image resizer is a tool or software that allows you to change
								the dimensions or size of an image. It enables users to scale an
								image up or down, maintaining its aspect ratio or altering it as
								desired.
							</p>
						</div>
						<a
							class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
							href="/youtube-tools">
							Use Now
							<span class="sr-only">
								, Seamless SVG background patterns by the makers of Tailwind
								CSS.
							</span>
							<svg
								class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
								width="3"
								height="6"
								viewBox="0 0 3 6"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round">
								<path d="M0 0L3 3L0 6"></path>
							</svg>
						</a>
					</div>
					<img
						src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
						alt=""
						class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
						width="1216"
						height="640"
					/>
				</li>
			</ul>
		</div>
	);
};

export default Card;
