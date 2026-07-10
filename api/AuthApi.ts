import { APIRequestContext } from '@playwright/test';
import { config } from '../config/config';


export class AuthApi {

    constructor(private request: APIRequestContext) {}


    async getToken() {

        const response =
            await this.request.post(
                `${config.apiBaseURL}/auth`,
                {
                    data: {
                        username: "admin",
                        password: "password123"
                    }
                }
            );


        const body = await response.json();

        return body.token;

    }

}