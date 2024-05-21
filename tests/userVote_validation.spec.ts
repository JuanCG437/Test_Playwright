import { test, expect } from '@playwright/test';

test('verifies that an authenticated user is allowed to vote', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/register');
  await page.getByPlaceholder('Login').fill('jensen');
  await page.getByRole('navigation').locator('input[name="password"]').click();
  await page.getByRole('navigation').locator('input[name="password"]').fill('7~aXS1Y5');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Hi, juanManuel').click();
  await page.getByRole('link', { name: 'Buggy Rating' }).click();
  await page.locator('my-home').getByRole('link').nth(2).click();
  await page.getByRole('link', { name: 'Pagani Zonda' }).click();
  await page.getByRole('button', { name: 'Vote!' }).click();
  await page.getByText('Thank you for your vote!').click();
});


test('a user who is not auntenticado can not vote', async ({ page }) => {
    await page.goto('https://buggy.justtestit.org/register');
    await page.getByRole('link', { name: 'Buggy Rating' }).click();
    await page.getByRole('link', { name: 'Diablo' }).click();
    await page.getByText('You need to be logged in to').click();
});