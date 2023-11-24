import Image from 'next/image';

import { Animate, MyStack } from '@/components';
import { images } from '@/assets';
import { bio } from '@/data';

import styles from './style.module.css';

export default function About() {
	const { h_1, h_2, h_3, p_1, p_2, p_3, p_4, p_5, p_6, p_7, p_8, p_9 } = bio;

	return (
		<main className={styles.page}>
			<section className={styles.intro_container}>
				<Animate.FadeUp>
					<h1 className={styles.intro_headline}>
						{h_1} {p_1}
					</h1>
				</Animate.FadeUp>

				<Animate.FadeUp delay='200ms'>
					<div className={styles.intro_tagline}>
						<h2>{h_2}</h2>
						<h4>{h_3}</h4>
					</div>
				</Animate.FadeUp>
			</section>

			<section className={styles.portrait_container}>
				<Image src={images.personal.headshot} alt='Portrait of Eli Wood' className={styles.portrait} />

				<Animate.FadeUpScroll breakpoint={0.5}>
					<h3 className={styles.portrait_text}>
						{p_3}
						<br />
						<br />
						{p_4}
					</h3>
				</Animate.FadeUpScroll>
			</section>

			<section className={styles.text_break_container}>
				<Animate.FadeUpScroll>
					<h1 className={styles.text_break}>{p_2}</h1>
				</Animate.FadeUpScroll>
			</section>

			<section className={styles.pillars}>
				<Animate.FadeUpScroll>
					<div className={styles.pillar}>
						<h2 className={styles.pillar_title}>Intentional.</h2>
						<h3 className={styles.pillar_text}>{p_5}</h3>
					</div>
				</Animate.FadeUpScroll>

				<Animate.FadeUpScroll>
					<div className={styles.pillar}>
						<h2 className={styles.pillar_title}>Practiced.</h2>
						<h3 className={styles.pillar_text}>{p_6}</h3>
					</div>
				</Animate.FadeUpScroll>

				<Animate.FadeUpScroll>
					<div className={styles.pillar}>
						<h2 className={styles.pillar_title}>Eager.</h2>
						<h3 className={styles.pillar_text}>
							{p_8} {p_9}
						</h3>
					</div>
				</Animate.FadeUpScroll>
			</section>

			<MyStack />

			<section className={styles.text_break_container}>
				<Animate.FadeUpScroll>
					<h1 className={styles.text_break}>{p_7}</h1>
				</Animate.FadeUpScroll>
			</section>
		</main>
	);
}
