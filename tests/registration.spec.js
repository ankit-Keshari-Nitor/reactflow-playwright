import { test, expect } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto("http://localhost:3000/register")
})

test("Registration", async ({ page }) => {
  // Declare the variable
  const signUpTxt = page.locator("#signUpTxt")
  const firstName = page.locator("#firstName")
  const lastName = page.locator("#lastName")
  const address = page.locator("#address")
  const male = page.locator("#male")
  const pinCode = page.locator("#pinCode")
  const userEmail = page.locator("#email")
  const password = page.locator("#password")
  const signUpBtn = page.locator("#signUpBtn")

  // Fill the Data
  await expect(signUpTxt).toBeVisible()
  await firstName.fill("Micheal")
  await lastName.fill("John")
  await address.fill("H-19, Decan, Italy")
  await male.check()
  await pinCode.fill("123455")
  await userEmail.fill("sponser@gmail.com")
  await password.fill("Sponsor@123")
  await signUpBtn.click()
})

test("Validate Form and Login", async ({ page }) => {
  // Declare the variable
  const signUpTxt = page.locator("#signUpTxt")
  const firstName = page.locator("#firstName")
  const lastName = page.locator("#lastName")
  const address = page.locator("#address")
  const male = page.locator("#male")
  const pinCode = page.locator("#pinCode")
  const userEmail = page.locator("#email")
  const password = page.locator("#password")
  const signUpBtn = page.locator("#signUpBtn")
  const firstNameError = page.locator("#firstName-error-msg")
  const lastNameError = page.locator("#lastName-error-msg")
  const addressError = page.locator("#address-error-msg")
  const pinCodeError = page.locator("#pinCode-error-msg")
  const emailError = page.locator("#email-error-msg")
  const passwordError = page.locator("#password-error-msg")

  // Assertion to test the error message
  await expect(firstNameError).toBeHidden()
  await expect(lastNameError).toBeHidden()
  await expect(addressError).toBeHidden()
  await expect(pinCodeError).toBeHidden()
  await expect(emailError).toBeHidden()
  await expect(passwordError).toBeHidden()
  await signUpBtn.click()
  await expect(signUpTxt).toBeVisible()
  await expect(firstNameError).toBeVisible()
  await expect(lastNameError).toBeVisible()
  await expect(addressError).toBeVisible()
  await expect(pinCodeError).toBeVisible()
  await expect(emailError).toBeVisible()
  await expect(passwordError).toBeVisible()
  await firstName.fill("Micheal")
  await lastName.fill("John")
  await address.fill("H-19, Decan, Italy")
  await male.check()
  await pinCode.fill("123455")
  await userEmail.fill("sponser@gmail.com")
  await password.fill("Sponsor@123")
  await signUpBtn.click()
})
