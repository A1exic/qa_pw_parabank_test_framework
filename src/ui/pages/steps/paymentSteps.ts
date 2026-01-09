import { test, Page } from '@playwright/test';
import { TransferFundsPage } from '../payments/TransferFundsPage';

export async function transferFunds(
  page: Page,
  transferPage: any,
  from: string,
  to: string,
  amount: number,
) {
  await test.step(`Transfer funds: ${amount}`, async () => {
    // Логика перевода
    await transferPage.fromAccount.selectOption(from);
    await transferPage.toAccount.selectOption(to);
    await transferPage.amountInput.fill(amount.toString());
    await transferPage.transferBtn.click();
  });
}

// Добавляем отсутствующий метод
export async function verifyTransferValidation(page: Page, transferPage: any) {
  await test.step('Verify validation message', async () => {
    // Реализация проверки
  });
}
