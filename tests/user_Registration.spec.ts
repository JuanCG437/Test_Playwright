import { test, expect } from '@playwright/test';

test('verifies that all fields are required for successful registration', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/register');
  await page.getByLabel('Login').click();
  await page.locator('input[id="username"]').fill('Salem');
  await page.getByLabel('First Name').click();
  await page.locator('input[id="firstName"]').fill('Turbay');
  await page.getByLabel('Last Name').click();
  await page.locator('input[id="lastName"]').fill('Cole');
  await page.getByLabel('Password', { exact: true }).click();
  await page.locator('input[id="password"]').fill('2!W8rMa6');
  await page.getByLabel('Confirm Password', {exact: true}).click();
  await page.locator('input[id="confirmPassword"]').fill('2!W8rMa6');
  await page.locator('button[class="btn btn-default"]').click();
  await page.getByText(' Registration is sucessful ').click();
});