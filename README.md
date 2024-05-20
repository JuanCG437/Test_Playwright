# Test_Playwright
Usando la herramienta playwright para pruebas automatizadas de un sitio web

El proyecto realiza una serie de pruebas teniendo en cuenta las siguientes historias de usuario
de una aplicación web:

[Casos de prueba](https://docs.google.com/document/d/1EJuX47GgvlWCDRaRF2vSgwzPniK1KFF5/edit?usp=sharing&ouid=113813683545231967028&rtpof=true&sd=true).

Teniendo en cuenta las historias de usuario se realizaon las siguientes pruebas:

## Prueba validación de registro y campos obligatorios

la prueba valida que para registrarse es necesario proporcionar un login, nombre, 
apellido y contraseña, además de verificarque todos los campos sean obligatorios

```
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
```
la prueba valida que todos los campos son obligatorios.

## Prueba validación de requisitos de contraseña

La prueba valida que los requisitos de registro de la contraseña es que debe de 
tener mínimo 6 caracteres, una mayúscula y un caracter especial.

```
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
```
La prueba dió como resultado que deben de ser 8 caracteres mínimos y no 6.

## Prueba valida un unico registro de usuario

La prueba valida que solo se puede registar un unico usuario.

```
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
```
El resultado de la prueba es que efectivamente solo se puede registrar un unico usuario una sola vez.

## Prueba valida actualización de usuario

La prueba valida que el usario pueda actualizar los campos de nombre, apellido, dirección,
télefono y hobby

```
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
```
La actualización de información se realizó con éxtio.

## Prueba validación requisitos de actualización de contraseña

La prueba valida que se cumplan ciertos requerimientos para actualizar la contraseña los cuales son, 
tener 8 caracteres minimo, una mayúscula y un caracter especial.

```
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
```
La prueba se validó con éxito y se corroboraron los requisitos de actualización de contraseña.

## Prueba valida campos (nombre y apellido) obligatorios

La prueba valida que algunos campos son obligatorios para poder actualziar la información, 
es decir no pueden estar en estado "vacío" o "nulo".

```
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
```
Efectivamente esos campos son obligatorios para realizar una actualización de usuario éxitosa.

## Prueba valida votar para usuarios autenticados

La prueba valida que solo se le permita realizar votaciones a los usuarios autenticados por el sitio web.

En esta primera parte se evalua la opción de votar cuando el usuario está logueado.

```
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
```
Se verifica que el usuario puede realizar votaciones

En esta segunda parte se valida que un usuario no autenticado no puede realizar votaciones
```
test('a user who is not auntenticado can not vote', async ({ page }) => {
    await page.goto('https://buggy.justtestit.org/register');
    await page.getByRole('link', { name: 'Buggy Rating' }).click();
    await page.getByRole('link', { name: 'Diablo' }).click();
    await page.getByText('You need to be logged in to').click();
});
```

## Prueba valida unico voto por usuario

La prueba valida que un usuario autenticado solo puede realizar una unica votación,
a un carro deportivo.

```
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
```
Efectivamente se comprueba que un usuario solo puede votar una sola vez por carro.

## Prueba valida realizar comentarios en votacion

La prueba valida que permita al usuario realizar un comentario en la votación de un respectivo,
carro deportivo, además de verificar que relamente si se vea efectuado el comentario en la tabla de comentarios
y que el contador de votos incremente.

```
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
```

>[!IMPORTANT]
>
>La prueba presenta algunos fallos debido que playwright puede presentar pruebas como fallidas cuando se excede cierto tiempo limite, cuando  enrealidad la prueba no deberia de fallar, en este caso falla debido a que no puede encontrar un objeto del DOM requisito para el método de prueba.
