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

test("Render Minimap", async ({ page }) => {
  // Variable
  const miniMap = page.locator(".react-flow__minimap")

  // Check if the Minimap is visible
  await expect(miniMap).toBeVisible()
})

test("Render Controls", async ({ page }) => {
  // Variable
  const controls = page.locator(".react-flow__controls")

  // Check if the controls is visible
  await expect(controls).toBeVisible()
})

test("Zoom In Canvas", async ({ page }) => {
  const zoomInControl = page.locator(".react-flow__controls-zoomin")

  await zoomInControl.hover()
  await page.mouse.down()
  await page.mouse.up()
})

test("Zoom Out Canvas", async ({ page }) => {
  const zoomOutControl = page.locator(".react-flow__controls-zoomout")

  await zoomOutControl.hover()
  await page.mouse.down()
  await page.mouse.up()
})

test("Fit View Canvas", async ({ page }) => {
  const fitViewControl = page.locator(".react-flow__controls-fitview")

  await fitViewControl.hover()
  await page.mouse.down()
  await page.mouse.up()
})
