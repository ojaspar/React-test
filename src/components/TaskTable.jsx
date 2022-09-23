import React, { useState, useContext } from 'react';
import Card from '../components/ui/Card';
import '../styles/Table.css';
import CustomSelect from './ui/CustomSelect';
import MenuDropDown from './ui/MenuDropDown';
import TaskContext from '../context/TaskContext';

function TaskTable() {
	const { state } = useContext(TaskContext);

	const [tasks, setTask] = useState([]);
    let ArrayTasks = [];
    if (state) {
			ArrayTasks.push(state);
			setTask(ArrayTasks);
		}
	console.log(state);
	// useEffect(() => {
		
		
	// }, [ArrayTasks]);

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
						{/* <tr>
							<th>User journey of the project</th>
							<th>Start Date</th>
							<th>End Date</th>
							<th>Hours</th>
							<th className='column'>
								<label htmlFor='file'>Downloading progress:</label>
								<progress id='file' value='32' max='100' color='red'>
								
								</progress>
                            </th>
                            <th>
                                <MenuDropDown/>

                            </th>
						</tr> */}

						{tasks.map((task, i) => (
							<tr key={i}>
								<th>{task.task}</th>
								<th>{task.startDate}</th>
								<th>{task.endDate}</th>
								<th>{task.hours}</th>
								<th>Progress</th>
								<th>
									<MenuDropDown />
								</th>
							</tr>
						))}
					</tbody>
				</table>
			</Card>
		</div>
	);
}

export default TaskTable;
