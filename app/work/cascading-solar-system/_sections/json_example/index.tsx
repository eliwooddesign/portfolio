import { Window, Code } from '@/components';
import { uuid } from '@/utils';
import { jsonExampleData } from '@/data';

import styles from './style.module.css';

export const JsonExample = () => {
	return (
		<Window title='Example Response' caption='Example API response.'>
			<Code lines={76}>
				<div className={styles.json}>
					<div className={styles.json_array}>
						<p className={styles.square_open}>{'['}</p>

						{jsonExampleData.map((arrayObject) => {
							const entries = Object.entries(arrayObject);

							return (
								<div key={uuid()} className={styles.json_object}>
									<p className={styles.curly_open}>{'{'}</p>

									{entries.map((entry) => {
										const key = entry[0];
										const value = entry[1];

										return (
											<div key={uuid()} className={styles.json_object_entry}>
												<p className={styles.json_object_key}>{key}:&nbsp;</p>

												{typeof value === 'string' ? (
													// prettier-ignore
													<p className={styles.json_string}>"{value}"</p>
												) : typeof value === 'number' ? (
													<p className={styles.json_number}>{value}</p>
												) : !value.length ? (
													<p className={styles.empty_brackets}>{'[]'}</p>
												) : (
													<>
														<p className={styles.square_open}>{'['}</p>
														<div className={styles.json_object_array}>
															{value.map((item) => (
																<p key={uuid()} className={styles.json_string}>
																	"{item}"
																</p>
															))}
														</div>
														<p className={styles.square_close}>{']'}</p>
													</>
												)}
											</div>
										);
									})}

									<p className={styles.curly_close}>{'}'}</p>
								</div>
							);
						})}

						<p className={styles.square_close}>{']'}</p>
					</div>
				</div>
			</Code>
		</Window>
	);
};
