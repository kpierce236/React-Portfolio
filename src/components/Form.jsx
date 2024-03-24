import { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Your email is invlaid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!message) {
      setErrorMessage(
        `Please enter a message`
      );
      return;
    }
    
    if (!name) {
        setErrorMessage(
          `Please enter your name`
        );
        return;
      }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Message Me</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Your Name"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Your Email"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="message"
            value={message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div className="alert alert-danger mt-3">{errorMessage}</div>
      )}
    </div>
  );
}

export default Form;