import logo from './logo.svg';
import React from 'react';
import './App.css';
import LayoutHeader from '../src/components/defaultLayouts/LayoutHeader';
import LayoutSideBar from '../src/components/defaultLayouts/LayoutSideBar';
import MainLayout from '../src/components/defaultLayouts/MainLayout';
import SideBar from '../src/components/defaultLayouts/SideBar';
function App() {
	return (
		<main className='container'>
			<LayoutHeader />
			<LayoutSideBar />
			<MainLayout />
			<SideBar />
		</main>
	);
}

export default App;
