import { step } from '../../../common/helpers/allureHelpers';

export async function loginStep(page, loginPage, user) {
  await step('Login action', async () => {
    await loginPage.open();
    await page.fill(loginPage.username, user.username);
    await page.fill(loginPage.password, user.password);
    await page.click(loginPage.loginBtn);
  });
}

export async function registerStep(page, registerPage, data) {
  await step('Register action', async () => {
    await registerPage.open();
    await page.fill(registerPage.firstName, data.firstName);
    await page.fill(registerPage.lastName, data.lastName);
    await page.fill(registerPage.address, data.address);
    await page.fill(registerPage.city, data.city);
    await page.fill(registerPage.state, data.state);
    await page.fill(registerPage.zip, data.zip);
    await page.fill(registerPage.phone, data.phone);
    await page.fill(registerPage.ssn, data.ssn);
    await page.fill(registerPage.username, data.username);
    await page.fill(registerPage.password, data.password);
    await page.fill(registerPage.confirm, data.confirm);
    await page.click(registerPage.registerBtn);
  });
}
