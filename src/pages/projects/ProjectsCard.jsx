import { useEffect, useState } from "react";

const ProjectsCard = () => {
	const [project, setProject] = useState([]);
	useEffect(() => {
		fetch("projects.json")
			.then((res) => res.json())
			.then((data) => setProject(data));
	}, []);

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
			{project.map((card) => (
				<div key={card.id} className='card bg-base-100  shadow-xl'>
					<figure>
						<img
							className='w-full h-[300px]'
							src={card.image}
							alt={card.name}
						/>
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>{card.name}</h2>
						<p>
							{card.description.length > 100
								? `${card.description.slice(0, 90)}.....`
								: card.description}
						</p>
						<div className='card-actions justify-start'>
							<button className='btn btn-primary'>View Details</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProjectsCard;
