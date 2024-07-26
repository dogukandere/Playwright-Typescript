import { BasePage, expect } from "./base-page";

export class ProductPage extends BasePage{
    saveThisSearchButton = this.page.getByLabel('Save this search ipad search');
    includeDescriptionCheckbox = this.page.getByLabel('Include description');
    sortButton = this.page.getByLabel('Sort selector. Best Match');
    sortByTimeEnding = this.page.getByRole('link', { name: 'Time: ending soonest' });
    filterIpadGenerationCheckbox = this.page.getByLabel('Apple iPad (9th Generation)', { exact: true });
    storage256GB = this.page.getByRole('link', { name: '256 GB - apply Storage' });
    clearAllSelectedFiltersButton = this.page.getByRole('link', { name: 'Clear All Filters' });
    ebayLogo = this.page.getByRole('link', { name: 'eBay Home' });
    shippingToCountryText = this.page.getByRole('button', { name: 'Shipping toTurkey' });

    async isSortButtonDisplayed(){
        await expect.soft(this.saveThisSearchButton).toBeVisible();
    }

    async selectIncludeDescriptionCheckbox(){
        await this.includeDescriptionCheckbox.check();
    }

    async sortProductByTimeEnding(){
        await this.sortButton.click();
        await this.sortByTimeEnding.click();
    }

    async filterIpadGeneration(){
        await this.filterIpadGenerationCheckbox.check();
        await expect.soft(this.filterIpadGenerationCheckbox, 'filtering checkbox').toBeChecked();
    }

    async click256GbButton(){
        await this.storage256GB.click();
    }

    async clearAllSelectedFilters(){
        await this.clearAllSelectedFiltersButton.click();
    }

    async verifyEbayLogo(){
        await expect.soft(this.ebayLogo).toBeVisible();
    }

    async verifyShippingToCountryText(){
        await expect.soft(this.shippingToCountryText).toContainText('Shipping to');
    }
}