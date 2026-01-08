import { expect } from '@playwright/test';
import { step } from '../../../common/helpers/allureHelpers';

export async function verifyAccountOverview(page, accountOverview) {
  await step('Verify accounts visible', async () => {
    await expect(page.locator(accountOverview.accountsTable)).toBeVisible();
  });
}

export async function filterByType(page, accountDetails, type) {
  await step(`Filter transactions by type ${type}`, async () => {
    await page.selectOption(accountDetails.filterType, type);
    await page.click(accountDetails.filterBtn);

    await expect(page.locator(accountDetails.transactionRows)).toBeVisible();
  });
}
