import { test, expect } from '@playwright/test';
import { Pages } from "../pages/pages";

test.beforeEach(async ({ page }) => {
  const pages = Pages(page);
  await pages.homePage.goToPage();
  await page.setViewportSize({width: 1920,height: 1080});
});

test('Search product and verify main page', async({page})=>{
  const pages = Pages(page);
  await expect(page).toHaveURL("https://www.ebay.com/");
  await expect(page).toHaveTitle("Electronics, Cars, Fashion, Collectibles & More | eBay");
  await pages.homePage.verifyButtonsOnHomePage();
  await pages.homePage.searchProduct("ipad");
  await pages.homePage.clickSearchButton();
});

test('Verify product page', async({page})=>{
  const pages = Pages(page);
  await pages.homePage.searchProduct("ipad");
  await pages.homePage.clickSearchButton();
  await pages.productPage.isSortButtonDisplayed();
  await pages.productPage.selectIncludeDescriptionCheckbox();
  await pages.productPage.sortProductByTimeEnding();
  await pages.productPage.filterIpadGeneration();
  await pages.productPage.click256GbButton();
  await pages.productPage.clearAllSelectedFilters();
  await pages.productPage.verifyEbayLogo();
  await pages.productPage.verifyShippingToCountryText();
});
