import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
	return (
		<div id="home" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<h1 className="py-4 text-gray-700">
						Hi, I am <span className="text-[#ffbd59]"> Stacee</span>
					</h1>
					<h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						I love exploring and creating. I am a life-long learner and I might
						be a little obsessed with rigatoni pizza.
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<a href="https://www.linkedin.com/in/staceewills/">
								<FaLinkedinIn />
							</a>
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<a href="https://github.com/Chandyl">
								<FaGithub />
							</a>
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<a href="mailto:marieclapp@gmail.com">
								<AiOutlineMail />
							</a>
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<a
								href="../assets/staceeresume.pdf"
								alt="/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<BsFillPersonLinesFill />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
