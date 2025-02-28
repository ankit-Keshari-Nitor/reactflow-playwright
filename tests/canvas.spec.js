const { test, expect } = require("@playwright/test")

test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto("http://localhost:3000")
})

test("Render canvas", async ({ page }) => {
  // Variable
  const reactFlowContainer = page.locator(".react-flow")

  // Check if the React Flow container is visible
  await expect(reactFlowContainer).toBeVisible()
})
