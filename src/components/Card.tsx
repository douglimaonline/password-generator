import React, { ReactNode } from 'react'
import '../styles/Card.css'

interface CardProps {
  children: ReactNode
}

const Card = (props: Readonly<CardProps>) => {
  return (
    <div className="card">
      <img src={process.env.PUBLIC_URL + '/lock.png'} alt="lock" />
      {props.children}
    </div>
  )
}

export default Card
