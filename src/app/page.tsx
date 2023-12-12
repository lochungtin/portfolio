import { EducationCard, SkillCard } from "./cards";
import layout from './layout.module.css';

const Skills = () => {
	return (
		<section>
			<h1><span>SKI</span>LLS</h1>

			<div className={layout.row}>
				<SkillCard icon="python" name="Python" score="5" />
				<SkillCard icon="numpy" name="NumPy" score="4" />
			</div>
			<div className={layout.row}>
				<SkillCard icon="pytorch" name="PyTorch" score="4" />
				<SkillCard icon="pandas" name="Pandas" score="4" />
			</div>
			<div className={layout.row}>
				<SkillCard icon="javascript" name="JavaScript" score="5" />
				<SkillCard icon="typescript" name="TypeScript" score="4" />
			</div>
			<div className={layout.row}>
				<SkillCard icon="react" name="ReactJS" score="5" />
				<SkillCard icon="nextjs" name="NextJS" score="4" />
			</div>
			<div className={layout.row}>
				<SkillCard icon="cplusplus" name="C++" score="3" />
				<SkillCard icon="arduino" name="Arduino" score="4" />
			</div>
		</section>
	);
}

const Projects = () => {

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
				grade="36 / 45"
				isLeft={false}
			/>
		</section>
	);
}

export default function Home() {
	return (
		<main>
			<Skills />
			<Education />
		</main>
	)
}
