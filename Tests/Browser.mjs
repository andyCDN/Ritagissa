import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { chromium } from "playwright";

const port = 8765;
const server = spawn("python3", ["-m", "http.server", String(port), "--bind", "127.0.0.1"], { stdio: "ignore" });
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
try {
  await wait(500);
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.route("https://api.counterapi.dev/**", route => route.fulfill({ json: { count: 1 } }));
  await page.goto(`http://127.0.0.1:${port}`);
  await page.getByLabel("Namn för spelare 1").fill("Harriet");
  await page.getByText("3 varv", { exact: true }).click();
  await page.getByRole("button", { name: "Starta spelet" }).click();
  await assertVisibleText(page, "#turn-name", "Harriet");
  assert.equal(await page.locator("#prompt").textContent(), "", "uppdraget ska vara dolt vid överlämning");
  await page.getByRole("button", { name: "Visa mitt uppdrag" }).click();
  const firstPrompt = await page.locator("#prompt").textContent();
  assert.ok(firstPrompt, "ett uppdrag ska visas");
  await page.getByRole("button", { name: "Visa ett annat uppdrag" }).click();
  assert.notEqual(await page.locator("#prompt").textContent(), firstPrompt, "uppdraget ska bytas");
  await page.getByRole("button", { name: "Gå till nästa spelare" }).click();
  await assertVisibleText(page, "#turn-name", "Spelare 2");
  const stored = await page.evaluate(() => localStorage.getItem("ritagissa-settings"));
  assert.ok(!stored.includes("Harriet"), "namnet får inte sparas");
  await browser.close();
  console.log("Webbläsartesterna passerade.");
} finally {
  server.kill();
}

async function assertVisibleText(page, selector, expected) {
  await page.locator(selector).waitFor({ state: "visible" });
  assert.equal((await page.locator(selector).textContent()).trim(), expected);
}
