// external
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// internal
import { Button } from '@/components';
import { cn } from '@/utils';
import { CodeRoot, CodeProps } from '../__root__';

// styles
import styles from './style.module.css';

export const CodeBlock = ({ copy = true, language, children, ...rest }: CodeProps) => {
	const { className } = rest;

	return (
		<CodeRoot {...rest} {...cn(styles.component_code_block, className)}>
			{language ? (
				<SyntaxHighlighter language={language} style={vs2015}>
					{children as string}
				</SyntaxHighlighter>
			) : (
				<code>{children}</code>
			)}

			{copy && (
				<div {...cn(styles.copy_button_container)}>
					<Button.Copy {...cn(styles.copy_button)} content={String(children)} />
				</div>
			)}
		</CodeRoot>
	);
};
