import { step } from '../../../common/helpers/allureHelpers';

export async function payBill(page, billPayPage, data) {
  await step('Bill Pay', async () => {
    await billPayPage.open();
    await page.fill(billPayPage.payeeName, data.name);
    await page.fill(billPayPage.address, data.address);
    await page.fill(billPayPage.city, data.city);
    await page.fill(billPayPage.state, data.state);
    await page.fill(billPayPage.zip, data.zip);
    await page.fill(billPayPage.phone, data.phone);
    await page.fill(billPayPage.account, data.account);
    await page.fill(billPayPage.verify, data.account);
    await page.fill(billPayPage.amount, data.amount);
    await page.click(billPayPage.send);
  });
}
