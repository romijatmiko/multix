import Navbar from "@/components/navbar";
import "../../app/globals.css";
import Image from "next/image";
import Card from "@/components/card";
import Footer from "@/components/footer";

export default function Home() {
	return (
		<header class="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
			<Navbar />

			<section class="py-12 bg-white-900 text-black-100 sm:py-12 lg:py-16">
				<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div class="max-w-xl mx-auto text-center xl:max-w-2xl">
						<h2 class="text-3xl font-bold leading-tight text-black-50 sm:text-4xl xl:text-5xl mb-6">
							Youtube Tools
						</h2>
						<p class="mb-4">
							We are creating a tool that helps you be more productive and
							efficient when building websites and webapps
						</p>
					</div>
				</div>
				<div class="py-20 bg-white px-2">
					<div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
						<div class="md:flex">
							<div class="w-full p-3">
								<div class="relative border-dotted h-48 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
									<div class="absolute">
										<div class="flex flex-col items-center">
											<i class="fa fa-folder-open fa-4x text-blue-700"></i>
											<span class="block text-gray-400 font-normal">
												Attach you files here
											</span>
										</div>
									</div>

									<input type="file" class="h-full w-full opacity-0" name="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</header>
	);
}
