import { Code as CodeRoot } from './Code';

import { CodeBlock } from './block';
import { CodeInline } from './inline';

export const Code = CodeRoot as typeof CodeRoot & {
	Block: typeof CodeBlock;
	Inline: typeof CodeInline;
};

Code.Block = CodeBlock;
Code.Inline = CodeInline;
