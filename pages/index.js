import Head from 'next/head';
import EducationCard from './components/EducationCard';
import SkillCard from './components/SkillCard';

const Skill = () => {
	return (
		<section className="skills">
			<div className="row">
				<SkillCard icon="python" name="Python" score={100} />
				<SkillCard icon="python" name="Python" score={100} />
			</div>
			<div className="row">
				<SkillCard icon="python" name="Python" score={100} />
				<SkillCard icon="python" name="Python" score={100} />
			</div>
		</section>
	);
}

const Education = () => {
	return (
		<section className="education">
			<EducationCard
				cover="left"
				highlight="DPhil"
				title="Medical Physics and Bioengineering"
				location="University College London"
				start="2023"
				end="Current"
				grade="Pending"
			/>
			<EducationCard
				cover="left"
				highlight="DPhil"
				title="Medical Physics and Bioengineering"
				location="University College London"
				start="2023"
				end="Current"
				grade="Pending"
			/>
		</section>
	);
}

export default function Home() {
	return (
		<>
			<Head>

			</Head>
			<Skill />
		</>
	);
}