import { useLoaderData } from "react-router-dom";

const ProjectsCardDetails = () => {
	const project = useLoaderData();
	console.log(project);
	return (
		<div>
			<div className='max-w-4xl mx-auto p-5 bg-white shadow-lg rounded-lg'>
				{/* Project Image */}
				<img
					src={project.image}
					alt={project.name}
					className='w-full h-[500px] rounded-lg mb-5'
				/>

				{/* Project Name */}
				<h1 className='text-3xl font-bold text-gray-800 mb-4'>
					{project.name}
				</h1>

				{/* Description */}
				<p className='text-gray-700 text-lg mb-5'>{project.description}</p>

				{/* Technologies Used */}
				<h2 className='text-2xl font-semibold text-gray-800 mb-3'>
					Technologies Used:
				</h2>
				<ul className='list-disc pl-5 text-gray-700 mb-5'>
					{project.technologies.map((tech, index) => (
						<li key={index} className='text-lg'>
							{tech}
						</li>
					))}
				</ul>

				{/* Challenges */}
				<h2 className='text-2xl font-semibold text-gray-800 mb-3'>
					Challenges:
				</h2>
				<p className='text-gray-700 text-lg mb-5'>{project.challenges}</p>

				{/* Improvements */}
				<h2 className='text-2xl font-semibold text-gray-800 mb-3'>
					Future Improvements:
				</h2>
				<p className='text-gray-700 text-lg mb-5'>{project.improvements}</p>

				{/* Links */}
				<div className='flex flex-wrap gap-4'>
					<a
						href={project.liveLink}
						target='_blank'
						rel='noopener noreferrer'
						className='btn btn-primary'>
						View Live
					</a>
					<a
						href={project.githubLink}
						target='_blank'
						rel='noopener noreferrer'
						className='btn btn-secondary'>
						View Code
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectsCardDetails;
