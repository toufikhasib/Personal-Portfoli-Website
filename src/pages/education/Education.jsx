const Education = () => {
	const educationData = [
		{
			degree: "Diploma in Textile",
			department: "Textile Engineering",
			institution: "Shahid Abdur Rab Serniabat Textile Engineering Collage",
			year: "2023",
		},
	];
	return (
		<div>
			{/* Section Heading */}
			<h2 className='text-2xl font-bold mb-6 text-center'>
				Educational Qualification
			</h2>
			<table className='table-auto w-full border-collapse'>
				<thead>
					<tr>
						<th className='border px-4 py-2'>Degree</th>
						<th className='border px-4 py-2'>Department</th>
						<th className='border px-4 py-2'>Institution</th>
						<th className='border px-4 py-2'>Year</th>
					</tr>
				</thead>
				<tbody>
					{educationData.map((education, index) => (
						<tr key={index}>
							<td className='border px-4 py-2'>{education.degree}</td>
							<td className='border px-4 py-2'>{education.department}</td>
							<td className='border px-4 py-2'>{education.institution}</td>
							<td className='border px-4 py-2'>{education.year}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Education;
