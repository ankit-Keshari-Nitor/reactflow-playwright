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

test.only("Validate Form and Login", async ({ page }) => {
  // Declare the variable
  const userEmail = page.locator("#email")
  const password = page.locator("#password")
  const signInBtn = page.locator("#signInBtn")
  const emailError = page.locator("#email-error")
  const passwordError = page.locator("#password-error")
  const logoutBtn = page.locator("#logoutBtn")
  const node = page.locator("#partner-node")

  // Assertion to test the error message
  await expect(emailError).toBeHidden()
  await expect(passwordError).toBeHidden()
  await signInBtn.click()
  await expect(emailError).toBeVisible()
  await expect(passwordError).toBeVisible()
  await userEmail.fill("sponser@gmail.com")
  await password.fill("Sponsor@123")
  await signInBtn.click()

  // Drag a new node
  const nodeBefore = await page.locator(".react-flow__node").all()
  await node.hover()
  await page.mouse.down()
  await page.mouse.move(0, 0)
  await page.waitForTimeout(500)
  await page.mouse.move(900, 300, { steps: 100 })
  await page.mouse.up()
  const nodeAfter = await page.locator(".react-flow__node").all()
  expect(nodeAfter).toHaveLength(nodeBefore.length + 1)

  // Logout
  await logoutBtn.click()
})
