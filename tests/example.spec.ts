import { test, expect } from '@playwright/test';
import { Pages } from "../pages/pages";

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/')
  await expect(page).toHaveTitle(/Playwright/)
  const element1 = page.getByRole('link', { name: 'Community' })
  await element1.click()
  await page.waitForTimeout(1000)
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/')
  await page.getByRole('link', { name: 'Get started' }).click()
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible()
});

test('pizza', async({ page })=>{
  const pages = Pages(page);
  await pages.homePage.goToPage();
  await pages.homePage.searchProduct("ipad");
  await pages.homePage.clickSearchButton();
});
