import { expect, Page, Locator } from '@playwright/test';

export class NavBarPage {

    private readonly page: Page;
    private readonly petTypesMenuOption: Locator;
    private readonly petTypesHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.petTypesMenuOption = page.getByTitle('pettypes');
        this.petTypesHeading = page.getByRole('heading', { name: 'Pet Types', level: 2 });
    }

    /**
     * Opens the Pet Types page from the navigation bar
     * and checks that the "Pet Types" heading is displayed.
     */
    async navigateToPetTypesPage() {
        await this.petTypesMenuOption.click();
        await expect(this.petTypesHeading).toHaveText('Pet Types');
    }

}