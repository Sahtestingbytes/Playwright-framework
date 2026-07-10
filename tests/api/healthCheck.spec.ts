import { test, expect } from '../../fixtures/apiFixture';



test('Verify API is up', async ({ bookingApi }) => {

   
    const response = await bookingApi.getBooking(1 );


    expect(response.status()).toBe(201);
});