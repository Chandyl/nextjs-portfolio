import React from "react";
import breakingbadImg from "../public/assets/breakingbad.png";
import cryptoImg from "../public/assets/crypto.png";
import momentImg from "../public/assets/moment.png";
import stytchImg from "../public/assets/stytch.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#ffbd59]">
					Projects
				</p>
				<h2 className="py-4">What I have Built</h2>
				<div className="grid md:grid-cols-2 gap-4 px-2">
					<ProjectItem
						title="Breaking Bad Character List"
						backgroundImg={breakingbadImg}
						projectUrl="/project1"
					/>
					<ProjectItem
						title="Crypto Price List App"
						backgroundImg={cryptoImg}
						projectUrl="/project2"
					/>
					<ProjectItem
						title="Momentum Clone"
						backgroundImg={momentImg}
						projectUrl="/project3"
					/>
					<ProjectItem
						title="Coming Soon House Marketplace"
						backgroundImg={stytchImg}
						projectUrl="/project4"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
