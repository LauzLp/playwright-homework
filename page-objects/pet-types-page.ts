import { expect, Page, Locator } from '@playwright/test';

export class PetTypesPage {

    private readonly page: Page;
    private readonly editPageHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.editPageHeading = page.getByRole('heading', { name: 'Edit Pet Type', level: 2 });
    }

    /**
     * Clicks Edit on the row for the given pet type
     * and checks that the "Edit Pet Type" heading is displayed.
     * @param petType - Name of the pet type to edit
     */
    async navigateToEditPage(petType: string) {
        await this.page.getByRole('cell', { name: petType })
            .locator('..')
            .getByRole('button', { name: 'Edit' })
            .click();
        await expect(this.editPageHeading).toHaveText('Edit Pet Type');
    }
}