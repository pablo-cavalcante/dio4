import axios from 'axios';

export default class ServidorService {
    private static api = axios.create({
        baseURL: 'http://127.0.0.1:3000'
    });

    static async sendPost(routeString: string, data: any){
        const response = await this.api.post(routeString, data);
        return response;
    }
};