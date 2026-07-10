import { test, expect } from '../../fixtures/apiFixture';



test('Verify API is up', async ({ bookingApi }) => {

   
    const response = await bookingApi.getBooking(1);
console.log(response.status);

    expect(response.status()).toBe(200);
});