import React, {useState} from 'react';
import './Validator.css';

const Validator = () => {
  const initalState = {username: "", password: "", passwordConfirm: ""}
    const [formState, setFormState] = useState(initalState)

    const handleChange = (ev) => 
    setFormState({ ...formState, [ev.target.id]: ev.target.value })

    const handleSubmit = (ev) => {
      ev.preventDefault();

      // API CALL
      console.log(formState);

      
      setFormState(initalState)
    };

    const handleCancel = ev => setFormState(initalState)
    var passwd=  /^(?=.*[0-9]){1,}(?=.*[!@#$%^&*]){1,}[a-zA-Z0-9!@#$%^&*]{7,}$/;
    var passwrd = formState.password.match(passwd)

      // console.log(passwrd);


    return (
      
      <div className="form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text" 
            placeholder="Username" 
            id="username"
            onChange={handleChange}
            value= {formState.username}
            />
          <label htmlFor="username">Username</label>

          <input
            type="password" 
            placeholder="Password" 
            id="password"
            onChange={handleChange}
            value= {formState.password}
            />
          <label htmlFor="password">Password</label>

          <input
            type="password"
            placeholder="Confirm password"
            id="passwordConfirm"
            onChange={handleChange}
            value= {formState.passwordConfirm}
            />
          <label htmlFor="passwordConfirm">Confirm password</label>

          <button
          type="submit" disabled= {formState.password === formState.passwordConfirm && formState.password.length >= 7 && passwrd ? false : true }
          >Sign Up</button>
          <button 
          type="button" 
          className="cancel"
          onClick = {handleCancel}
          >Cancel</button>

          <p className = {formState.password === formState.passwordConfirm ? "valid" : "invalid"}>Passwords must match.</p>
          <p className = {formState.password.length > 7 ? "valid" : "invalid"}>Passwords must be at least 7 letters.</p>
        </form>
      </div>
    );
}

export default Validator;
