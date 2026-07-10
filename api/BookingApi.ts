import { APIRequestContext } from '@playwright/test';
import { config } from '../config/config';

export class BookingApi {
     private request: APIRequestContext;
      private token: string;
    constructor( request: APIRequestContext,token:string)
     {
           this.request = request;
           this.token=token;

     }

    async getAllBookings() {
        return await this.request.get(
            `${config.apiBaseURL}/booking`
        );
    }

    async getBooking(id: number) {
        return await this.request.get(
            `${config.apiBaseURL}/booking/${id}`
        );
    }
    async createBooking(data: any) {
    return await this.request.post(
        `${config.apiBaseURL}/booking`,
        {
            data,  
            headers:{
                Cookie:`token=${this.token}`
            }
        }
    );

}

}