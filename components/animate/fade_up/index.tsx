import { PropsWithChildren } from 'react';

import styles from './style.module.css';

type Props = {
	delay?: string;
};

export default function FadeUp(props: PropsWithChildren<Props>) {
	const { delay = '0ms', children } = props;

	return <div className={styles.fade_up}>{children}</div>;
}
