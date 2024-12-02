import React from 'react'
import "./button.css"
import PropTypes from 'prop-types'
function Button({text}) {
  return (
   <button className='simplebutton' >{text}</button>
  )
}

export default Button

Button.propTypes = {
    text: PropTypes.string,
}