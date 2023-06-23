import React, {useState} from 'react'
import './formInput.css'

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps} = props

    const handleFocus = (e) => {
        setFocused(true);
    }
  return (
      <div className="formInput">
          <label>{label}
          <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} autoComplete='off' />
          </label>
          <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput
