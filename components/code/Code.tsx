import { cn, uuid } from '@/utils';

import styles from './Code.module.css';

type Props = {
	language?: string;
	lines: number;
	children: React.ReactNode;
};

export const Code = ({ language, lines = 0, children }: Props) => {
	return (
		<code {...cn(styles.code, language && styles[language])}>
			<div className={styles.line_numbers}>
				{Array(lines)
					.fill('')
					.map((_, i) => {
						return <span key={uuid()}>{i + 1}</span>;
					})}
			</div>

			{children}
		</code>
	);
};
