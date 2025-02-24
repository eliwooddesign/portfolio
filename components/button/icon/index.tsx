// internal
import { cn } from '@/utils';
import { ButtonRoot, type ButtonProps } from '../__base__';

// styles
import styles from './style.module.css';

/**
 * @example
 *  <Button.Icon>Submit</Button.Icon>
 */
export const ButtonIcon = ({ type = 'button', disabled = false, onClick, children, ...rest }: ButtonProps) => {
	const { className } = rest;

	return (
		<ButtonRoot {...rest} type={type} disabled={disabled} {...cn(styles.component_button_icon, className)} onClick={onClick}>
			{children}
		</ButtonRoot>
	);
};
