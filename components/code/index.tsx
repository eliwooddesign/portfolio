import { classList, getKey } from '@/utils';

import styles from './style.module.css';

type Props = {
	language?: string;
	lines: number;
	children: React.ReactNode;
};

export default function Code({
	// prettier-ignore
	language,
	lines = 0,
	children
}: Props) {
	return (
		<code className={classList(styles.code, language && styles[language])}>
			<div className={styles.line_numbers}>
				{Array(lines)
					.fill('')
					.map((item, i) => {
						return <span key={getKey()}>{i + 1}</span>;
					})}
			</div>

			{children}
		</code>
	);
}
