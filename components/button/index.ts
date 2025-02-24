import { ButtonRoot } from './__base__';
import { ButtonContainer } from './container';
import { ButtonCopy } from './copy';
import { ButtonDanger } from './danger';
import { ButtonGhost } from './ghost';
import { ButtonIcon } from './icon';
import { ButtonOutline } from './outline';
import { ButtonSuccess } from './success';

export const Button = ButtonRoot as typeof ButtonRoot & {
	Container: typeof ButtonContainer;
	Copy: typeof ButtonCopy;
	Danger: typeof ButtonDanger;
	Ghost: typeof ButtonGhost;
	Icon: typeof ButtonIcon;
	Outline: typeof ButtonOutline;
	Success: typeof ButtonSuccess;
};

Button.Container = ButtonContainer;
Button.Copy = ButtonCopy;
Button.Danger = ButtonDanger;
Button.Ghost = ButtonGhost;
Button.Icon = ButtonIcon;
Button.Outline = ButtonOutline;
Button.Success = ButtonSuccess;
