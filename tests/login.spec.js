import { test, expect } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto("http://localhost:3000")
})

test.only("Login Page", async ({ page }) => {
  // Declare the variable
  const userEmail = page.locator("#email")
  const password = page.locator("#password")
  const signInBtn = page.locator("#signInBtn")

  // Fill the Data
  await userEmail.fill("sponser@gmail.com")
  await password.fill("Sponsor@123")
  await signInBtn.click()
})
