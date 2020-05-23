import axios from 'axios'
export default {
    actions: {
        async autorization(ctx ,user){
            // let testTestGet = null;
            await axios
                .post('http://alco-backend.ru.host1813568.serv76.hostland.pro/public/api/login', user)
                .then( response =>{
                    this.testTestGet = response;
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error.response)
                });
            // ctx.commit('assignUserInput', testTestGet);
          }
    },
    // mutations:{
    //     assignUserInput(state, user){
    //         state.user = user;
    //     }
    // },
    state: {
        user: {
        },
        testTestGet: null,
    },
    getters: {
        conclusionUser(state){
            return state.user;
        },
    }
}