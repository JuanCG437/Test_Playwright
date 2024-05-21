import { test, expect } from '@playwright/test';

test('verifies that an authenticated user can only vote once per car', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/register');
  await page.getByPlaceholder('Login').fill('jensen');
  await page.getByRole('navigation').locator('input[name="password"]').fill('7~aXS1Y5');
  await page.getByRole('navigation').locator('input[name="password"]').press('Enter');
  await page.getByRole('link', { name: 'Buggy Rating' }).click();
  await page.getByRole('link', { name: 'Diablo' }).click();
  await page.getByText('Thank you for your vote!').click();
});