import { useRef, useState } from "react";

import classes from "./Checkout.module.css";
// import useInput from "../hooks/use-input";
import Input from "../Input/Input.js";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef("");
  const streetInputRef = useRef("");
  const postalCodeInputRef = useRef("");
  const cityInputRef = useRef("");

  // const {
  //   value: enteredName,
  //   inputChangeHandler: nameChangeHandler,
  //   inputBlurHandler: nameInputBlurHandler,
  //   inputIsInvalid: nameInputIsInvalid,
  // } = useInput((value) => value.trim() !== "");

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsvalid = !isEmpty(enteredStreet);
    const enteredCityIsvalid = !isEmpty(enteredCity);
    const enteredPostalCodeIsvalid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsvalid,
      city: enteredCityIsvalid,
      postalCode: enteredPostalCodeIsvalid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsvalid &&
      enteredCityIsvalid &&
      enteredPostalCodeIsvalid;

    if (!formIsValid) {
      return;
    }
    // enteredName back-end로 POST
  };

  const formList = [
    {name: 'name', label: 'Your name', ref: nameInputRef},
    {name: 'street', label: 'Your street', ref: streetInputRef},
    {name: 'postal', label: 'Postal Code', ref: postalCodeInputRef, extraValidation: (value)=> value?.trim().length === 5 },
    {name: 'city', label: 'City', ref: cityInputRef},
  ]

    return (
    <form className={classes.form} onSubmit={confirmHandler}>
      {formList.map(({ref, name,label, extraValidation})=> 
        <Input
          key={name}
          ref={ref}
          label={label}
          input={{ type: "text", id: `${name}` }}
          extraValidation={extraValidation}
        />
      )}

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;