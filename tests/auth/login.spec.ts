import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import { Severity } from 'allure-js-commons';

import { LoginPage } from '../../src/ui/pages/auth/LoginPage';
import { loginStep } from '../../src/ui/pages/steps/authSteps';
import { validUser, invalidUsers } from '../_fixtures/user.fixture';

test.describe('Authentication - Login', () => {
  for (const user of invalidUsers) {
    test(`Login invalid - ${user.username}`, async ({ page }) => {
      allure.parentSuite('Parabank');
      allure.suite('Authentication');
      allure.subSuite('Login');
      allure.severity(Severity.BLOCKER);

      const loginPage = new LoginPage(page);

      await test.step('Open login page', async () => {
        await loginPage.open();
      });

      await test.step('Login with invalid credentials', async () => {
        await loginStep(page, loginPage, user);
      });

      await test.step('Verify error message', async () => {
        await expect(page.locator(loginPage.error)).toBeVisible();
      });
    });
  }

  test('Login valid', async ({ page }) => {
    allure.parentSuite('Parabank');
    allure.suite('Authentication');
    allure.subSuite('Login');
    allure.severity(Severity.BLOCKER);

    const loginPage = new LoginPage(page);

    await test.step('Open login page', async () => {
      await loginPage.open();
    });

    await test.step('Login with valid credentials', async () => {
      await loginStep(page, loginPage, validUser);
    });

    await test.step('Verify successful login', async () => {
      await expect(page).toHaveURL(/overview/);
    });
  });
});
