import { BasePage, expect } from "./base-page";

export class ProductPage extends BasePage{
    saveThisSearchButton = this.page.getByLabel('Save this search ipad search');
    includeDescriptionCheckbox = this.page.getByLabel('Include description');
    sortButton = this.page.getByLabel('Sort selector. Best Match');
    sortByTimeEnding = this.page.getByRole('link', { name: 'Time: ending soonest' });
    filterIpadGenerationCheckbox = this.page.getByLabel('Apple iPad (9th Generation)', { exact: true });
    storage256GB = this.page.getByRole('link', { name: '256 GB - apply Storage' });
    clearAllSelectedFiltersButton = this.page.getByRole('link', { name: 'Clear All Filters' });

    async isSortButtonDisplayed(){
        await expect(this.saveThisSearchButton).toBeVisible();
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
    }

    async click256GbButton(){
        await this.storage256GB.click();
    }

    async clearAllSelectedFilters(){
        await this.clearAllSelectedFiltersButton.click();
    }

}