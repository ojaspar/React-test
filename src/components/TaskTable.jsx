import React, { useContext } from 'react';
import Card from '../components/ui/Card';
import '../styles/Table.css';
import CustomSelect from './ui/CustomSelect';
import MenuDropDown from './ui/MenuDropDown';
import TaskContext from '../context/TaskContext';

function TaskTable() {
    const { state } = useContext(TaskContext);

	return (
		<div style={{ marginTop: '31px' }}>
			<Card>
				<div className='graph-header'>
					<h2>Task</h2>
					<CustomSelect />
				</div>
				<table>
					<thead>
						<tr>
							<th>Name of task</th>
							<th>Start Date</th>
							<th>End Date</th>
							<th>Hours</th>
							<th>Progress</th>
							<th></th>
						</tr>
					</thead>
					<tbody>

                        {state.map((task, i) => {
                            return <tr key={i}>
                                <th>{task.task}</th>
                                <th>{task.startDate}</th>
                                <th>{task.endDate}</th>
                                <th>{task.hours}</th>
                                <th>
                                    <div className='progress-container'>
                                        <p>60% completed</p>
                                        <div className='progress'>
                                            <div className='bar'></div>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <MenuDropDown />
                                </th>
                            </tr>
                        })}
                        
					</tbody>
                </table>
                {state.length === 0 && ( <div>
                            <h2  style={{textAlign:'center', marginTop: '20px'}}>Add New Task</h2>
                        </div>)}
               
			</Card>
		</div>
	);
}

export default TaskTable;
