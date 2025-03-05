import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import useForm from "../utils/useForm"
import validate from "../utils/loginFormValidationRules"
import { Button, Form, TextInput } from "@carbon/react"

import "../styles/styles.scss"

const LoginForm = (props) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  )
  const [loggedIn, setLoggedIn] = useState(false)

  function login() {
    setLoggedIn(true)
    props.parentCallback(true)
    return <Navigate to="/workflow" />
  }

  const handleRegister = () => {
    console.log("Handle")
    return <Navigate to="/register" />
  }

  return (
    <div className="login-container">
      {loggedIn && <Navigate to="/workflow" />}
      <Form id="login-form" aria-label="login form" className="login-form">
        <span className="login-text form-input">Login</span>
        <TextInput
          id="email"
          className="form-input"
          labelText="Email Address"
          placeholder="some@gmail.com"
          name="email"
          onChange={handleChange}
          value={values.email || ""}
          invalid={errors.email}
          invalidText={errors.email}
        />
        <TextInput
          id="password"
          type="password"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          className="form-input"
          labelText="Password"
          invalid={errors.password}
          invalidText={errors.password}
          name="password"
          onChange={handleChange}
          value={values.password || ""}
        />
        <Button
          id="signInBtn"
          type="submit"
          className="form-input"
          onClick={handleSubmit}
        >
          Login
        </Button>
        <Button
          id="resisterBtn"
          kind="ghost"
          className="form-input"
          onClick={handleRegister}
        >
          Not an account ?
        </Button>
      </Form>
    </div>
  )
}

export default LoginForm
