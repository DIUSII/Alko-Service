import axios from 'axios'
export default {
    actions: {
        // Отсылает запрос к беку 
        async autorization(ctx, user){
            await axios
                .post('http://alco-backend.ru.host1813568.serv76.hostland.pro/public/api/login', user)
                .then( response =>{
                    ctx.commit('assignDataLogin', response)
                    console.log(response)
                })
                .catch(
                    function (error) {
                        ctx.commit('assignError', error.response)
                        console.log(error.response)
                    }
                );
          }
    },
    mutations:{
        // Получает данные от бека если авторизовался
        assignDataLogin(state, dataLogin){
            state.logIn = dataLogin;
        },
        // Инормация об ошибках
        assignError(state, error) {
            state.error = error
        }
    },
    state: {
        logIn: {
            data: {
                token: null,
                user: {
                    name: {

                    }
                }
            }
        },
        error: {data: {}},
        testTestGet: null,
    },
    getters: {
        // Выывод если пользователь авторизовался
        conclusionLogIn(state){
            if(state.logIn.data.user.name === ""){
                state.logIn.data.user.name = "user";
            }
            return state.logIn.data
        },
        // Вывод ошибок
        conclusionError(state){
            return state.error.data
        }
    }
}