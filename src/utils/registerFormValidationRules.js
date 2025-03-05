export default function validateRegister(values) {
  let errors = {}
  if (!values.firstName) {
    errors.firstName = "First Name is required"
  }
  if (!values.lastName) {
    errors.lastName = "Last Name is required"
  }
  if (!values.address) {
    errors.address = "Address is required"
  }

  if (!values.gender) {
    errors.gender = "Gender is required"
  }

  if (!values.pinCode) {
    errors.pinCode = "Pin Code is required"
  }

  if (!values.state) {
    errors.state = "State is required"
  }

  if (!values.city) {
    errors.city = "City is required"
  }

  if (!values.email) {
    errors.email = "Email address is required"
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid"
  }
  if (!values.password) {
    errors.password = "Password is required"
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters"
  } else if (!/\d/.test(values.password)) {
    errors.password = "Password must contain atleast 1 number"
  } else if (!/[!@#$%&?]/g.test(values.password)) {
    errors.password = "Password must contain atleast 1 special character"
  } else if (!/[A-Z]/g.test(values.password)) {
    errors.password = "Password must contain atleast 1 capitol letter"
  }
  return errors
}
