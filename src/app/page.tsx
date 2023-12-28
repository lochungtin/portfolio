'use client'

import Image from 'next/image';
import about from './about.module.css';
import badge from './badge.png';
import { AchievementCard, EducationCard, ProjectCard, SkillCard } from "./cards";
import layout from './layout.module.css';
import useMediaQuery from './media';

const About = ({ name }: { name: string }) => {
	return (
		<section>
			<div className={about.badge}>
				<div className={about.overlay}></div>
				<div className={about.image} style={{ backgroundImage: `url(${badge.src})` }} />
				<div className={about.content}>
					<Image className={about.icon} src="/assets/logo.svg" width={200} height={200} alt="logo" />
					<div className={about.indicatorRoot}>
						<div className={about.indicator}></div>
					</div>
					<span className={about.name}>{name}</span>
					<a className={about.link} href="https://github.com/lochungtin">@enigmaoffline</a>
				</div>
			</div>

			<h1><span>ABO</span>UT</h1>

			<p className={about.intro}>Hi, I am <span className={about.highlight}>Timothy</span> Lo</p>
			<p className={about.text}>I am a <span>PhD student</span> currently researching at UCL alongside Leo Cancer Centre to further develop techniques and methods for upright radiotherapy for the thorax region.</p>
			<h2>Artifical Intelligence</h2>
			<p className={about.text}>I currently specialise in the field of <span>computer vision</span> and <span>advanced image analysis</span>. My previous research during my masters degree is to develop an end to end, <span>image to diagnosis pipeline</span> for ultrasonic scan images of ovarian masses. My current research is closely related to my previous as it also requires extensive work on <span>analysing anatomical structures</span> of the chest region.</p>
			<h2>Software Engineering</h2>
			<p className={about.text}>On top of being a research on AI and ML, I am also a <span>self-taught web and mobile developer</span>. I specialise in the react family of frameworks, specifically <span>ReactJS</span> and <span>NextJS</span> for web development and React Native for mobile development. Visit my GitHub page or highlighted projects for more of my work.</p>
			<h2>Hobbies & Robotics</h2>
			<p className={about.text}>I have always taken an interest in <span>embedded systems</span> and <span>micro controllers</span>. In fact, I was first exposed to programming through robotics. I have created home automation systems with esp32s and arduino boards. I have also built a NAS system using the raspberry pi 4.</p>
		</section>
	);
}

const Skills = () => {
	return (
		<section>
			<h1><span>SKI</span>LLS</h1>

			<div className={layout.row + " " + layout.skill}>
				<SkillCard icon="python" name="Python" score="5" />
				<SkillCard icon="numpy" name="NumPy" score="4" />
			</div>
			<div className={layout.row + " " + layout.skill}>
				<SkillCard icon="pytorch" name="PyTorch" score="4" />
				<SkillCard icon="pandas" name="Pandas" score="4" />
			</div>
			<div className={layout.row + " " + layout.skill}>
				<SkillCard icon="typescript" name="TypeScript" score="4" />
				<SkillCard icon="javascript" name="JavaScript" score="5" />
			</div>
			<div className={layout.row + " " + layout.skill}>
				<SkillCard icon="nextjs" name="NextJS" score="4" />
				<SkillCard icon="react" name="ReactJS" score="5" />
			</div>
			<div className={layout.row + " " + layout.skill}>
				<SkillCard icon="cplusplus" name="C++" score="3" />
				<SkillCard icon="arduino" name="Arduino" score="4" />
			</div>
		</section>
	);
}

const Projects = ({ desktop }: { desktop: boolean }) => {
	return (
		<section>
			<h1><span>PRO</span>JECTS</h1>

			<div className={layout[desktop ? "row" : "col"]}>
				<ProjectCard
					otitle="Ultrasound Auto-Seg"
					sub="Auto-Segmentation of medical scans"
					icon1="python"
					icon2="numpy"
					icon3="pytorch"
					cTitle="Auto-Seg"
					text="(auto-segmentation) of ultrasonic scans for ovarian masses is my main research focus for my Master's thesis. My diagnosis pipline managed to achieved an accuracy of 92%."
					doc="https://lochungtin.github.io/#/./study/mres"
				/>
				<ProjectCard
					otitle="CoinControl"
					sub="Money Management App"
					icon1="typescript"
					icon2="react"
					icon3="firebase"
					cTitle="CoinControl"
					text="is a money management mobile app with an account system, cloud backup, analytics, and also a built-in calculator for easy calculations for recording cashflow"
					gh="https://github.com/lochungtin/coincontrol"
					doc=""
				/>
			</div>
			<div className={layout[desktop ? "row" : "col"]}>
				<ProjectCard
					otitle="Expedite"
					sub="Puzzle Game Solver"
					icon1="python"
					icon2="cplusplus"
					icon3="javascript"
					cTitle="Project Expedite"
					text="is my attempt to create solutions, algorithms, or solvers to classic puzzle games. A few principles are setup and all the algorithms abide by these principles."
					gh=""
					doc=""
				/>
				<ProjectCard
					otitle="RL Pacman"
					sub="Undergraduate Project"
					icon1="python"
					cTitle="RL Pacman"
					text="is my undergraduate disseration. The topic is to use the Pacman environment to study the differences of classic reinforcement learning and genetic algorithm."
					gh=""
					doc="https://lochungtin.github.io/#/./study/bsc"
				/>
			</div>
		</section>
	);
}

