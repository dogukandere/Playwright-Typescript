import { test, expect } from '@playwright/test';
import { Pages } from "../pages/pages";

test('Search product and verify buttons', async({ page })=>{
  const pages = Pages(page);
  await pages.homePage.goToPage();
  await expect(page).toHaveTitle("Electronics, Cars, Fashion, Collectibles & More | eBay");
  await pages.homePage.verifyButtonsOnHomePage();
  await pages.homePage.searchProduct("ipad");
  await pages.homePage.clickSearchButton();
  await pages.productPage.isSortButtonDisplayed();
});
