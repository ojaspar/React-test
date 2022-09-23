import React, { useContext, useState } from 'react';
import '../styles/Article.css';
import '../index.css';
import Input from '../components/ui/Input';
import Angela from '../assets/images/angela.svg';
import Chris from '../assets/images/chris.svg';
import webber from '../assets/images/webber.svg';
import kelvin from '../assets/images/kelvin.svg';
import Button from '../components/ui/Button';
import TaskContext from '../context/TaskContext'
import {taskFormType, INITIAL_STATE} from '../context/TaskReducer'
function Task() {
    const [taskState, setTaskState] = useState(INITIAL_STATE)
    const collaborators = [
        {
            name: 'Angela',
            image: Angela,
            id: 1,
        },
        {
            name: 'Chris',
            image: Chris,
            id: 2,
        },
    ];
    const messages = [
        {
            name: 'Chris Webber',
            message: 'Hi Michael! How are you?',
            image: webber,
            id: 1,
        },
        {
            name: 'Kelvin Durant',
            message: 'Do you need that design?',
            image: kelvin,
            id: 1,
        },
    ];
    const emojis = ['🎉', '😍', '😄', '🔥', '😘', '😋', '😉', '😎', '🙄'];
    const { dispatch } = useContext(TaskContext);
    const addTask = () => {
        dispatch({ type: taskFormType.ADD_TASK, payload: taskState })
}
	const onInputChange = (e) => {
		const { name, value } = e.target;
        setTaskState((prevValue) => ({ ...prevValue, [name]: value }));
	};
	return (
		<div className='task-container'>
			<p>Task Title</p>
			<Input
				attributes={{
					placeholder: 'Create new',
					value: `${taskState.task}`,
					name: 'task',
				}}
				handleChange={onInputChange}
			/>
			<div className='emoji-container between'>
				<div className='between emojis'>
					<p className='arrows cursor'> &#60; </p>
					{emojis.map((emoji, index) => (
						<span key={index}>{emoji}</span>
					))}

					<p className='arrows cursor'>&#62;</p>
				</div>
			</div>
			<div>
				<p>Add Collaborators</p>
				<div className='collaborator-container'>
					{collaborators.map((collaborator, index) => (
						<div className='collaborator' key={index}>
							<img src={collaborator.image} alt={collaborator.name} />
							<p>{collaborator.name}</p>
							<p className='cursor'>X</p>
						</div>
					))}
					<div className='add-collaborator cursor'>
						<span>+</span>
					</div>
					<div className='move-collaborator cursor'>
						<span>&#62;</span>
					</div>
				</div>
			</div>
			<div className='complete-form'>
				<p>Time To Complete</p>
				<div className='relative'>
					<Input
						attributes={{
							name: 'startDate',
							placeholder: 'Start Date',
							type: 'date',
							value: `${taskState.startDate}`,
						}}
						handleChange={onInputChange}
					/>
					{/* <Calendar className='calendar cursor' /> */}
				</div>
				<div className='input-top relative'>
					<Input
						attributes={{
							name: 'endDate',
							type: 'date',
							placeholder: 'End Date',
							value: `${taskState.endDate}`,
						}}
						handleChange={onInputChange}
					/>
				</div>

				<div className='rule' />
				<p style={{ marginBottom: '18px', marginTop: '20px' }}>
					Hours Budgeted
				</p>
				<Input
					attributes={{
						placeholder: 'Enter Hours',
						value: `${taskState.hours}`,
						name: 'hours',
					}}
					handleChange={onInputChange}
				/>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						marginTop: '30px',
						marginBottom: '20px',
					}}
				>
					<div style={{ width: '77px' }}>
						<Button
							isDisabled={
								taskState.task && taskState.startDate && taskState.endDate && taskState.hours
									? false
									: true
							}
                            handleClick={addTask}
						>
							Save
						</Button>
					</div>
				</div>
			</div>
			<div className='rule' />
			<h2>Messages</h2>
			<div>
				{messages.map((message, index) => (
					<div key={index} className='message-container cursor'>
						<div className='message'>
							<img src={message.image} alt='' />
						</div>
						<div>
							<h2>{message.name}</h2>
							<p>{message.message}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Task;
