import { Page } from "@playwright/test";
import { HomePage } from "./home-page";
import { BasePage } from "./base-page";
import { ProductPage } from "./product-page";

export const Pages = (page: Page) => {
    return {
      homePage: new HomePage(page),
      base: new BasePage(page),
      productPage: new ProductPage(page),
    };
  };