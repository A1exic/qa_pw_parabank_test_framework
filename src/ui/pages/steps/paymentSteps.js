import { step } from '../../../common/helpers/allureHelpers';

export async function transferFunds(page, transferPage, from, to, amount) {
  await step(`Transfer funds: ${amount}`, async () => {
    await transferPage.open();
    await page.selectOption(transferPage.fromAccount, from);
    await page.selectOption(transferPage.toAccount, to);
    await page.fill(transferPage.amount, amount.toString());
    await page.click(transferPage.transferBtn);
  });
}
