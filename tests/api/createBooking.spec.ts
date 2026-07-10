import { test, expect } from '../../fixtures/apiFixture';
import bookingData from "../../test-data/booking.json";
import { AuthApi } from '../../api/AuthApi';


test('create bookings', async ({ bookingApi }) => {
     

 
    //const bookingApi = new BookingApi(request); 
    const response = await bookingApi.createBooking(bookingData);
    const body = await response.json();
    console.log(body);
    
    expect(response.status()).toBe(200); 
});



