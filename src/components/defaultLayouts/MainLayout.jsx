import React from 'react';
import PropTypes from 'prop-types';
import TaskCard from '../ui/TaskCard.jsx';
import '../../styles/dashboard.css';
import TaskCompleteIcon from '../../assets/images/task-completed-icon.svg';
import NewTaskIcon from '../../assets/images/new-task-icon.svg';
import ProjectDone from '../../assets/images/project-done-icon.svg';
import CompletedWave from '../../assets/images/completed-wave.svg';
import ProjectWave from '../../assets/images/project-wave.svg';
import TaskWave from '../../assets/images/task-wave.svg';
import TaskGraph from '../../components/TaskGraph';
function MainLayout({ gridArea }) {
	const tasks = [
		{
			taskIcon: TaskCompleteIcon,
			taskText: 'Task Completed',
			amount: '08',
			growthIcon: CompletedWave,
			growthLevel: '10+',
		},
		{
			taskIcon: NewTaskIcon,
			taskText: 'New Task',
			amount: '10',
			growthIcon: TaskWave,
			growthLevel: '10+',
		},
		{
			taskIcon: ProjectDone,
			taskText: 'Project Done',
			amount: '08',
			growthIcon: ProjectWave,
			growthLevel: '10+',
		},
	];
	return (
		<div className={`${gridArea}`}>
			<div className='dashboard-container'>
				<div className='dashboard'>
					{tasks.map((task, index) => {
						return <TaskCard task={task} key={index} />;
					})}
                </div>
            <TaskGraph/>
                
            </div>
		</div>
	);
}

MainLayout.defaultProps = {
	gridArea: 'main',
};
MainLayout.propTypes = {
	gridArea: PropTypes.string.isRequired,
};

export default MainLayout;
