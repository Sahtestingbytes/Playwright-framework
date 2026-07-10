import { Page } from "@playwright/test";

export class BasePage {

    constructor(protected page: Page) {}

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async getTitle() {
        return this.page.title();
    }

    async takeScreenshot(name: string) {
        await this.page.screenshot({
            path: `screenshots/${name}.png`
        });
    }
}