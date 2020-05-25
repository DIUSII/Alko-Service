import axios from 'axios'
export default {
    actions: {
        // Высалаю массив user к беку
        async registerUser(ctx, user){
            await axios
                .post('http://alco-backend.ru.host1813568.serv76.hostland.pro/public/api/register', user)
                .then(res =>(
                    ctx.commit('assignRegisterUser', res),
                    console.log(res)
                    ))
                .catch(error =>{
                    ctx.commit('assignErrorArray', error.response),
                    console.log(error.response)
                })
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
        },
        // Если все ок при регистрации
        assignRegisterUser(state, user){
            state.registerUser = user 
        },
        // Массив ошибок от бека
        assignErrorArray(state, error){
            state.registerError = error
        },
        
    },
    state: {
        registerUser: {statusText: null},
        registerError: {data: {}},
        windwoReginster: false,
    },
    getters: {
        // вывод перемернно массив ошибок
        conclusionRegisterError(state){
           return state.registerError.data;
        },
        // вывод перемернно windwoReginster
        conclusionWindowRegister(state){
            return state.windwoReginster;
        },
        // Вывод если регистрация прошла успешна
        conclusionRegisterUser(state){
            return state.registerUser;
        }
    }
}