import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as All } from '../../assets/images/all-icon.svg';
import { ReactComponent as Calendar } from '../../assets/images/calendar.svg';
import { ReactComponent as Edit } from '../../assets/images/flat-e.svg';
import '../../styles/Article.css';
import Task from '../Task.jsx'

function SideBar({ gridArea }) {
	return (
		<div className={`${gridArea}`}>
			<div className='header between'>
				<h2>Today's Schedule</h2>
				<div className='calendar-container'>
					<All />
					<Calendar />
				</div>
			</div>
			<div className='between'>
				<h2>New Task</h2>
				<Edit />
            </div>
            <Task/>
		</div>
	);
}

SideBar.defaultProps = {
	gridArea: 'side',
};
SideBar.propTypes = {
	gridArea: PropTypes.string.isRequired,
};

export default SideBar;
