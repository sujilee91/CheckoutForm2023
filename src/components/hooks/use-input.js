import { useState } from "react";

const useInput = (enteredValueValidate) => {
  const [userValue, setUserValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputChangeHandler = (event) => {
    setUserValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputIsTouched(true);
  };

  const enteredValueIsValid = enteredValueValidate(userValue);
  const inputIsInvalid = inputIsTouched && !enteredValueIsValid;

  return {
    value: userValue,
    inputChangeHandler,
    inputBlurHandler,
    inputIsInvalid,
  };
};

export default useInput;
