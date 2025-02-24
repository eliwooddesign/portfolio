// external
import cn from 'clsx';

// styles
import styles from './style.module.css';

// types
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CodeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  copy?: boolean;
  language?: string;
}

/**
 * !! DO NOT USE !!
 * @utility Only to be used in button variants.
 *
 * @example
 * <CodeRoot {...rest} {...cn(styles.component_code_block, rest.className)}>
 *   {children}
 * </CodeRoot>
 *
 */
export const CodeRoot = ({ children, ...rest }: CodeProps) => {
  return (
    <div {...rest} className={cn(styles.component_code_root, rest.className)}>
      {children}
    </div>
  );
};
