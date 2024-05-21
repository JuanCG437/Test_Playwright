import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/register');
  await page.getByPlaceholder('Login').fill('jensen');
  await page.getByRole('navigation').locator('input[name="password"]').click();
  await page.getByRole('navigation').locator('input[name="password"]').fill('Y,sS73e1');
  await page.locator('button[class="btn btn-success"]').click();
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('juanManuel');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('cortezitogomez');
  await page.getByLabel('Address').click();
  await page.getByLabel('Address').fill('ave 52 # 41 - 135');
  await page.getByLabel('Phone').click();
  await page.getByLabel('Phone').fill('4835658');
  await page.getByLabel('Hobby').selectOption('Video Games');
  await page.locator('button[class="btn btn-default"]').click();
  await page.getByText('The profile has been saved').first().click();
});