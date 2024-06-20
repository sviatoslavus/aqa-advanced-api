const axios = require("axios");

class BaseController {
    constructor() {
        this._axiosConfig = {
            baseURL: 'https://qauto.forstudy.space/api',
            validateStatus: () => true,
        }
        this._axios = axios.create(this._axiosConfig)
    }

    async login() {
        const authResp = await this._axios.post('/auth/signin', {
            email: 'sviat@gmail.com', ///
            password: 'Klamozxc123', //Klamozxc123
            remember: false,
        })
        console.log(authResp.headers['set-cookie'])
        const sid = authResp.headers['set-cookie'][0].split(';')[0]
        this._axiosConfig.headers = { Cookie: sid }
    }
    async logout(){
        await this.get('/auth/logout')
    }

    async get(url) {
        return this._axios.get(url, this._axiosConfig)
    }

    async post(url, body) {
        return this._axios.post(url, body, this._axiosConfig)
    }

    async delete(url, body) {
        return this._axios.delete(url, {
            ...this._axiosConfig,
            ...{ data: body },
        })
    }
}

module.exports.BaseController = BaseController