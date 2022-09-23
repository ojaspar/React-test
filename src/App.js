import React from 'react';
import './App.css';
import LayoutHeader from '../src/components/defaultLayouts/LayoutHeader';
import LayoutSideBar from '../src/components/defaultLayouts/LayoutSideBar';
import MainLayout from '../src/components/defaultLayouts/MainLayout';
import SideBar from '../src/components/defaultLayouts/SideBar';
import { TaskProvider } from './context/TaskContext';
function App() {
	return (
		<main className='container'>
			<TaskProvider>
				<LayoutHeader />
				<LayoutSideBar />
				<MainLayout />
				<SideBar />
			</TaskProvider>
		</main>
	);
}

export default App;
