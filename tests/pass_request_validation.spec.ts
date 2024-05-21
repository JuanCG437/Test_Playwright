import { test, expect } from '@playwright/test';

test('verifies that during user registration the requirements to create a password with a minimum of 6 characters, with a capital letter, a number, and a special character are validated.', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/register');
  await page.getByLabel('Login').click();
  await page.locator('input[id="username"]').fill('yoamoPascual');
  await page.getByLabel('First Name').click();
  await page.locator('input[id="firstName"]').fill('pascualTest');
  await page.getByLabel('Last Name').click();
  await page.locator('input[id="lastName"]').fill('IUPB');
  await page.getByLabel('Password', { exact: true }).click();
  await page.locator('input[id="password"]').fill('T6p99(');
  await page.getByLabel('Confirm Password', {exact: true}).click();
  await page.locator('input[id="confirmPassword"]').fill('T6p99(');
  await page.locator('button[class="btn btn-default"]').click();
  await page.getByText('InvalidPasswordException:').click();
});