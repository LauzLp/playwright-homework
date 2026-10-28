import { expect, Page, Locator } from '@playwright/test';

export class EditPage {

    private readonly page: Page;
    private readonly petTypeInput: Locator;
    private readonly updateButton: Locator;
    private readonly petTypeNamesList: Locator;
    private readonly API_URL: string;

    constructor(page: Page) {
        this.page = page;
        this.petTypeInput = page.locator('#name');
        this.updateButton = page.getByRole('button', { name: 'Update' });
        this.petTypeNamesList = page.locator('input[name="pettype_name"]');
        this.API_URL = "*/**/pettypes/*";
    }

    /**
     * Replaces the current pet type name and clicks Update.
     * Waits for the pet type request to finish first so the
     * input is ready, then checks the first name in the list.
     * 
     * @param newPetType - Name to save for this pet type
     */
    async updatePetType(newPetType: string) {
        await this.page.waitForResponse(this.API_URL);
        await this.petTypeInput.fill(newPetType);
        await this.updateButton.click();
        await expect(this.petTypeNamesList.first()).toHaveValue(newPetType);
    }
}