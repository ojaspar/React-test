import React from 'react';
import PropTypes from 'prop-types';
import TodoLogo from '../../assets/images/todo-logo.svg';
import '../../styles/Sidebar.css';
import '../../index.css';
import { ReactComponent as DashboardIcon } from '../../assets/images/dashboard.svg';
import { ReactComponent as FolderIcon } from '../../assets/images/folders.svg';
import { ReactComponent as SettingsIcon } from '../../assets/images/settings.svg';
import { ReactComponent as ArrowIcon } from '../../assets/images/arrows.svg';
import { ReactComponent as TodosIcon } from '../../assets/images/Todos.svg';
import { ReactComponent as AllIcon } from '../../assets/images/all.svg';

function LayoutSideBar({ gridArea }) {
	const icons = [
		{
			element: <DashboardIcon className='icon' />,
			active: true,
			path: '/'
		},
		{
			element: <AllIcon className='icon' />,
			active: false,
			path: '/',
		},
		{
			element: <TodosIcon className='icon' />,

			active: false,
			path: '/',
		},
		{
			element: <SettingsIcon className='icon' />,

			active: false,
			path: '/',
		},
		{
			element: <ArrowIcon className='icon' />,

			active: false,
			path: '/',
		},
		{
			element: <FolderIcon className='icon' />,
			active: false,
			path: '/',
		},
	];
	return (
		<div className={`${gridArea} sidebarLayout`}>
			<img src={TodoLogo} alt='togo-logo' className='cursor' />
			<h2>To-Do</h2>
			<ul>
				{icons.map((icon, index) => (
					<li key={index} className={icon.active && 'active'}>{icon.element}</li>
				))}
			</ul>
		</div>
	);
}

LayoutSideBar.defaultProps = {
	gridArea: 'sidebar',
};
LayoutSideBar.propTypes = {
	gridArea: PropTypes.string.isRequired,
};

export default LayoutSideBar;
