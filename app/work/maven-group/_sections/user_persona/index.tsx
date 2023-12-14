import Image from 'next/image';

import { Icon } from '@/components';
import { images } from '@/assets';

import styles from './style.module.css';

export default function UserPersona() {
	return (
		<section className={styles.section}>
			<div className={styles.header}>
				<Image src={images.users.celeste} alt='Celeste' className={styles.user_image} />
				<h1>User Persona</h1>
			</div>

			<div className={styles.text_block}>
				<h3 className={styles.heading}>Meet Celeste</h3>

				<p className={styles.paragraph}>
					“I am a Seattle local who is interested in buying a home but I don’t
					<br /> know where to begin and it’s hard to tell who to ask for help.”
				</p>
			</div>

			<div className={styles.profile}>
				<div className={styles.block}>
					<Icon.User />

					<div className={styles.text_block}>
						<h3 className={styles.heading}>Who She Is</h3>

						<ul className={styles.paragraph}>
							<li>Age: 32</li>
							<li>Pronouns: She/Her</li>
							<li>Profession: Software Engineer</li>
							<li>Income: $160,000</li>
							<li>Down Payment: $80,000</li>
						</ul>
					</div>
				</div>

				<div className={styles.block}>
					<Icon.GraduationCap />

					<div className={styles.text_block}>
						<h3 className={styles.heading}>Experience Level</h3>

						<ul className={styles.paragraph}>
							<li>Low experience</li>
							<li>First time home buyer</li>
							<li>Some exposure to real estate transactions through friends and family</li>
							<li>Never directly participated in a transaction</li>
							<li>Experienced renter</li>
						</ul>
					</div>
				</div>

				<div className={styles.block}>
					<Icon.ClipboardList />

					<div className={styles.text_block}>
						<h3 className={styles.heading}>Actionable Goals</h3>

						<ul className={styles.paragraph}>
							<li>Get approved for a loan</li>
							<li>Find someone she trusts who knows the area and the process</li>
							<li>Tour some homes she found on Zillow</li>
						</ul>
					</div>
				</div>

				<div className={styles.block}>
					<Icon.ExclamationTriangle />

					<div className={styles.text_block}>
						<h3 className={styles.heading}>Primary Concerns</h3>

						<ul className={styles.paragraph}>
							<li>Staying updated on current real estate trends and market</li>
							<li>Finding the right home in a sea of options</li>
							<li>Being equipped to compete with other buyers</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
