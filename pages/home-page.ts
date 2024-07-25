import { BasePage, expect } from "./base-page";

export class HomePage extends BasePage {
    searchbox = this.page.getByPlaceholder('Search for anything');
    searchButton = this.page.getByRole('button', { name: 'Search' });
    shipToButton = this.page.getByRole('button', { name: 'Ship to' });
    sellButton = this.page.getByLabel('Account').getByRole('link', { name: 'Sell' });
    notificationsButton = this.page.getByRole('button', { name: 'Notifications' });
    cartButton = this.page.getByRole('link', { name: 'Your shopping cart' });


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

