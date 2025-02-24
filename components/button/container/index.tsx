// external
import cn from 'clsx';

// internal
import { ButtonRoot, type ButtonProps } from '../__base__';

// styles
import styles from './style.module.css';

/**
 * @example
 *  <Button.Container>Submit</Button.Container>
 */
export const ButtonContainer = ({ type = 'button', disabled = false, onClick, children, ...rest }: ButtonProps) => {
	const { className } = rest;

	return (
		<ButtonRoot {...rest} type={type} disabled={disabled} className={cn(styles.component_button_container, className)} onClick={onClick}>
			{children}
		</ButtonRoot>
	);
};
