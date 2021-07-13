import React from 'react'
import './input.css';
export function Input(props) {
  const {type, id, htmlFor, placeholder, content} =  props;
  return (
    <div className="form-floating">
      <input type={type} className="form-control" id={id} placeholder={placeholder} />
      <label htmlFor={htmlFor}>{content}</label>
    </div>
  )
}
