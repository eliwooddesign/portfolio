import { PropsWithChildren } from 'react';

import Component, { Props } from './component';

const buildComponent = ({ animation }: Props) => {
	return ({ speed, timing, delay, breakpoint, children }: PropsWithChildren<Props>) => {
		return (
			<Component animation={animation} speed={speed} timing={timing} delay={delay} breakpoint={breakpoint}>
				{children}
			</Component>
		);
	};
};

const Animate = {
	Fade: buildComponent({ animation: 'fade' }),
	FadeUp: buildComponent({ animation: 'fade-up' })
};

export default Animate;
