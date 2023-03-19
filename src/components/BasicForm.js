import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  //first name
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  //last name
  const {
    value: enteredLastName,
    isValid: lastLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  //email
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(
    (value) => value.length > 2 && value.includes("@") && value.includes(".")
  );

  // form validation
  let formIsValid = false;
  formIsValid = firstNameIsValid && lastLastNameIsValid && emailIsValid;

  console.log(firstNameInputHasError);
  console.log(lastNameInputHasError);
  console.log(emailInputHasError);

  // form submission handler
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  // first name input classes
  const firstNameInputClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  // last name input classes
  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  // email input classes
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          <p className="error-text">
            {firstNameInputHasError && "Please enter a first name."}
          </p>
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          <p className="error-text">
            {lastNameInputHasError && "Please enter a last name."}
          </p>
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        <p className="error-text">
          {emailInputHasError && "Please enter a valid Email address."}
        </p>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
