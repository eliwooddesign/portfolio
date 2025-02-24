// external
import cn from 'clsx';
import { MouseEventHandler } from 'react';

// styles
import styles from './style.module.css';

// types
import { type DetailedHTMLProps, type ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const ButtonRoot = ({ type = 'button', disabled = false, onClick, children, ...rest }: ButtonProps) => {
	return (
		<button type={type} {...rest} className={cn(styles.component_button_root, disabled && styles.disabled, rest.className)} onClick={onClick}>
			<span className={styles.overlay} data-item='overlay' />

			<span className={styles.content} data-item='label'>
				{children}
			</span>
		</button>
	);
};
