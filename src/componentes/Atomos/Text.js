import React from 'react'
import "./text.css";


export const Text = ({variant = 'title-2', children, color}) => {
  return (
    <div className={`${variant}`}> { children }  </div>
  )
}

//export default Text
