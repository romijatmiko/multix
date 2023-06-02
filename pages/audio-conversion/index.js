import Navbar from "@/components/navbar";
import "../../app/globals.css";
import Image from "next/image";
import Card from "@/components/card";
import Footer from "@/components/footer";

export default function Home() {
	return (
		<header class="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
			<Navbar />
			<main class="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
				<h1 class="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
					Make your photos
					<span class="relative whitespace-nowrap text-orange-400">
						<svg
							aria-hidden="true"
							viewBox="0 0 418 42"
							class="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-300/70"
							preserveAspectRatio="none">
							<path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
						</svg>
						<span class="relative">Pop</span>
					</span>
				</h1>
				<p class="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
					Want to style up your photos? Maybe get that perfect LinkedIn
					headshot? Let our AI do its magic and replace your background with
					your color of choice. 100% free – pop your photos today.
				</p>
				<a
					class="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
					href="#">
					Pop your photos →
				</a>
				<label
					class="flex  cursor-pointer appearance-none justify-center rounded-md border border-dashed border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
					tabindex="0">
					<span for="photo-dropbox" class="flex items-center space-x-2">
						<svg class="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
							<path
								d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="24"></path>
							<path
								d="M80,128a80,80,0,1,1,144,48"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="24"></path>
							<polyline
								points="118.1 161.9 152 128 185.9 161.9"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="24"></polyline>
							<line
								x1="152"
								y1="208"
								x2="152"
								y2="128"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="24"></line>
						</svg>
						<span class="text-xs font-medium text-gray-600">
							Drop files to Attach, or
							<span class="text-blue-600 underline">browse</span>
						</span>
					</span>
					<input id="photo-dropbox" type="file" class="sr-only" />
				</label>
			</main>

			<Footer />
		</header>
	);
}
