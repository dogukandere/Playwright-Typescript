import { BasePage, expect } from "./base-page";

export class HomePage extends BasePage {
    searchbox = this.page.getByPlaceholder('Search for anything');
    searchButton = this.page.getByRole('button', { name: 'Search' });
    shipToButton = this.page.getByRole('button', { name: 'Ship to' });
    sellButton = this.page.getByLabel('Account').getByRole('link', { name: 'Sell' });
    notificationsButton = this.page.getByRole('button', { name: 'Notifications' });
    cartButton = this.page.getByRole('link', { name: 'Your shopping cart' });

    async goToPage(url){
        await this.page.goto(url);
    }

    async verifyButtonsOnHomePage(){
        await expect(this.shipToButton).toBeVisible();
        await expect(this.sellButton).toBeVisible();
        await expect(this.notificationsButton).toBeVisible();
        await expect(this.cartButton).toBeVisible();
    }

    async searchProduct(product){
        await expect(this.searchbox).toBeEmpty();
        await this.searchbox.fill(product);
        await expect(this.searchbox).toHaveValue(product);
    }

    async clickSearchButton(){
        await this.searchButton.click();
    }
}

