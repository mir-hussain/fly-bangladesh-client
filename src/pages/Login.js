import React, { useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router";

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const { signUp, signIn } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newUser) {
      try {
        setError("");
        setLoading(true);
        await signUp(
          emailRef.current.value,
          passRef.current.value
        );
        history.push("/");
      } catch {
        setError("Failed to create an account");
      }
      setLoading(false);
    } else {
      try {
        setError("");
        setLoading(true);
        await signIn(
          emailRef.current.value,
          passRef.current.value
        );
        history.push("/");
      } catch {
        setError("Invalid email or wrong password");
      }
    }
  };

  return (
    <section className='login-section'>
      <div className='login'>
        {error && alert(error)}
        {newUser ? (
          <p className='login__header'>
            Create new account
          </p>
        ) : (
          <p className='login__header'>Login</p>
        )}
        <form className='form' onSubmit={handleSubmit}>
          <div className='form__fields'>
            {newUser && (
              <div className='form__input'>
                <label htmlFor='name'>Name </label>
                <input
                  ref={nameRef}
                  type='text'
                  id='name'
                  name='name'
                />
              </div>
            )}
            <div className='form__input'>
              <label htmlFor='email'>Email </label>
              <input
                ref={emailRef}
                type='email'
                id='email'
                name='email'
              />
            </div>
            <div className='form__input'>
              <label htmlFor='password'>Password </label>
              <input
                ref={passRef}
                type='password'
                id='password'
                name='password'
              />
            </div>
          </div>
          <div className='new-user'>
            <p>I am a new user </p>
            <input
              onChange={() => {
                setNewUser(!newUser);
              }}
              type='checkbox'
              name='user'
              id='user'
            />
          </div>
          <div className='image-button-container'>
            {newUser ? (
              <button disabled={loading} type='submit'>
                Sign up
              </button>
            ) : (
              <button type='submit'>Login</button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
