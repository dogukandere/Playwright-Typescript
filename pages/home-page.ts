import { BasePage, expect } from "./base-page";

export class HomePage extends BasePage {
    searchbox = this.page.locator('#gh-ac');
    searchButton = this.page.locator('#gh-btn');
    shipToButton = this.page.locator('#gh-shipto-click > div > button > span');
    sellButton = this.page.locator('#gh-p-2 > a');
    notificationsButton = this.page.locator('#gh-Alerts-i');
    cartButton = this.page.locator('#gh-minicart-hover > div > a.gh-eb-li-a.gh-rvi-menu > svg');

    async goToPage(){
        await this.page.goto('https://www.ebay.com');
    }

    async verifyButtonsOnHomePage(){
        await expect(this.shipToButton).toBeVisible();
        await expect(this.sellButton).toBeVisible();
        await expect(this.notificationsButton).toBeVisible();
        await expect(this.cartButton).toBeVisible();
    }

    async searchProduct(product){
        await this.searchbox.fill(product);
    }

    async clickSearchButton(){
        await this.searchButton.click();
    }
}

