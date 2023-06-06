import React, { useState } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef(({label, input, extraValidation}, ref) => {
  const {type, id} = input

  const [invalid, setInvalid] = useState(false)

  const inputControlClasses = `${classes.control} ${
    invalid ? classes.invalid : ""
  }`;


  // 조건문 간료화 ---> if X do Y else do Z = X ? Y : Z
  const checkInvalid = (value) => typeof extraValidation === 'function' ? !extraValidation(value) :!Boolean(value.trim())
  /**
   * 위의 함수와 다음의 함수는 같은 함수입니다. 
   * const checkInvalid = () => {
   *  if(typeof extravalidation === 'function') {
   *    return !extraValidation(value)
   *  }
   *  
   *  return !Boolean(value.trim())
   * }
   */


  return (
    <>
      <div className={inputControlClasses}>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          ref={ref}
          onBlur={()=> setInvalid(
            checkInvalid(ref.current.value)
          )}
          onFocus={()=> setInvalid(false)}
          defaultValue={""}
        />
      </div>
      {invalid && <p>Please enter a valid {id}.</p>}
    </>
  );
});

export default Input;
