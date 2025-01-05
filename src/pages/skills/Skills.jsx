import html from "../../assets/images.png";
import css from "../../assets/css.jpeg";
import tailwind from "../../assets/tailwind.png";
import bostap from "../../assets/bostap.jpeg";
import javascript from "../../assets/js.png";
import react from "../../assets/react.png";
import git from "../../assets/git.png";
import figma from "../../assets/figma.png";
import nodejs from "../../assets/nextjs-icon.webp";
import mongobd from "../../assets/mongodb.png";
const Skills = () => {
	const skillsData = [
		{
			name: "HTML",
			image: html,
		},
		{
			name: "CSS",
			image: css,
		},
		{
			name: "Tailwindcss",
			image: tailwind,
		},
		{
			name: "Bootstrap",
			image: bostap,
		},
		{
			name: "Javascript",
			image: javascript,
		},
		{
			name: "React",
			image: react,
		},
		{
			name: "Git",
			image: git,
		},
		{
			name: "Figma",
			image: figma,
		},
		{
			name: "Next.js",
			image: nodejs,
		},
		{
			name: "MongoDB",
			image: mongobd,
		},
	];

	return (
		<section className='skills-section p-8'>
			<h2 className='text-2xl font-bold mb-10 text-center'>My Skills</h2>
			<p className='text-lg font-bold mb-6 text-center'>
				I am skilled in Frontend technologies like HTML, CSS, JavaScript, React,
				and Tailwind CSS. For Backend, I work with Node.js and MongoDB. I also
				use Git for version control and Figma for design. I’m always eager to
				learn and grow my technical expertise.
			</p>
			<div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-20 mt-10'>
				{skillsData.map((skill, index) => (
					<div key={index} className='card bg-base-100  shadow-xl'>
						<img
							className='w-full h-[100px] md:h-[150px]'
							src={skill.image}
							alt={skill.name}
						/>
						<div className='card-body'>
							<h2 className='card-title justify-center'>{skill.name}</h2>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
