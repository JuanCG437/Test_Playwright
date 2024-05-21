import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

test('test', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByPlaceholder('Login').fill('Salem');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('2!W8rMa6');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Buggy Rating' }).click();
  await page.locator('my-home').getByRole('link').nth(2).click();
  await page.locator('label[for="comment"]');
  /* await page.locator('textarea[id="comment"]').fill('no me gusta prefiero otros'); // this code snippet has test failures due to a timeout in the search for an HTML DOM element*/
  await page.getByRole('button', { name: 'Vote!' }).click();


  await expect(page.locator('')).toHaveText('no me gusta prefiero otros');

  /* Validation the comment of user votation on car*/
  await page.getByRole('cell', { name: 'May 19, 2024, 11:09:37 PM' }).click();
  await page.getByRole('cell', { name: 'beautiful' }).first().click();

  const label = page.locator('td[class="text-nowrap"] td td');
  await expect(label).toHaveText

  await expect(label).toHaveText('no me gusta prefiero otros');
});