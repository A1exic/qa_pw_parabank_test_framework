import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import { Severity } from 'allure-js-commons';

import { RegisterPage } from '../../src/ui/pages/auth/RegisterPage';
import { registerStep } from '../../src/ui/pages/steps/authSteps';
import { registerData } from '../_fixtures/register.fixture';

test.describe('Authentication - Register', () => {
  test('Register positive', async ({ page }) => {
    allure.parentSuite('Parabank');
    allure.suite('Authentication');
    allure.subSuite('Register');
    allure.severity(Severity.BLOCKER);

    const registerPage = new RegisterPage(page);

    await test.step('Register new user', async () => {
      await registerStep(page, registerPage, registerData);
    });

    await test.step('Verify registration success', async () => {
      return await expect(registerPage.successMsg).toBeVisible();
    });
  });
});
