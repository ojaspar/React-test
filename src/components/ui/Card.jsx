import React from 'react'
import '../../styles/Card.css';
import PropTypes from 'prop-types';

function Card({children}) {
  return (
      <div className='graph-container'>
         {children} 
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
    
}

export default Card