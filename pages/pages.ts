import { Page } from "@playwright/test";
import { HomePage } from "./home-page";
import { BasePage } from "./base-page";

export const Pages = (page: Page) => {
    return {
      homePage: new HomePage(page),
      base: new BasePage(page),
    };
  };