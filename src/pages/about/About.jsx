const About = () => {
	return (
		<div>
			<section className='py-12 bg-gray-50'>
				<div className='max-w-6xl mx-auto px-6'>
					{/* Section Header */}
					<div className='text-center mb-10'>
						<h1 className='text-4xl font-bold text-gray-800 mb-4'>About Me</h1>
						<p className='text-lg text-gray-600'>
							A glimpse into my journey, skills, and passion.
						</p>
					</div>

					{/* About Content */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
						{/* Personal Image */}
						<div className='text-center'>
							<img
								src='your-image.jpg'
								alt='Toufik Hasib'
								className='w-3/4 mx-auto rounded-lg shadow-lg'
							/>
						</div>

						{/* About Text */}
						<div>
							<h2 className='text-2xl font-semibold text-gray-800 mb-4'>
								Hi, I'm Toufik Hasib!
							</h2>
							<p className='text-gray-700 mb-4'>
								I'm a passionate Frontend Developer based in Bangladesh, with a
								knack for building user-friendly and visually stunning websites.
								My programming journey began with curiosity during high school,
								and over the years, I've honed my skills in HTML, CSS,
								JavaScript, and React.
							</p>
							<p className='text-gray-700 mb-4'>
								Beyond coding, I find joy in painting and playing football,
								which fuel my creativity and keep me energized. I believe that
								creativity is key to both art and programming.
							</p>
							<p className='text-gray-700'>
								Currently, I'm looking for opportunities where I can contribute
								my skills, learn from talented peers, and grow professionally.
							</p>
						</div>
					</div>

					{/* Skills Section */}
					<div className='mt-12'>
						<h3 className='text-2xl font-semibold text-gray-800 mb-6 text-center'>
							My Skills
						</h3>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
							<div className='p-4 border rounded-lg shadow-sm'>
								<h4 className='text-xl font-bold text-gray-800'>HTML</h4>
								<p className='text-gray-600'>5+ years of experience</p>
							</div>
							<div className='p-4 border rounded-lg shadow-sm'>
								<h4 className='text-xl font-bold text-gray-800'>CSS</h4>
								<p className='text-gray-600'>Responsive designs</p>
							</div>
							<div className='p-4 border rounded-lg shadow-sm'>
								<h4 className='text-xl font-bold text-gray-800'>JavaScript</h4>
								<p className='text-gray-600'>Dynamic functionality</p>
							</div>
							<div className='p-4 border rounded-lg shadow-sm'>
								<h4 className='text-xl font-bold text-gray-800'>React</h4>
								<p className='text-gray-600'>Interactive UI</p>
							</div>
						</div>
					</div>

					{/* Call-to-Action */}
					<div className='mt-12 text-center'>
						<a
							href='/resume.pdf'
							download
							className='px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700'>
							Download My Resume
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
