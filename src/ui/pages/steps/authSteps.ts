import { Page } from '@playwright/test';
import { LoginPage } from '../auth/LoginPage';
import { RegisterPage } from '../auth/RegisterPage';

interface User {
  username: string;
  password: string;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  ssn: string;
  username: string;
  password: string;
  confirm: string;
}

export async function loginStep(page: Page, loginPage: LoginPage, user: User) {
  await loginPage.open();
  await loginPage.username.fill(user.username);
  await loginPage.password.fill(user.password);
  await loginPage.loginBtn.click();
}

export async function registerStep(
  page: Page,
  registerPage: RegisterPage,
  data: RegisterData,
) {
  await registerPage.open();
  await registerPage.firstName.fill(data.firstName);
  await registerPage.lastName.fill(data.lastName);
  await registerPage.address.fill(data.address);
  await registerPage.city.fill(data.city);
  await registerPage.state.fill(data.state);
  await registerPage.zip.fill(data.zip);
  await registerPage.phone.fill(data.phone);
  await registerPage.ssn.fill(data.ssn);
  await registerPage.username.fill(data.username);
  await registerPage.password.fill(data.password);
  await registerPage.confirm.fill(data.confirm);
  await registerPage.registerBtn.click();
}