const Education = () => {
	return (
		<section>
			<h1><span>EDU</span>CATION</h1>

			<EducationCard
				name="DPhil Medical Physics and Bioengineering"
				loc="University College London"
				start="2023"
				end="Current"
				grade="Pending"
				isLeft={true}
			/>
			<EducationCard
				name="MRes AI & ML"
				loc="Imperial College London"
				start="2023"
				end="2022"
				grade="Distinction"
				isLeft={false}
			/>
			<EducationCard
				name="BSc Computer Science"
				loc="King's College London"
				start="2022"
				end="2019"
				grade="First Class Honours"
				isLeft={true}
			/>
			<EducationCard
				name="IB Diploma Program"
				loc="HKCCCU Logos Academy"
				start="2017"
				end="2019"
				isLeft={false}
			/>
		</section>
	);
}

const Achievements = ({ desktop }: { desktop: boolean }) => {
	return (
		<section>
			<h1><span>ACH</span>IEVEMENTS</h1>

			<div className={layout[desktop ? "row" : "col"]}>
				<AchievementCard
					date="November 2020"
					title="Hack Sheffield"
					sub="Multi-award-winning Hackathon Project"
					text="Our team built a working android mobile app with React Native in 24 hours and won best financial hack and best google cloud hack in the 6th Hack Sheffield hackathon."
				/>
				<AchievementCard
					date="Summer 2018"
					title="MITIA Summer Camp"
					sub="Entrepreneurship Summer Camp"
					text="I was selected to join a highly intensive week summer camp hosted by the MIT Innovative Academy and MIT Innovation Node in Hong Kong."
				/>
			</div>
			<div className={layout[desktop ? "row" : "col"]}>
				<AchievementCard
					date="May 2017"
					title="18th Annual Robofest"
					sub="Double Robotics World Championship"
					text="Our team was awarded World Championship and the People's Choice Award in the 18th annual Robofest Global Robotics Art Festival in 2017."
				/>
				<AchievementCard
					date="Summer 2015"
					title="HK Maths Olympiad"
					sub="Modelling Paper Championship"
					text="Our team was awarded first place in the Hong Kong Junior Maths Olympiad Modeling Paper for a paper on calculating the day of week given an arbitrary date."
				/>
			</div>
		</section>
	);
}

const SocialBtn = ({ icon, href }: { icon: string, href: string }) => {
	return (
		<a href={href}>
			<Image className={layout.icon} src={"./assets/" + icon + ".svg"} height={100} width={100} alt="icon" />
		</a>
	);
}

export default function Home() {
	const desktop = useMediaQuery("(min-width: 500px)");
	return (
		<>
			<main>
				<About name={"TIMOTHY"} />
				<Skills />
				<Projects desktop={desktop} />
				<Education />
				<Achievements desktop={desktop} />
			</main>
			<footer>
				<div className={layout.row}>
					<SocialBtn icon="discord" href="https://discord.com/users/155275561256747008" />
					<SocialBtn icon="npm" href="https://www.npmjs.com/~lochungtin" />
					<SocialBtn icon="github" href="https://github.com/lochungtin" />
					<SocialBtn icon="linkedin" href="https://www.linkedin.com/in/timothy-lo-chung-tin/" />
					<SocialBtn icon="gmail" href="mailto:lochungtin@gmail.com" />
				</div>
				<p>Made with 🤍 and ☕ by Timothy Lo</p>
				<p className={layout.copyright}>Copyright © 2023 Chung Tin Lo. All Rights Reserved.</p>
			</footer>
		</>
	)
}
