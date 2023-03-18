import React, { useState } from "react";

const SimpleInput = (props) => {
  //initialize constants for name
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

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

  // name input handler
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  // name input classes
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  // email input handler
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  // email input classes
  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  // form submission handler
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredEmailTouched(true);
    if (!enteredEmailIsValid) {
      return;
    }
    console.log(enteredName);
    // nameInputRef.current.value = ""; // This is not a good practice (directly manipulating the DOM)
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        <p className="error-text">
          {nameInputIsInvalid && "Please enter a valid name (non-empty value)"}
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
