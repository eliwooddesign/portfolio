import clsx, { type ClassValue } from 'clsx';

/**
 * Extends the {@linkcode https://www.npmjs.com/package/clsx clsx} package.
 *
 * @description
 * Simplified `className` syntax for JSX elements.
 *
 * @example
 * // strings
 * <div {...cn('modal')} />
 * // <div className='modal' />
 *
 * // conditionals
 * <div {...cn('modal', isVisible && styles.visible)} />
 * // <div className='modal visible' />  isVisible = true
 * // <div className='modal' />          isVisible = false
 *
 * // arrays
 * <div {...cn('modal', ['alert', styles.warn])} />
 * // <div className='modal alert warn__nOoDL' />
 *
 * // objects
 * <div {...cn(styles.modal, { alert: true, warn: false })} />
 * // <div className='modal__Zo1Nk alert' />
 */
export const cn = (...inputs: ClassValue[]) => ({
	className: clsx(...inputs)
});
