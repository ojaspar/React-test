import React from 'react';
import PropTypes from 'prop-types';
import TodoLogo from '../../assets/images/todo-logo.svg';
import '../../styles/Sidebar.css';
import { ReactComponent as DashboardIcon } from '../../assets/images/dashboard.svg';
import { ReactComponent as FolderIcon } from '../../assets/images/folders.svg';
import { ReactComponent as SettingsIcon } from '../../assets/images/settings.svg';
import { ReactComponent as ArrowIcon } from '../../assets/images/arrows.svg';
import { ReactComponent as TodosIcon } from '../../assets/images/Todos.svg';
import { ReactComponent as AllIcon } from '../../assets/images/all.svg';

function LayoutSideBar({ gridArea }) {
	const icons = [
		<DashboardIcon className='icon' />,
		<AllIcon className='icon' />,
		<TodosIcon className='icon' />,
		<SettingsIcon className='icon' />,
		<ArrowIcon className='icon' />,
		<FolderIcon className='icon' />,
	];
	return (
		<div className={`${gridArea} sidebarLayout`}>
			<img src={TodoLogo} alt='togo-logo' />
			<h2>To-Do</h2>
			<ul>
				{icons.map((icon, index) => (
					<li key={index}>{icon}</li>
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
