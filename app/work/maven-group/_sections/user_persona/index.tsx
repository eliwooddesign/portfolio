import styles from './style.module.css';

export default function UserPersona() {
	return (
		<section className={styles.section}>
			<h1>User Persona</h1>

			<div className={styles.section_content}>
				<div className={styles.banner}>
					<h3 className={styles.heading}>Meet Celeste</h3>
					<h3>“I am a Seattle local who is interested in buying a home but I don’t know where to begin and it’s hard to tell who to ask for help.”</h3>
				</div>
			</div>
		</section>
	);
}
