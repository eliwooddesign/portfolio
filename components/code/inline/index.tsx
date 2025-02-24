// external
import cn from 'clsx';

// internal
import { Button } from '@/components';
import { CodeRoot, CodeProps } from '../__root__';

// styles
import styles from './style.module.css';

/**
 * @example
 * <Code.Inline>npm i</Code.Inline>
 */
export const CodeInline = ({ copy = true, children, ...rest }: CodeProps) => {
	return (
		<CodeRoot {...rest} className={cn(styles.component_code_inline, rest.className)}>
			<code>{children}</code>

			{copy && (
				<div className={styles.copy_button_container}>
					<Button.Copy className={styles.copy_button} content={String(children)} />
				</div>
			)}
		</CodeRoot>
	);
};
