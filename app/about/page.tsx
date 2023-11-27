import Image from 'next/image';

import { Animate, MyStack } from '@/components';
import { images } from '@/assets';
import { bio } from '@/data';

import styles from './style.module.css';

const { FadeUp } = Animate;

export default function About() {
	const { h_1, h_2, h_3, p_1, p_2, p_3, p_4, p_5, p_6, p_7, p_8, p_9 } = bio;

	return (
		<main className={styles.page}>
			<section className={styles.intro_container}>
				<FadeUp breakpoint={100} delay={500}>
					<h1 className={styles.intro_headline}>
						{h_1} {p_1}
					</h1>
				</FadeUp>

				<FadeUp breakpoint={100} delay={600}>
					<div className={styles.intro_tagline}>
						<h2>{h_2}</h2>
						<h4>{h_3}</h4>
					</div>
				</FadeUp>
			</section>

			<section className={styles.portrait_container}>
				<FadeUp breakpoint={100} delay={800}>
					<Image src={images.personal.headshot} alt='Portrait of Eli Wood' className={styles.portrait} />
				</FadeUp>

				<FadeUp breakpoint={100} delay={900}>
					<h3 className={styles.portrait_text}>
						{p_3}
						<br />
						<br />
						{p_4}
					</h3>
				</FadeUp>
			</section>

			<section className={styles.text_break_container}>
				<FadeUp>
					<h1 className={styles.text_break}>{p_2}</h1>
				</FadeUp>
			</section>

			<section className={styles.pillars}>
				<FadeUp>
					<div className={styles.pillar}>
						<h2 className={styles.pillar_title}>Intentional.</h2>
						<h3 className={styles.pillar_text}>{p_5}</h3>
					</div>
				</FadeUp>

				<FadeUp>
					<div className={styles.pillar}>
						<h2 className={styles.pillar_title}>Practiced.</h2>
						<h3 className={styles.pillar_text}>{p_6}</h3>
					</div>
				</FadeUp>

				<FadeUp>
					<div className={styles.pillar}>
						<h2 className={styles.pillar_title}>Eager.</h2>
						<h3 className={styles.pillar_text}>
							{p_8} {p_9}
						</h3>
					</div>
				</FadeUp>
			</section>

			<MyStack />

			<section className={styles.text_break_container}>
				<FadeUp>
					<h1 className={styles.text_break}>{p_7}</h1>
				</FadeUp>
			</section>
		</main>
	);
}
