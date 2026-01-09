import { test, Page } from '@playwright/test';

export async function transferFunds(
  page: Page,
  transferPage: any,
  from: string,
  to: string,
  amount: number,
) {
  await test.step(`Transfer funds: ${amount}`, async () => {
    await transferPage.fromAccount.selectOption(from);
    await transferPage.toAccount.selectOption(to);
    await transferPage.amountInput.fill(amount.toString());
    await transferPage.transferBtn.click();
  });
}

export async function verifyTransferValidation(page: Page, transferPage: any) {
  await test.step('Verify validation message', async () => {});
}
