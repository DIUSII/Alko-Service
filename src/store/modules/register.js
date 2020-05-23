import axios from 'axios'
export default {
    actions: {
        async registerUser(ctx, user){
            await axios
                .post('http://alco-backend.ru.host1813568.serv76.hostland.pro/public/api/register', user)
                .then(res =>(this.res = res))
                .catch(error =>{console.log(error.response)})
        }
    },
    mutations: {},
    state: {},
    getters: {}
}