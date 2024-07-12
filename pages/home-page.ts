import { BasePage, expect } from "./base-page";

export class HomePage extends BasePage {
    searchbox = this.page.locator('#gh-ac');
    searchButton = this.page.locator('#gh-btn');

    async goToPage(){
        await this.page.goto('https://www.ebay.com');
    }

    async searchProduct(product){
        await this.searchbox.fill(product);
    }

    async clickSearchButton(){
        await this.searchButton.click();
    }




}

