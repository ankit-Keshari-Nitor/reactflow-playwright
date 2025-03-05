import React from "react"
import { Navigate } from "react-router-dom"
import useForm from "../utils/useForm"
import {
  Button,
  Checkbox,
  Form,
  RadioButton,
  RadioButtonGroup,
  Select,
  SelectItem,
  TextInput,
  TextArea,
  Grid,
  Column,
} from "@carbon/react"

import "../styles/styles.scss"
import validateRegister from "../utils/registerFormValidationRules"

const LoginForm = (props) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validateRegister
  )

  function login() {
    return <Navigate to="/" />
  }

  const goBackToLogin = () => {
    return <Navigate to="/" />
  }

  console.log("values", values)

  return (
    <div className="login-container">
      <Form
        id="registration-form"
        aria-label="register form"
        className="login-form"
      >
        <Grid>
          {/* Sign Up text */}
          <Column lg={16}>
            <span className="login-text form-input">Sign Up</span>
          </Column>
          {/* First Name */}
          <Column lg={8}>
            <TextInput
              id="firstName"
              className="form-input"
              labelText="First Name"
              placeholder="Micheal"
              name="firstName"
              onChange={handleChange}
              value={values.firstName || ""}
              invalid={errors.firstName}
              invalidText={errors.firstName}
            />
          </Column>
          {/* Last Name */}
          <Column lg={8}>
            <TextInput
              id="lastName"
              className="form-input"
              labelText="Last Name"
              placeholder="John"
              name="lastName"
              onChange={handleChange}
              value={values.lastName || ""}
              invalid={errors.lastName}
              invalidText={errors.lastName}
            />
          </Column>
          {/* Address */}
          <Column lg={16}>
            {" "}
            <TextArea
              id="address"
              className="form-input"
              labelText="Address"
              placeholder="H-20, Decan, US"
              name="address"
              onChange={handleChange}
              value={values.address || ""}
              invalid={errors.address}
              invalidText={errors.address}
              rows={4}
            />
          </Column>
          {/* Gender */}
          <Column lg={16}>
            <RadioButtonGroup
              name="gender"
              defaultSelected="male"
              legendText="Gender"
              onClick={handleChange}
              value={values.gender || "male"}
            >
              <RadioButton
                value="male"
                id="male"
                labelText="Male"
                className="form-input"
              />
              <RadioButton
                value="female"
                labelText="Female"
                id="female"
                className="form-input"
              />
              <RadioButton
                value="other"
                labelText="Other"
                id="other"
                className="form-input"
              />
            </RadioButtonGroup>
          </Column>
          {/* State */}
          <Column lg={8}>
            <Select
              className="form-input"
              id="state"
              name="state"
              defaultValue="chooseAnOption"
              labelText="State"
              onChange={handleChange}
              value={values.state || "chooseAnOption"}
              invalid={errors.state}
              invalidText={errors.state}
            >
              <SelectItem
                disabled
                hidden
                value="chooseAnOption"
                text="Choose an option"
              />
              <SelectItem value="maharashtra" text="Maharashtra" />
              <SelectItem value="punjab" text="Punjab" />
              <SelectItem value="kerala" text="Kerala" />
            </Select>
          </Column>
          {/* City */}
          <Column lg={8}>
            <Select
              className="form-input"
              id="city"
              name="city"
              defaultValue="chooseAnOption"
              labelText="City"
              onChange={handleChange}
              value={values.city || "chooseAnOption"}
              invalid={errors.city}
              invalidText={errors.city}
            >
              <SelectItem
                disabled
                hidden
                value="chooseAnOption"
                text="Choose an option"
              />
              <SelectItem value="pune" text="Pune" />
              <SelectItem value="banglore" text="Banglore" />
              <SelectItem value="mumbai" text="Mumbai" />
            </Select>
          </Column>
          {/* Pin code */}
          <Column lg={16}>
            <TextInput
              id="pinCode"
              className="form-input"
              labelText="Pin Code"
              placeholder="123456"
              name="pinCode"
              onChange={handleChange}
              value={values.pinCode || ""}
              invalid={errors.pinCode}
              invalidText={errors.pinCode}
            />
          </Column>
          {/* Email */}
          <Column lg={16}>
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
          </Column>
          {/* Password */}
          <Column lg={16}>
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
          </Column>
          {/* Terms */}
          <Column lg={16}>
            <Checkbox
              name="termsAndCondition"
              labelText="I do accept the Terms and Conditions of your site."
              className="form-input"
              id="termsAndCondition"
              onClick={handleChange}
              value={values.termsAndCondition || ""}
            />
          </Column>
          {/* Submit Button */}
          <Column lg={4}>
            <Button
              id="signUpBtn"
              type="submit"
              className="form-input"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Column>
          {/* Go Back Button */}
          <Column lg={4}>
            <Button
              id="goBackToLoginBtn"
              kind="ghost"
              className="form-input"
              onClick={goBackToLogin}
            >
              Go back to login!
            </Button>
          </Column>
        </Grid>
      </Form>
    </div>
  )
}

export default LoginForm
