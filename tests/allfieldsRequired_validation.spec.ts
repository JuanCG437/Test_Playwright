import { test, expect } from '@playwright/test';

test('Verify that the “first name” and “last name” fields cannot be empty for their respective update.', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/register');
  await page.getByPlaceholder('Login').fill('jensen');
  await page.getByRole('navigation').locator('input[name="password"]').fill('7~aXS1Y5');
  await page.locator('button[class="btn btn-success"]').click();
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.getByLabel('First Name').click();
  await page.locator('input[id="firstName"]').fill('');
  await page.getByText('First Name is required').click();
  await page.getByLabel('Last Name').click();
  await page.locator('input[id="lastName"]').fill('');
  await page.getByText('Last Name is required').click();
});