import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import useForm from "../utils/useForm"
import validate from "../utils/loginFormValidationRules"

const LoginForm = (props) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  )
  const [loggedIn, setLoggedIn] = useState(false)

  function login() {
    setLoggedIn(true)
    props.parentCallback(true)
    return <Navigate to="/default" />
  }

  return (
    <div className="section is-fullheight login-container">
      {loggedIn && <Navigate to="/default" />}
      <div className="container">
        <div className="column is-6 is-offset-3">
          <div className="box">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input
                    id="email"
                    autoComplete="off"
                    className={`input ${errors.email && "is-danger"}`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email || ""}
                    required
                  />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    id="password"
                    className={`input ${errors.password && "is-danger"}`}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password || ""}
                    required
                  />
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              <button
                id="signInBtn"
                type="submit"
                className="button is-block is-info is-fullwidth"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
