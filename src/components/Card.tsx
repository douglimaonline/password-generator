import React, { ReactNode } from 'react'
import '../styles/Card.css'

interface CardProps {
  children: ReactNode
}

const Card = (props: Readonly<CardProps>) => {
  return (
    <div className="card">
      <img src="/lock.png" alt="lock"></img>
      {props.children}
    </div>
  )
}

export default Card
