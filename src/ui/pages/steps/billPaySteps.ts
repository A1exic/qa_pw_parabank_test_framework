import { Page } from '@playwright/test';
import { BillPayPage } from '../payments/BillPayPage';

interface BillPayData {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  account: string;
  amount: string;
}

export async function payBill(
  page: Page,
  billPay: BillPayPage,
  data: BillPayData,
) {
  await billPay.open();
  await billPay.payeeName.fill(data.name);
  await billPay.address.fill(data.address);
  await billPay.city.fill(data.city);
  await billPay.state.fill(data.state);
  await billPay.zip.fill(data.zip);
  await billPay.phone.fill(data.phone);
  await billPay.account.fill(data.account);
  await billPay.verify.fill(data.account);
  await billPay.amount.fill(data.amount);
  await billPay.send.click();
}
