import { useRef, useState } from "react";

import classes from "./Checkout.module.css";
// import useInput from "../hooks/use-input";
// import Input from "../hooks/Input";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

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

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;

  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      {/* <Input
        ref={nameInputRef}
        label="Your Name"
        input={{ type: "text", id: "userName" }}
        onBlur={nameInputBlurHandler}
        onChange={nameChangeHandler}
        inputIsInvalid={nameInputIsInvalid}
      /> */}

      <div className={nameControlClasses}>
        <label htmlFor="name">Your street</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      {!formInputsValidity.name && <p>Please enter a valid street.</p>}

      <div className={streetControlClasses}>
        <label htmlFor="street">Your street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>
      {!formInputsValidity.street && <p>Please enter a valid street.</p>}

      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
      </div>
      {!formInputsValidity.postalCode && (
        <p>Please enter a valid postal code (5 characters long).</p>
      )}

      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      {!formInputsValidity.city && <p>Please enter a valid City.</p>}

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

// import { useRef, useState } from "react";

// import classes from "./Checkout.module.css";

// const isEmpty = (value) => value.trim() === "";
// const isFiveChars = (value) => value.trim().length === 5;

// const Checkout = (props) => {
//   const [formInputsValidity, setFormInputsValidity] = useState({
//     name: true,
//     street: true,
//     city: true,
//     postalCode: true,
//   });

//   const nameInput = useRef();
//   const streetInput = useRef();
//   const postalCodeInput = useRef();
//   const cityInput = useRef();

//   const confirmHandler = (event) => {
//     event.preventDefault();

//     const enteredName = nameInput.current.value;
//     const enteredStreet = streetInput.current.value;
//     const enteredPostalCode = postalCodeInput.current.value;
//     const enteredCity = cityInput.current.value;

//     const enteredNameIsValid = !isEmpty(enteredName);
//     const enteredStreetIsvalid = !isEmpty(enteredStreet);
//     const enteredCityIsvalid = !isEmpty(enteredCity);
//     const enteredPostalCodeIsvalid = isFiveChars(enteredPostalCode);

//     setFormInputsValidity({
//       name: enteredNameIsValid,
//       street: enteredStreetIsvalid,
//       city: enteredCityIsvalid,
//       postalCode: enteredPostalCodeIsvalid,
//     });

//     const formIsValid =
//       enteredNameIsValid &&
//       enteredStreetIsvalid &&
//       enteredCityIsvalid &&
//       enteredPostalCodeIsvalid;

//     if (!formIsValid) {
//       return;
//     }

//     props.onConfirm({
//       name: enteredName,
//       street: enteredStreet,
//       city: enteredCity,
//       postalCode: enteredPostalCode,
//     });
//   };

//   const nameControlClasses = `${classes.control} ${
//     formInputsValidity.name ? "" : classes.invalid
//   }`;

//   const streetControlClasses = `${classes.control} ${
//     formInputsValidity.street ? "" : classes.invalid
//   }`;

//   const postalCodeControlClasses = `${classes.control} ${
//     formInputsValidity.postalCode ? "" : classes.invalid
//   }`;

//   const cityControlClasses = `${classes.control} ${
//     formInputsValidity.city ? "" : classes.invalid
//   }`;

//   return (
//     <form className={classes.form} onSubmit={confirmHandler}>
//       <div className={nameControlClasses}>
//         <label htmlFor="name">Your Name</label>
//         <input type="text" id="name" ref={nameInput} />
//       </div>
//       {!formInputsValidity.name && <p>Please enter a valid name.</p>}
//       <div className={streetControlClasses}>
//         <label htmlFor="street">Your street</label>
//         <input type="text" id="street" ref={streetInput} />
//       </div>
//       {!formInputsValidity.street && <p>Please enter a valid street.</p>}
//       <div className={postalCodeControlClasses}>
//         <label htmlFor="postal">Postal Code</label>
//         <input type="text" id="postal" ref={postalCodeInput} />
//       </div>
//       {!formInputsValidity.postalCode && (
//         <p>Please enter a valid postal code (5 characters long).</p>
//       )}
//       <div className={cityControlClasses}>
//         <label htmlFor="city">City</label>
//         <input type="text" id="city" ref={cityInput} />
//       </div>
//       {!formInputsValidity.city && <p>Please enter a valid City.</p>}
//       <div className={classes.actions}>
//         <button type="button" onClick={props.onCancel}>
//           Cancel
//         </button>
//         <button>Confirm</button>
//       </div>
//     </form>
//   );
// };

// export default Checkout;
