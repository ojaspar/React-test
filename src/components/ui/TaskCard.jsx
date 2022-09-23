import React from 'react'
import '../../styles/Taskcard.css'
import PropTypes from 'prop-types';

function TaskCard({task}) {
  return (
      <div className='taskCard'>
          <div className='taskCardHeader'>
              <div className='t-icon'>
                  <img src={task.taskIcon} alt={task.title} />
              </div>
              <div>
                  <h3>
                  {task.taskText}
              </h3>
              <h1>{ task.amount }</h1>
              </div>
          </div>
          <div className="rule" />
          
          <div className='taskFooter'>
              <img src={task.growthIcon} alt="growth-level" />
              <p>
                  <span>{task.growthLevel} </span>
                  more from last week
              </p>
          </div>

    </div>
  )
}
TaskCard.defaultProps = {
    task: {
        taskIcon: '',
        taskText: '',
        amount: '',
        growthIcon: '',
        growthLevel: ''
    }
}

TaskCard.propTypes = {
    task: PropTypes.object.isRequired
}

export default TaskCard

