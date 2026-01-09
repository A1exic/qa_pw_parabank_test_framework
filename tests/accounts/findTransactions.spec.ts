import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import { Severity } from 'allure-js-commons';

const testAmounts = ['100.00', '500.00', '1234.56'];

for (const amount of testAmounts) {
  test(`Find transaction by amount: ${amount}`, async ({ page }) => {
    allure.parentSuite('Parabank');
    allure.suite('Find Transactions');
    allure.severity(Severity.NORMAL);

    await test.step(`Search for amount ${amount}`, async () => {});
  });
}
