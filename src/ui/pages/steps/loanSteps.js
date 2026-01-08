import { step } from '../../../common/helpers/allureHelpers';

export async function requestLoan(page, loanPage, data) {
  await step('Request loan', async () => {
    await loanPage.open();
    await page.fill(loanPage.amount, data.amount.toString());
    await page.fill(loanPage.downPayment, data.downPayment.toString());
    await page.selectOption(loanPage.accountFrom, data.accountFrom);
    await page.click(loanPage.applyBtn);
  });
}
