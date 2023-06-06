import { useRef, useState } from "react";

import classes from "./Checkout.module.css";
import Input from "../Input/Input.js";

const Checkout = (props) => {

  const nameInputRef = useRef("");
  const streetInputRef = useRef("");
  const postalCodeInputRef = useRef("");
  const cityInputRef = useRef("");

  const formList = [
    {name: 'name', label: 'Your name', ref: nameInputRef},
    {name: 'street', label: 'Your street', ref: streetInputRef},
    {name: 'postal', label: 'Postal Code', ref: postalCodeInputRef, extraValidation: (value)=> value?.trim().length === 5 },
    {name: 'city', label: 'City', ref: cityInputRef},
  ]

  const formValidator = (value, extraValidation) => {
    if(extraValidation){
      return extraValidation(value)
    }

    return Boolean(value.trim())
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    const findInvalid = formList.find(({ref,extraValidation})=>{
      Boolean(formValidator(ref.current.value,extraValidation))
    })

    // invalid 한게 있으면 리턴
    if(Boolean(findInvalid.length)) return;

    
    // enteredName back-end로 POST
  };


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