import React, { useState } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  // initial constants for email

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const enteredEmailIsValid =
    enteredEmail.trim().length > 2 &&
    enteredEmail.includes("@") &&
    enteredEmail.includes(".");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  // test for form validity
  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  // form submission handler
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredEmailIsValid) {
      return;
    }
    console.log(enteredName);
    // nameInputRef.current.value = ""; // This is not a good practice (directly manipulating the DOM)
    resetNameInput();

    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  // name input classes
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  // email input classes
  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        <p className="error-text">
          {nameInputHasError && "Please enter a valid name (non-empty value)"}
        </p>
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        <p className="error-text">
          {emailInputIsInvalid && "Please enter a valid email address"}
        </p>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
