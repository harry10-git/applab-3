import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div><label htmlFor="title">{props.title}</label>
        <h3>{props.content}</h3></div>
    </div>
  )
}

export default Card