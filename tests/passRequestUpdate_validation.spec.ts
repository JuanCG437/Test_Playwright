import { test, expect } from '@playwright/test';

test('verify that during the user update the requirements for changing a password are validated with a minimum of 8 characters, with a capital letter, a number, and a special character', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/register');
  await page.getByPlaceholder('Login').fill('jensen');
  await page.getByRole('navigation').locator('input[name="password"]').click();
  await page.getByRole('navigation').locator('input[name="password"]').fill('iG18)04-');
  await page.locator('button[class="btn btn-success"]').click();
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.getByLabel('Current Password').click();
  await page.locator('input[id="currentPassword"]').fill('iG18)04-');
  await page.getByLabel('New Pasword').click();
  await page.locator('input[id="newPassword"]').fill('7~aXS1Y5');
  await page.getByLabel('New Pasword').click();
  await page.getByLabel('Confirm Password').click();
  await page.locator('input[id="newPasswordConfirmation"]').fill('7~aXS1Y5');
  await page.locator('button[class="btn btn-default"]').click();
  await page.getByText('The profile has been saved').first().click();
});