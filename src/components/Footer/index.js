import React from 'react';
import { useLocation } from 'react-router';
import './style.css';

function Footer() {
	let contactStatus;

	let footerDetailOpen = '/*';
	let footerDetailClose = '*/';

	const location = useLocation();

	if (location.pathname === '/contact') {
		contactStatus = 'focused';
		footerDetailOpen = '';
		footerDetailClose = '';
	}

	return (
		<footer>
			<ul className={'footer-contact ' + contactStatus}>
				<li className='nav-item footer-detail'>{footerDetailOpen}</li>

				<li className='nav-item'>
					<a href='sms:+14257365875' className='nav-link'>
						425.736.5875
					</a>
				</li>

				<li className='nav-item'>
					<a href='mailto:eli@eliwooddesign.com' className='nav-link'>
						eli@eliwooddesign.com
					</a>
				</li>

				<li className='nav-item'>
					<a href='https://linkedin.com/in/eliwooddesign' target='_blank' rel='noreferrer' className='nav-link'>
						LinkedIn
					</a>
				</li>

				<li className='nav-item'>
					<a href='https://github.com/eliwooddesign' target='_blank' rel='noreferrer' className='nav-link'>
						GitHub
					</a>
				</li>

				<li className='nav-item footer-detail'>{footerDetailClose}</li>
			</ul>
		</footer>
	);
}

export default Footer;
