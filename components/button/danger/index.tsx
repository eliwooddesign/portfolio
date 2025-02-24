// external
import cn from 'clsx';

// internal
import { ButtonRoot, type ButtonProps } from '../__base__';

// styles
import styles from './style.module.css';

/**
 * @example
 *  <Button.Danger>Submit</Button.Danger>
 */
export const ButtonDanger = ({ type = 'button', disabled = false, onClick, children, ...rest }: ButtonProps) => {
	return (
		<ButtonRoot {...rest} type={type} disabled={disabled} className={cn(styles.component_button_danger, rest.className)} onClick={onClick}>
			{children}
		</ButtonRoot>
	);
};
