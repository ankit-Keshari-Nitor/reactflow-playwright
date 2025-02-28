import { test, expect } from "@playwright/test"
import { getTransform } from "./utils/helper"

test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto("http://localhost:3000")

  // Wait till the edges are rendered
  await page.waitForSelector('[data-id="e1-2"]', { timeout: 5000 })
})

test("panning the pane moves it", async ({ page }) => {
  const pane = page.locator(".react-flow__pane")
  const viewport = page.locator(".react-flow__viewport")

  await expect(pane).toBeAttached()

  const paneBox = await pane.boundingBox()

  const transformsBefore = await getTransform(viewport)

  await pane.hover()
  await page.mouse.down()
  // Move pane by 100, 100
  await page.mouse.move(
    paneBox.x + paneBox.width * 0.5 + 100,
    paneBox.y + paneBox.height * 0.5 + 100
  )

  const transformsAfter = await getTransform(viewport)

  expect(transformsAfter.translateX - transformsBefore.translateX).toBe(111)
  expect(transformsAfter.translateY - transformsBefore.translateY).toBe(111)
})

test("scrolling the default pane zooms it", async ({ page }) => {
  const pane = page.locator(".react-flow__pane")
  const viewport = page.locator(".react-flow__viewport")

  await expect(pane).toBeAttached()

  const transformsBefore = await getTransform(viewport)

  await pane.hover()
  await page.mouse.wheel(0, 100)

  const transformsAfter = await getTransform(viewport)

  expect(transformsAfter.scale).not.toBe(transformsBefore.scale)
})

test("minZoom", async ({ page }) => {
  const pane = page.locator(".react-flow__pane")
  const viewport = page.locator(".react-flow__viewport")

  await expect(pane).toBeAttached()

  await pane.hover()

  // Zoom out
  await page.mouse.wheel(3000, 3000)

  const transformsMinZoom = await getTransform(viewport)
  expect(transformsMinZoom.scale).toBe(0.5)
})

test("maxZoom", async ({ page }) => {
  const pane = page.locator(".react-flow__pane")
  const viewport = page.locator(".react-flow__viewport")

  await expect(pane).toBeAttached()

  await pane.hover()

  // Zoom in
  await page.mouse.wheel(-3000, -3000)

  const transformsMaxZoom = await getTransform(viewport)
  expect(transformsMaxZoom.scale).toBe(2)
})
