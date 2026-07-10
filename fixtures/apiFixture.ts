import { test as base } from '@playwright/test';
import { BookingApi } from '../api/BookingApi';
import { AuthApi } from '../api/AuthApi';

type ApiFixtures = {

    bookingApi: BookingApi;

};


export const test = base.extend<ApiFixtures>({

    bookingApi: async ({ request }, use) => {

         const authApi =
            new AuthApi(request);


        const token =
            await authApi.getToken();

        const bookingApi =
            new BookingApi(request,token);

        await use(bookingApi);

    }

});


export { expect } from '@playwright/test';