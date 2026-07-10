import { test, expect } from '../../fixtures/apiFixture';
import { config } from '../../config/config';

test('Get booking by id', async ({ bookingApi }) => {

    const response = await bookingApi.getBooking(1 );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body.firstname).toBeDefined();
});