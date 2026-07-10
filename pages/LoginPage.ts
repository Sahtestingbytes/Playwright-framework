import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage  extends BasePage{

    
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {

        super(page)

        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');

    }


    async goto() {
       await this.navigate('/');
    }


    async login(user: string, pass: string) {

        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginButton.click();

    }

}