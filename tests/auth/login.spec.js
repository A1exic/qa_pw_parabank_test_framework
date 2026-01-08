import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/ui/pages/auth/LoginPage';
import { loginStep } from '../../src/ui/pages/steps/authSteps';
import { validUser, invalidUsers } from '../_fixtures/user.fixture';

test.describe('Authentication - Login', () => {
  test.use({
    allure: {
      parentSuite: 'Parabank',
      suite: 'Authentication',
      subSuite: 'Login',
    },
  });

  for (const user of invalidUsers) {
    test(`Login invalid - ${user.username}`, async ({ page }) => {
      test
        .info()
        .annotations.push({ type: 'severity', description: 'blocker' });

      const loginPage = new LoginPage(page);
      await loginPage.open();
      await loginStep(page, loginPage, user);
      await expect(page.locator(loginPage.error)).toBeVisible();
    });
  }

  test('Login valid', async ({ page }) => {
    test.info().annotations.push({ type: 'severity', description: 'blocker' });

    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginStep(page, loginPage, validUser);
    await expect(page).toHaveURL(/overview/);
  });
});
