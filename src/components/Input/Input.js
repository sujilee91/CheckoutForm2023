import React, { useEffect, useState } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef(({label, input, onChange, isInputValid}, ref) => {
  const inputControlClasses = `${classes.control} ${
    isInputValid ? classes.invalid : ""
  }`;

  const {type, id} = input

  const [value, setInputValue] = useState("")
  const [invalid, setInvaid] = useState(false)
  return (
    <>
      <div className={inputControlClasses}>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          ref={ref}
          onBlur={()=> setInvaid(!Boolean(ref.current.value.trim()))}
          defaultValue={""}
        />
      </div>
      {invalid && <p>Please enter a valid {id}.</p>}
    </>
  );
});

export default Input;
