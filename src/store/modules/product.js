import axios from 'axios'
export default {
    state: {
        products: null
    },
    actions: {
        GET_PRODUCTS({commit}){
            return new Promise((resolve, reject) => {
                axios(`http://alco-backend.ru.host1813568.serv76.hostland.pro/public/api/drinks`,{
                    method: 'GET'
                })
                .then((resp) => {
                   commit('SET_PRODUCTS', resp.data)
                   resolve()
                })
                .catch((error) => {
                    reject(error)
                })
            })
        }
    },
    mutations:{
        SET_PRODUCTS(state, products){
            products.forEach(element => {
                element.ethanol = element.ethanol * 100
            });
            state.products = products
        }
    },
    getters: {
        PRODUCTS(state){
            return state.products
        }
    }
}