import axios from 'axios'
export default {
    actions: {
        // Высалаю массив user к беку
        async registerUser(ctx, user){
            await axios
                .post('http://alco-backend.ru.host1813568.serv76.hostland.pro/public/api/register', user)
                .then(res =>(this.res = res))
                .catch(error =>{console.log(error.response)})
        }
    },
    mutations: {
        // Открывает модальное окно регистрации
        openRegister(state){
            state.windwoReginster = true;
        },
        // закрывает модальное окно регистрации
        closeRegister(state){
            state.windwoReginster = false;
        }
    },
    state: {
        windwoReginster: false,
    },
    getters: {
        // вывод перемернно windwoReginster
        conclusionWindowRegister(state){
            return state.windwoReginster;
        }
    }
}