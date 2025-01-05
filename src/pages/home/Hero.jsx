import React from "react";

const Hero = () => {
	return (
		<div>
			<div className='hero bg-base-200 '>
				<div className='hero-content flex-col lg:flex-row-reverse'>
					<img
						src='https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp'
						className='w-full md:w-5/12 rounded-lg shadow-2xl'
					/>
					<div>
						<h1 className='text-5xl font-bold'>
							Hello I'am Toufik Hasib.
							<br />
							Frontend Developer
							<br />
							Based In Bangladesh.
						</h1>
						<p className='py-6'>
							I specialize in creating responsive and attractive websites using
							HTML, CSS, JavaScript, and React. I am passionate about building
							user-friendly interfaces and am eager to learn and grow
							professionally.
						</p>
						<button className='btn btn-primary'>Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
