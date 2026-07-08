import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
import user from '../../test-data/user.json';

export const testUsers = user;
test('Verify successful login @smoke', async ({page})=>{


const loginPage = new LoginPage(page);
const dashboardPage = new DashboardPage(page);

await loginPage.goto();
await loginPage.login(testUsers.validUser.username, testUsers.validUser.password);

await dashboardPage.verifyDashboardLoaded();
});

test("Invalid Login @regression", async ({ page }) => {

   const loginPage = new LoginPage(page);
const dashboardPage = new DashboardPage(page);

await loginPage.goto();
await loginPage.login(testUsers.InvalidUser.username, testUsers.InvalidUser.password);

await dashboardPage.verifyDashboardLoaded();
});


