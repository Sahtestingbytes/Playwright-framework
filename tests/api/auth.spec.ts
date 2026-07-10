import { test, expect } from '../../fixtures/apiFixture';
import { AuthApi } from '../../api/AuthApi';


test('Generate auth token', async ({ request }) => {


    const authApi = new AuthApi(request);


    const response =
        await authApi.createToken();


    expect(response.status())
        .toBe(200);


    const body =
        await response.json();


    console.log(body);


    expect(body.token)
        .toBeDefined();


});