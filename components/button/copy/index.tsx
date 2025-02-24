'use client';

// external
import cn from 'clsx';
import { TbCopy } from 'react-icons/tb';
import { TbCopyCheck } from 'react-icons/tb';

// internal
import { Button } from '@/components';

// styles
import styles from './style.module.css';
import { useEffect, useState } from 'react';

export interface ButtonCopyProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	disabled?: boolean;
	content?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonCopy = ({ content, disabled = false, onClick, ...rest }: ButtonCopyProps) => {
	const { className } = rest;

	const [copied, setCopied] = useState(false);

	const copyToClipboard = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();

		try {
			if (window !== undefined) {
				await navigator.clipboard.writeText(String(content));
			}
		} catch (error) {
			console.error(error);
		}

		setCopied(true);
		onClick && onClick(event);
	};

	useEffect(() => {
		if (copied) {
			const timeout = setTimeout(() => {
				setCopied(false);
			}, 3000);

			return () => clearTimeout(timeout);
		}
	}, [copied]);

	return (
		<Button.Icon {...rest} disabled={disabled} className={cn(styles.button, className)} onClick={copyToClipboard} data-copied={copied}>
			{copied ? <TbCopyCheck className={cn(styles.icon)} /> : <TbCopy className={cn(styles.icon)} />}
		</Button.Icon>
	);
};
