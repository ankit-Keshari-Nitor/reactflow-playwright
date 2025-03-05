import React from "react"
import { Navigate } from "react-router-dom"
import useForm from "../utils/useForm"
import validate from "../utils/loginFormValidationRules"
import {
  Button,
  Checkbox,
  Form,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
  Select,
  SelectItem,
  TextInput,
  TextArea,
} from "@carbon/react"

import "../styles/styles.scss"

const LoginForm = (props) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  )

  function login() {
    return <Navigate to="/" />
  }

  const goBackToLogin = () => {
    return <Navigate to="/" />
  }

  return (
    <div className="login-container">
      <Form
        id="registration-form"
        aria-label="register form"
        className="login-form"
      >
        <span className="login-text form-input">Sign Up</span>
        {/* First Name */}
        <TextInput
          className="form-input"
          id="test2"
          labelText="Text Input label"
          placeholder="Placeholder text"
        />
        {/* Last Name */}
        <TextInput
          className="form-input"
          id="test2"
          labelText="Text Input label"
          placeholder="Placeholder text"
        />
        {/* Address */}
        <TextArea
          labelText="Text Area label"
          className="form-input"
          placeholder="Placeholder text"
          id="test5"
          rows={4}
        />
        {/* Gender */}
        <RadioButtonGroup
          name="radio-button-group"
          defaultSelected="default-selected"
          legendText="Radio Button heading"
        >
          <RadioButton
            value="standard"
            id="radio-1"
            labelText="Standard Radio Button"
            className="form-input"
          />
          <RadioButton
            value="default-selected"
            labelText="Default Selected Radio Button"
            id="radio-2"
            className="form-input"
          />
          <RadioButton
            value="blue"
            labelText="Standard Radio Button"
            id="radio-3"
            className="form-input"
          />
          <RadioButton
            value="disabled"
            labelText="Disabled Radio Button"
            id="radio-4"
            disabled
            className="form-input"
          />
        </RadioButtonGroup>
        {/* State */}
        <Select
          className="form-input"
          id="select-1"
          defaultValue="placeholder-item"
        >
          <SelectItem
            disabled
            hidden
            value="placeholder-item"
            text="Choose an option"
          />
          <SelectItem value="option-1" text="Option 1" />
          <SelectItem value="option-2" text="Option 2" />
          <SelectItem value="option-3" text="Option 3" />
        </Select>
        {/* City */}
        <Select
          className="form-input"
          id="select-1"
          defaultValue="placeholder-item"
        >
          <SelectItem
            disabled
            hidden
            value="placeholder-item"
            text="Choose an option"
          />
          <SelectItem value="option-1" text="Option 1" />
          <SelectItem value="option-2" text="Option 2" />
          <SelectItem value="option-3" text="Option 3" />
        </Select>
        {/* Pin code */}
        <NumberInput
          className="form-input"
          id="number-input-1"
          label="Number Input"
          min={0}
          max={100}
          value={50}
          step={10}
          iconDescription="Add/decrement number"
        />
        {/* Terms */}
        <Checkbox
          labelText="Text Area label"
          className="form-input"
          id="checkbox-3"
          helperText="Helper text goes here"
        />
        {/* Email */}
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
        {/* Password */}
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
        {/* Submit Button */}
        <Button
          id="signUpBtn"
          type="submit"
          className="form-input"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        {/* Go Back Button */}
        <Button
          id="goBackToLoginBtn"
          kind="ghost"
          className="form-input"
          onClick={goBackToLogin}
        >
          Go back to login!
        </Button>
      </Form>
    </div>
  )
}

export default LoginForm
