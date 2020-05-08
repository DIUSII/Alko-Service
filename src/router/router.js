import Vue from 'vue'
import Router from 'vue-router'
import mainScreen from '../components/mainScreen/mainScreen'

Vue.use(Router);

let router = new Router({
    routes:[
        {
            path:'/',
            name: 'alco-service',
            component: mainScreen
        }
    ]
});

export default router