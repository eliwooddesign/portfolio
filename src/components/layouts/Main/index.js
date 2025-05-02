import React from 'react';

import { Outlet } from 'react-router';

import Header from '../../Header';
import Footer from '../../Footer';

import './style.css';

function MainLayout() {
	return (
		<div className='body'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default MainLayout;
