import React, { useEffect, useState } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef(({label, input, extraValidation}, ref) => {
  const {type, id} = input

  const [invalid, setInvalid] = useState(false)

  const inputControlClasses = `${classes.control} ${
    invalid ? classes.invalid : ""
  }`;

  // TODO: onBlur 함수 받아오기 (기본 = )
  return (
    <>
      <div className={inputControlClasses}>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          ref={ref}
          onBlur={()=> setInvalid(
            !Boolean(ref.current.value.trim())
          )}
          defaultValue={""}
        />
      </div>
      {invalid && <p>Please enter a valid {id}.</p>}
    </>
  );
});

export default Input;
