import axios, {AxiosInstance} from "axios";
import {setLocalStorage} from "@/libs/localStorage";
import {authUser, user} from "@/libs/types/api/userTypes";
import {product, productsApi} from "@/libs/types/api/productTypes";
import {setCookie} from "@/libs/cookies";

class Client {
    readonly baseUrl: string
    private call: AxiosInstance;

    constructor() {
        this.baseUrl = 'https://dummyjson.com/';

        this.call = axios.create({
            baseURL: this.baseUrl,
            timeout: 1000,
            // headers: { 'Content-Type': 'application/json' },
            // headers: {'X-Custom-Header': 'foobar'}
        });
    }

    async Authenticate(username: string, password: string): Promise<authUser> {
        const response = await this.call.post('auth/login', {
                username: username,
                password: password,
                // expiresInMins: 60, // optional
            })

        const dataAuthUser: authUser = await response.data
        // setLocalStorage('token', dataAuthUser.token)
        setCookie('token', dataAuthUser.token, 1)
        return dataAuthUser
    }

    async GetProducts(page?: number, limit?: number): Promise<productsApi> {
        let params: string = ''
        if (page && limit) {
            const offset = page* limit
            params = `?limit=${limit}&skip=${offset}`
        }
        const response = await this.call.get(`products${params}`)

        return await response.data as productsApi
    }

    async GetProduct(productId: string): Promise<product> {
        const response = await this.call.get(`products/${productId}`)

        return await response.data as product
    }

    async GetUser(userId: number) : Promise<user> {
        const response = await this.call.get(`https://dummyjson.com/products/${userId}`)

        return await response.data as user
    }


}

const client = new Client()

export default client