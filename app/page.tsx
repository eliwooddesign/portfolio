// external
import Image from 'next/image';
import { Menu as MenuIcon } from 'lucide-react';

// internal
import { Animate, MyStack } from '@/components';
import { images } from '@/assets';
import { bio } from '@/data';

// styles
import styles from './page.module.css';

const { FadeUp } = Animate;

export default function Home() {
	const { h_1, h_2, h_3, p_1, p_2, p_3, p_4, p_5, p_6, p_7, p_8, p_9 } = bio;

	return (
		<main className={styles.page}>
			<div className={styles.temp}>
				<button>Text Button</button>

				<button>
					<MenuIcon />
				</button>
			</div>

			<section className={styles.intro_container}>
				<FadeUp breakpoint={100} delay={500}>
					<h1 className={styles.banner_text}>
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
					<p className={styles.portrait_text}>
						{p_3}
						<br />
						<br />
						{p_4}
					</p>
				</FadeUp>
			</section>

			<section>
				<FadeUp>
					<h1 className={styles.banner_text}>{p_2}</h1>
				</FadeUp>
			</section>

			<section className={styles.pillars}>
				<FadeUp>
					<div className={styles.pillar}>
						<h2 className={styles.pillar_title}>Intentional.</h2>
						<p className={styles.pillar_text}>{p_5}</p>
					</div>
				</FadeUp>

				<FadeUp>
					<div className={styles.pillar}>
						<h2 className={styles.pillar_title}>Practiced.</h2>
						<p className={styles.pillar_text}>{p_6}</p>
					</div>
				</FadeUp>

				<FadeUp>
					<div className={styles.pillar}>
						<h2 className={styles.pillar_title}>Eager.</h2>
						<p className={styles.pillar_text}>
							{p_8} {p_9}
						</p>
					</div>
				</FadeUp>
			</section>

			<MyStack />

			<section>
				<FadeUp>
					<h1 className={styles.banner_text}>{p_7}</h1>
				</FadeUp>
			</section>
		</main>
	);
}
