import { BasePage, expect } from "./base-page";

export class ProductPage extends BasePage{
    saveThisSearchButton = this.page.locator('#mainContent > div.s-answer-region.s-answer-region-center-top > div > div.clearfix.srp-controls__row-2 > div:nth-child(1) > div.srp-controls__control.follow-widget-wrap > div > div > button')

    async isSortButtonDisplayed(){
        await expect(this.saveThisSearchButton).toBeVisible();
    }
}