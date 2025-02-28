const { test, expect } = require("@playwright/test")

test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto("http://localhost:3000")
})

test("Rendered All Nodes", async ({ page }) => {
  // Locators
  const nodes = page.locator(".react-flow__node")

  const firstNode = nodes.first()
  const secondNode = nodes.nth(1)
  const thirdNode = nodes.nth(2)

  // Check if nodes are rendered
  await expect(firstNode).toBeInViewport()
  await expect(secondNode).toBeInViewport()
  await expect(thirdNode).toBeInViewport()
})

test("Rendered All Edges", async ({ page }) => {
  // Locators
  const edges = page.locator(".react-flow__edge")

  // Print edge count
  const edgeCount = await edges.count()
  console.log("edgeCount::::", edgeCount)
})

test("Selecting a node by click", async ({ page }) => {
  // Variable
  const nodes = page.locator(".react-flow__node")

  // Actions
  const locator = nodes.first()
  await locator.click()

  // -------------------------------------------  Assertion ------------------------------------------------------
  await expect(locator).toHaveClass(/selected/)
})

test("Dragging a node", async ({ page }) => {
  const node = page.locator(".react-flow__node").first()

  const transformBeforeMove = await node.evaluate((element) => {
    return element.style.transform
  })

  await node.hover()
  await page.mouse.down()
  await page.mouse.move(0, 0)
  await page.waitForTimeout(500)
  await page.mouse.move(500, 300, { steps: 100 })
  await page.mouse.up()

  const transformAfterMove = await node.evaluate((element) => {
    return element.style.transform
  })

  expect(transformBeforeMove).not.toMatch(transformAfterMove)
})

test("Dropping a node", async ({ page }) => {
  const node = page.locator("#partner-node")

  const nodeBefore = await page.locator(".react-flow__node").all()

  await node.hover()
  await page.mouse.down()
  await page.mouse.move(0, 0)
  await page.waitForTimeout(500)
  await page.mouse.move(900, 300, { steps: 100 })
  await page.mouse.up()

  const nodeAfter = await page.locator(".react-flow__node").all()
  expect(nodeAfter).toHaveLength(nodeBefore.length + 1)
})

test("Connecting two nodes", async ({ page }) => {
  const outputSourceHandle = page
    .locator(".react-flow__handle-top")
    .and(page.locator("[data-nodeid*='1']"))
  const inputSourceHandle = page
    .locator(".react-flow__handle-bottom")
    .and(page.locator("[data-nodeid*='3']"))

  await expect(outputSourceHandle).toBeInViewport()
  await expect(inputSourceHandle).toBeInViewport()

  const edgesBefore = await page.locator(".react-flow__edge").all()

  await outputSourceHandle.hover()
  await page.mouse.down()
  await page.waitForTimeout(500)
  await inputSourceHandle.hover()
  await page.mouse.up()

  const edgesAfter = await page.locator(".react-flow__edge").all()
  expect(edgesAfter).toHaveLength(edgesBefore.length + 1)
})


