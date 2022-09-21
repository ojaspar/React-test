import React from 'react'
import PropTypes from 'prop-types';

// import 'src/styles/Header'
import '../../styles/Header.css'
function LayoutHeader({ gridArea }) {
  return (
    <nav className={`navbar-default ${gridArea}`} >
          <div>
          </div> 
          <div>
              hello world Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis voluptates tenetur recusandae, a dolores laboriosam dolorum veritatis beatae esse odio rerum voluptatum, ex dolore alias blanditiis? Vero quidem natus doloremque!
          </div>
    </nav>
  )
}

LayoutHeader.defaultProps = {
  gridArea: 'header',

}
LayoutHeader.propTypes = {
  gridArea: PropTypes.string.isRequired,
}
export default LayoutHeader
