import React from 'react';
import '../styles/Article.css';
import '../index.css';
import Input from '../components/ui/Input';
import Angela from '../assets/images/angela.svg';
import Chris from '../assets/images/chris.svg';
import webber from '../assets/images/webber.svg';
import kelvin from '../assets/images/kelvin.svg';
import {ReactComponent as Calendar} from '../assets/images/calendar.svg'
function Task() {
	const titleAttribute = {
		placeholder: 'Create new',
	};
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
	return (
		<div className='task-container'>
			<p>Task Title</p>
			<Input attributes={titleAttribute} />
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
					{collaborators.map((collaborator) => (
						<div className='collaborator'>
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
                    <Input attributes={{ placeholder: 'Start Date', }} /> 
                  <Calendar className="calendar cursor"/>  
                </div>
                <div className='input-top relative'>
                    <Input
					attributes={{
						placeholder: 'End Date',
						
					}}
                    />
                  <Calendar className="calendar cursor"/>  
                    
                </div>
				
				<div className='rule' />
				<p>Hours Budgeted</p>
				<Input attributes={{ placeholder: 'Enter Hours' }} />
			</div>
			<div className='rule' />
			<h2>Messages</h2>
			<div>
                {messages.map((message) => (
                    <div  className='message-container cursor'>
                       <div className='message'>
                        <img src={message.image} alt=""  />
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
