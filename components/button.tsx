'use client'

import React, { FC } from 'react'

export interface ButtonProps {}

const Button: FC<ButtonProps> = (props) => {
  const {} = props

  const onClick = async () => {
    console.log('test')

    const data = await fetch('http://localhost:3000/api')

    console.log('data', data)
  }

  return <button type="button" onClick={onClick}>fetch</button>
}

export default Button

