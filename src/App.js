// external
import React from 'react';
import { Routes, Route } from 'react-router';

// internal
import MainLayout from './components/layouts/Main';

import About from './components/pages/About';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import Pricing from './components/pages/Pricing';

// css
import './styles';

function App() {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route index path='work' element={<Work />} />
				<Route path='about' element={<About />} />
				<Route path='contact' element={<Contact />} />

				<Route path='*' element={<Work />} />
			</Route>

			<Route path='pricing' element={<Pricing />} />
		</Routes>
	);
}

export default App;
