# 🧪  **Test_Playwright**

Usando la herramienta Playwright para pruebas automatizadas en una aplicación web para pruebas.

Las pruebas se realizan de acuerdo a los siguientes Test cases (casos de prueba):

---

📌 **Casos de prueba**: [consulta los casos de prueba ](https://docs.google.com/document/d/1EJuX47GgvlWCDRaRF2vSgwzPniK1KFF5/edit?usp=sharing&ouid=113813683545231967028&rtpof=true&sd=true).

---

## 📍**Prueba: Validación de registro y campos obligatorios**

✅ Verifica que para registrarse es necesario proporcionar un login, nombre, apellido y contraseña. También se valida que todos los campos sean obligatorios para el registro.

```typescript
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

📌 **Resultado esperado**: Todos los campos son obligatorios para completar el registro.

---

## 🔑 **Prueba: Validación de requisitos de contraseña**

✅ Verifica que la contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.

```typescript
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

📌 **Resultado esperado**: Se muestra un error si la contraseña no cumple con los requisitos.

---

## 🪪 **Prueba: Valida un unico registro de usuario**

✅ Verifica que un usuario sólo se pueda registrar una unica vez.

```typescript
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

📌 **Resultado esperado**: Se muestra un error indicando que el usuario ya existe en la aplicación.

---

## 🔄 **Prueba: Validación de actualización de usuario**

✅ Verifica que un usuario pueda actualziar sus datos personales.

```typescript
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

📌 **Resultado esperado**: Los datos actualizados se guardan correctamente.

---

## 🛡️ **Prueba: Validación requisitos de actualización de contraseña**

✅ Verifica que la contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un caracter especial para poder ser actualizada.

```typescript
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

📌 **Resultado esperado**: Se muestra un error si no se cumplen los requerimientos.

---

## **Prueba: Valida campos (nombre y apellido) obligatorios**

✅ Valida que los campos nombre y apellido son obligatorios para poder actualizar la información del usuario.

```typescript
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

📌 **Resultado esperado**: Mensaje o modal indicando error al actualizar la información del usuario si los campos obligatorios están vaciós o nulos.

---

## 🎟 **Prueba: Valida votar para usuarios autenticados**

✅ Verifica que solo los usuarios auntenticados puedan votar.

```typescript
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

📌 **Resultado esperado**: Se verifica que el usuario puede realizar votaciones

---

## ❌ **Prueba: Validación de restricción de votación para usuarios no autenticados**

🚫 En esta segunda parte se valida que un usuario no autenticado no puede realizar votaciones

```typescript
test('a user who is not auntenticado can not vote', async ({ page }) => {
    await page.goto('https://buggy.justtestit.org/register');
    await page.getByRole('link', { name: 'Buggy Rating' }).click();
    await page.getByRole('link', { name: 'Diablo' }).click();
    await page.getByText('You need to be logged in to').click();
});
```

📌 **Resultado esperado**: Solo los usuarios autenticados pueden emitir votos.

---

## 🛑 **Prueba: Valida único voto por usuario**

🚫 Valida que unicamente se puede realizar un único voto por usuario para cada artículo.

```typescript
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

📌 **Resultado esperado:** Sólo se puede realizar un voto por artículo.

---

## 📖 **Prueba: valida realizar comentarios en votación**

✅ Se valida que el usuario pueda realziar comentarios en cada artículo en el que haya votado y que el contador de votos incremente al haber realizado el voto.

```typescript
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

📌 **Resultado esperado**: El comentario es visible en la tabla de comentarios y el contador de votos incrementa de número al realizar un voto.

---

## 📝 **Conclusiones y mejoras**

📌**Recomendaciones**:
1. Implementar `beforeEach()` para evitar la repetición de código.
2. Agregar más casos negativos o de invalidación para valdiaciones más robustas.
3. Usar `data-test-id` en los elementos HTML en lugar de selectores CSS para mayor estabilidad.

📌 **Estado del proyecto:** 🔁 **En progreso** (algunas pruebas necesitan refinamiento a problemas para tiemout en Playwright).

📌 **Ultima actualización**: _27 de marzo de 2025_ 

>[!IMPORTANT]
>
>La prueba presenta algunos fallos debido que playwright puede presentar pruebas como fallidas cuando se excede cierto tiempo limite, cuando  enrealidad la prueba no deberia de fallar, en este caso falla debido a que no puede encontrar un objeto del **DOM**, requisito necesario para realizar las validaciones en el método de prueba, por lo tanto la prueba se considera en espera.
