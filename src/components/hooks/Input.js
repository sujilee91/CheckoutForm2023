import React from "react";

const Input = React.forwardRef((props, ref) => {
  const inputControlClasses = `${classes.control} ${
    props.inputIsInvalid ? classes.invalid : ""
  }`;

  return (
    <React.Fragment>
      <div className={inputControlClasses}>
        <label htmlFor={props.id}>{props.label}</label>
        <input
          type={props.input.type}
          id={props.input.id}
          ref={ref}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
      {props.inputIsInvalid && <p>Please enter a valid name.</p>}
    </React.Fragment>
  );
});

export default Input;
