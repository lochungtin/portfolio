import { SkillCard } from "./cards";
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

export default function Home() {
	return (
		<main>
			<Skills />
		</main>
	)
}
