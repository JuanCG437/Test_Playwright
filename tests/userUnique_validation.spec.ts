import { test, expect } from '@playwright/test';

test('Verifies that a user can only register once', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/register');
  await page.getByLabel('Login').click();
  await page.locator('input[id="username"]').fill('yoamoPascual');
  await page.getByLabel('First Name').click();
  await page.locator('input[id="firstName"]').fill('pruebaPascual');
  await page.getByLabel('Last Name').click();
  await page.locator('input[id="lastName"]').fill('IUPB');
  await page.getByLabel('Password', { exact: true }).click();
  await page.locator('input[id="password"]').fill('o7Utc80_');
  await page.getByLabel('Confirm Password', {exact: true}).click();
  await page.locator('input[id="confirmPassword"]').fill('o7Utc80_');
  await page.locator('button[class="btn btn-default"]').click();
  await page.getByText(' UsernameExistsException: User already exists ').click();
});