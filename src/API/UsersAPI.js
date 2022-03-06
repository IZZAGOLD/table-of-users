import axios from "axios";

export default class UsersAPI {
    static async getAll() {
        const response = await axios.get('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users')
        return response;
    }
}