import { test, expect } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto("http://localhost:3000")

  // Declare the variable
  const userEmail = page.locator("#email")
  const password = page.locator("#password")
  const signInBtn = page.locator("#signInBtn")
  const nodes = page.locator(".react-flow__node")

  // Fill the Data
  await userEmail.fill("sponser@gmail.com")
  await password.fill("Sponsor@123")

  // Actions
  await signInBtn.click()
  const locator = nodes.first()
  await locator.click()

  // -------------------------------------------  Assertion ------------------------------------------------------
  await expect(locator).toHaveClass(/selected/)
})

test("Definition From", async ({ page }) => {
  // Declare the variable
  const crossDefinitionBtn = page.locator("#crossDefinitionBtn")
  const definitionTxt = page.locator("#definitionTxt")
  const name = page.locator("#name")
  const url = page.locator("#url")
  const description = page.locator("#description")
  const role = page.getByLabel("Role")
  const email = page.locator("#email")
  const password = page.locator("#password")
  const svg = page.locator("#svg")
  const termsAndCondition = page.getByLabel(
    "I do accept the Terms and Conditions of your site."
  )
  const submitBtn = page.locator("#submitBtn")

  // Assertion
  await expect(crossDefinitionBtn).toBeVisible()
  await expect(definitionTxt).toBeVisible()

  // Fill the Data
  await name.fill("Partner")
  await url.fill("https://precisely.com")
  await description.fill("Lorem Lipsum")
  await role.selectOption("admin")
  await email.fill("sponser@gmail.com")
  await password.fill("Sponsor@123")
  await svg.check()
  // await termsAndCondition.click()
  await submitBtn.click()
})

test("Validate Form and Login", async ({ page }) => {
  // Declare the variable
  const crossDefinitionBtn = page.locator("#crossDefinitionBtn")
  const definitionTxt = page.locator("#definitionTxt")
  const name = page.locator("#name")
  const url = page.locator("#url")
  const description = page.locator("#description")
  const role = page.getByLabel("Role")
  const email = page.locator("#email")
  const password = page.locator("#password")
  const svg = page.locator("#svg")
  const termsAndCondition = page.getByLabel(
    "I do accept the Terms and Conditions of your site."
  )
  const submitBtn = page.locator("#submitBtn")

  const nameError = page.locator("#name-error-msg")
  const urlError = page.locator("#url-error-msg")
  const descriptionError = page.locator("#description-error-msg")
  const roleError = page.locator("#role-error-msg")
  const emailError = page.locator("#email-error-msg")
  const passwordError = page.locator("#password-error-msg")

  // Assertion to test the error message
  await expect(nameError).toBeHidden()
  await expect(urlError).toBeHidden()
  await expect(descriptionError).toBeHidden()
  await expect(roleError).toBeHidden()
  await expect(emailError).toBeHidden()
  await expect(passwordError).toBeHidden()
  await submitBtn.click()
  await expect(definitionTxt).toBeVisible()
  await expect(nameError).toBeVisible()
  await expect(urlError).toBeVisible()
  await expect(descriptionError).toBeVisible()
  await expect(roleError).toBeVisible()
  await expect(emailError).toBeVisible()
  await expect(passwordError).toBeVisible()
  await name.fill("Partner")
  await url.fill("https://precisely.com")
  await description.fill("Lorem Lipsum")
  await role.selectOption("admin")
  await email.fill("sponser@gmail.com")
  await password.fill("Sponsor@123")
  await svg.check()
  // await termsAndCondition.check()
  await submitBtn.click()
  await crossDefinitionBtn.click()
})
