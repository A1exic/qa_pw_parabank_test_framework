import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import { Severity } from 'allure-js-commons';
import { RegisterPage } from '../../src/ui/pages/auth/RegisterPage';
import { registerStep } from '../../src/ui/pages/steps/authSteps';
import { getRegisterData } from '../_fixtures/register.fixture';

test.describe('Authentication - Register', () => {
  test('Register positive', async ({ page }) => {
    const registerData = getRegisterData();
    const registerPage = new RegisterPage(page);

    allure.severity(Severity.BLOCKER);

    await registerPage.open();
    await page.waitForLoadState('networkidle');

    await registerStep(page, registerPage, registerData);

    await expect(page).toHaveURL(/.*register.htm/, { timeout: 10000 });

    const successText = page.getByText('Your account was created');
    await expect(successText).toBeVisible({ timeout: 15000 });
  });

  test('Register negative - existing username', async ({ page }) => {
    const registerData = getRegisterData();

    allure.parentSuite('Parabank');
    allure.suite('Authentication');
    allure.subSuite('Register');
    allure.severity(Severity.CRITICAL);

    const registerPage = new RegisterPage(page);

    await registerStep(page, registerPage, {
      ...registerData,
      username: 'john',
    });

    await expect(registerPage.errorMsg).toBeVisible();
  });
});
