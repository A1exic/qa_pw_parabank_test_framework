import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../src/ui/pages/auth/RegisterPage';
import { registerStep } from '../../src/ui/pages/steps/authSteps';
import { registerData } from '../_fixtures/register.fixture';

test.describe('Authentication - Register', () => {
  test.use({
    allure: {
      parentSuite: 'Parabank',
      suite: 'Authentication',
      subSuite: 'Register',
    },
  });

  test('Register positive', async ({ page }) => {
    test.info().annotations.push({ type: 'severity', description: 'blocker' });

    const registerPage = new RegisterPage(page);
    await registerStep(page, registerPage, registerData);
    await expect(page.locator(registerPage.successMsg)).toBeVisible();
  });
});
