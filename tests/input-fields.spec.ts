import { test } from '@playwright/test';
import { PageManager } from '../page-objects/page-manager';

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

/**
 * Test case steps:
 * 
 * 1. Select the PET TYPES menu item in the navigation bar
 * 2. Add assertion of the "Pet Types" text displayed above the table with the list of pet types
 * 3. Click on "Edit" button for the "cat" pet type
 * 4. Add assertion of the "Edit Pet Type" text displayed
 * 5. Change the pet type name from "cat" to "rabbit" and click "Update" button
 * 6. Add the assertion that the first pet type in the list of types has a value "rabbit" 
 * 7. Click on "Edit" button for the same "rabbit" pet type
 * 8. Change the pet type name back from "rabbit" to "cat" and click "Update" button
 * 9. Add the assertion that the first pet type in the list of names has a value "cat" 
 * 
 */
test('Update per type', { tag: '@pettypes' }, async ({ page }) => {

  const petType = {
    cat: 'cat',
    rabbit: 'rabbit'
  };
  const pm = new PageManager(page);

  await pm.navBar.navigateToPetTypesPage();
  await pm.petTypes.navigateToEditPage(petType.cat);
  await pm.edit.updatePetType(petType.rabbit);
  await pm.petTypes.navigateToEditPage(petType.rabbit);
  await pm.edit.updatePetType(petType.cat);
});