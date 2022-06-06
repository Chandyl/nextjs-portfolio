import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#ffbd59]">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600">
						I am not your normal developer
					</p>
					<p className="py-2 text-gray-600">
						I have spent the last 15 plus years in the beauty industry working
						as a hairstylist, but I have always had a knack for technology and
						working with computers. In 2017, I took time off to care for family. In that time
						I decided to take a course on HTML/CSS and it was then I discovered my love for programming.
					</p>
					<p className="py-2 text-gray-600">
						Fascinated with how intricate programming can be, I was quickly
						drawn to learn more. I started learning JavaScript and was even more
						enthused with making websites interactive.Instead of returning to the salon 
						I went to school full time. I have graduated and spending my time
						learning and building projects using the MERN stack and whatever
						else sparks my interest.
					</p>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image
						src="/../public/assets/self.jpg"
						width="200"
						height="200"
						alt="/"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
