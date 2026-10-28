import { Page } from '@playwright/test';
import { NavBarPage } from './navbar-page';
import { PetTypesPage } from './pet-types-page';
import { EditPage } from './edit-page';

export class PageManager {
    readonly navBar: NavBarPage;
    readonly petTypes: PetTypesPage;
    readonly edit: EditPage;

    constructor(page: Page) {
        this.navBar = new NavBarPage(page);
        this.petTypes = new PetTypesPage(page);
        this.edit = new EditPage(page);
    }
}