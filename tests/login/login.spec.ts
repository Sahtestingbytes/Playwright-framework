
import user from '../../test-data/user.json';
import { test, expect } from '../../fixtures/uiFixture';

export const testUsers = user;
test('Verify successful login @smoke', async ({loginPage, dashboardPage})=>{


// const loginPage = new LoginPage(page);
// const dashboardPage = new DashboardPage(page);

await loginPage.goto();
await loginPage.login(testUsers.validUser.username, testUsers.validUser.password);

await dashboardPage.verifyDashboardLoaded();
});

test("Invalid Login @regression", async ({ loginPage, dashboardPage }) => {

//    const loginPage = new LoginPage(page);
// const dashboardPage = new DashboardPage(page);

await loginPage.goto();
await loginPage.login(testUsers.InvalidUser.username, testUsers.InvalidUser.password);

// loginPage.login(config.username,config.password)
await dashboardPage.verifyDashboardLoaded();
});


