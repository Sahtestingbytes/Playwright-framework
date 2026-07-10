
import { test, expect } from '../../fixtures/apiFixture';
test('Get all bookings', async ({ bookingApi }) => {

    //const bookingApi = new BookingApi(request);

    const response = await bookingApi.getAllBookings();

    expect(response.status()).toBe(200);

});