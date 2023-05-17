import React from 'react'
import { useId } from 'react';

const Form = () => {
    const id = useId();

  return (
    <>
        <label htmlFor={id}>Email</label>
        <input id={id} type='email' />
    </>
  )
}

export default Form;