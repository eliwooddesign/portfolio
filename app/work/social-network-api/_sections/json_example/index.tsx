import { jsonExampleData } from '@/data';

import styles from './style.module.css';

const squareOpen = '[';
const squareClose = ']';
const curlyOpen = '{';
const curlyClose = '}';

export default function JsonExample() {
	return (
		<div className={styles.json}>
			<div className={styles.json_array}>
				<p className={styles.square_open}>{squareOpen}</p>

				{jsonExampleData.map((arrayObject) => {
					const entries = Object.entries(arrayObject);

					return (
						<div className={styles.json_object}>
							<p className={styles.curly_open}>{curlyOpen}</p>

							{entries.map((entry) => {
								const key = entry[0];
								const value = entry[1];

								return (
									<div className={styles.json_object_entry}>
										<p className={styles.json_object_key}>{key}:</p>

										{typeof value === 'string' ? (
											// prettier-ignore
											<p className={styles.json_string}>"${value}"</p>
										) : typeof value === 'number' ? (
											<p className={styles.json_number}>{value}</p>
										) : !value.length ? (
											<p className={styles.empty_brackets}>{`[ ]`}</p>
										) : (
											<>
												<p className={styles.square_open}>{squareOpen}</p>
												<div className={styles.json_object_array}>
													{value.map((item) => (
														<p className={styles.json_string}>"{item}"</p>
													))}
												</div>
												<p className={styles.square_close}>{squareClose}</p>
											</>
										)}
									</div>
								);
							})}

							<p className={styles.curly_close}>{curlyClose}</p>
						</div>
					);
				})}

				<p className={styles.square_close}>{squareClose}</p>
			</div>
		</div>
	);
}
