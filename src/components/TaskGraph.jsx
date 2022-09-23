import React, { useState } from 'react';
import '../styles/Graph.css';
import Graph from '../assets/images/graph.svg';
import Value from '../assets/images/value.svg';
import Month from '../assets/images/month.svg';
import Card from '../components/ui/Card'
function TaskGraph() {
	const [durations, setDuration] = useState([
		{
			title: 'Daily',
			active: false,
		},

		{
			title: 'Weekly',
			active: false,
		},
		{
			title: 'Monthly',
			active: true,
		},
	]);
	const changeDuration = (title) => {
		let newDuration = durations;
		newDuration.map((duration) => {
			if (duration.title === title) duration.active = true;
			else duration.active = false;
			return newDuration;
		});
		setDuration([...newDuration]);
	};
	return (
		<Card className='graph-container'>
			<div className='graph-header'>
				<h2>Task Done</h2>
				<div className='duration-container'>
					{durations.map((duration, i) => {
						return (
							<div key={i}>
								<p
									onClick={() => changeDuration(duration.title)}
									className={`cursor ${
										duration.active ? 'isactive' : 'not-active'
									}`}
								>
									{duration.title}
								</p>
							</div>
						);
					})}
				</div>
			</div>
			<div className='graphLayout'>
                <img src={Value} alt='value' className='value-layout' />
                <div style={{width: '100%'}}>
				    <img src={Graph} alt='graph' className='graph' />
                    <img style={{width: '100%'}} src={Month} alt="month" />
                </div>
			</div>
		</Card>
	);
}

export default TaskGraph;
