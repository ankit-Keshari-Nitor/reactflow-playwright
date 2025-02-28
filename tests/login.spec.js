import { test, expect } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto("http://localhost:3000")
})

test("Login", async ({ page }) => {
  // Declare the variable
  const userEmail = page.locator("#email")
  const password = page.locator("#password")
  const signInBtn = page.locator("#signInBtn")

  // Fill the Data
  await userEmail.fill("sponser@gmail.com")
  await password.fill("Sponsor@123")
  await signInBtn.click()
})

test.only("Validate Form", async ({ page }) => {
  // Declare the variable
  const userEmail = page.locator("#email")
  const password = page.locator("#password")
  const signInBtn = page.locator("#signInBtn")
  const emailError = page.locator("#email-error")
  const passwordError = page.locator("#password-error")

  await expect(emailError).toBeHidden()
  await expect(passwordError).toBeHidden()
  await signInBtn.click()
  await expect(emailError).toBeVisible()
  await expect(passwordError).toBeVisible()
  await userEmail.fill("sponser@gmail.com")
  await password.fill("Sponsor@123")
  await signInBtn.click()
})
