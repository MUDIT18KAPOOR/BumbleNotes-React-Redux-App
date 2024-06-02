import React from 'react'
import classes from "./Card.module.css";

function Card(props) {
  const note = classes[props.class];
  return (
    <div className={note}>{props.children}</div>
  )
}

export default Card;