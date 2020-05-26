<template>
    <div class="mainScreen">
        <header-main-screen @openAutorization="openAutorization"></header-main-screen>
        <!-- <filter-filter></filter-filter> -->
        <div class="fixed-container sorting-viewAclo">
            <sorting></sorting>
            <view-alco></view-alco>
        </div>
        <footer-container></footer-container>
        <!-- Модальное окно авторизации -->
        <login-login 
        ></login-login>
        <!-- Модальное окно регистрации -->
        <register
        ></register>
        <!-- Модальное окно восставноление пароля -->
        <recovery 
            v-show="recovery === true"
            class="modalRecovery"
            @recoveryPass="recoveryPass"
            @closeRecoveryPass="closeRecoveryPass"
        ></recovery>
        <!-- бекграунд при открытие модальных окан авто и регистрации -->
    </div>
</template>
<script>
    import headerMainScreen from "./headerMainScreen/headerMainScreen"
    //import filter from './filter/filter'
    import sorting from './sorting/sorting'
    import viewAlco from './viewAlcohol/viewAlcohol'
    import login from '../login/login'
    import register from '../register/register'
    import recovery from '../recovery/recovery'
    import footer from  './footer/footer'
    import {mapGetters, mapMutations} from 'vuex'
    export default {
        data(){
            return {
                login: false,
                register: false,
                recovery: false,
                back: false,
                user: {},
                userReg: null,
                token: null,
                testTestGet: null,
            }
        },
        computed: mapGetters(['conclusionLogIn', 'conclusionBackground']),
        components: {
            'header-main-screen': headerMainScreen,
            //"filter-filter": filter,
            sorting,
            'view-alco': viewAlco,
            "login-login":login,
            register,
            recovery,
            "footer-container": footer,
            
        },
        methods: {
            ...mapMutations(['openWindowAuto', 'closeWindwoAuto']),
            closeAutorization(){ // Тыкнуть на задний фон и закрыть все окна
                this.closeWindwoAuto();
            },
            openAutorization(){// открыть авторизацию
                this.openWindowAuto();
            },
            comInAkk(){// Проверка на валидацию  модальное окно логин
                if (this.token == undefined){
                    this.login = true;
                    this.back = true;
                } else{
                    this.login = false;
                    this.back = false;
                } 
            },
            clickRegister(){ // Открыть модальное окно регистрации
                this.register = true;
                this.login = false;
                this.back = true;
            },
            closeRegister(){// Закрыть модальное окно регистрации
                this.register = false;
                this.back = false;
            },
            clickRegisterAkk(){ // Зарегстритроваться 
                console.log(this.userReg);
                if(this.userReg === null){
                    this.register = true;
                    this.back = true;
                } else {
                    this.register = false;
                    this.back = false;
                }
            },
            recoveryLogin(){// Открыть модальное окно восстановление пароля
                this.login = false;
                this.recovery = true;
                this.back = true;
            },
            recoveryPass(){// Нажать на кнопку для отправления письма
                this.recovery = false;
                this.back = false;
            },
            closeRecoveryPass(){// Закрывает модальное окна восстановление пароля
                this.recovery = false;
                this.back = false;
            },
            userRegister(user){ // Регистрация пользователя
                this.userReg = user;
            }
        },
    }
</script>
<style lang="scss">
    .sorting-viewAclo{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .flex-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .fixed-container{
        max-width: 1500px;
        margin: 0 auto;
    }
    .modalLogin{
        right: 0;
        z-index: 1000;
        position: fixed;
        margin: auto;
        top: 15%;
        left: 0;
        // transform: translate(-50%, -50%);
    }
    .blackout{
        z-index: 800;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: #3F3F3F;
        opacity: 0.5;
    }
    .modalRecovery{
        right: 0;
        z-index: 1000;
        position: fixed;
        margin: auto;
        top: 40%;
        left: 0;
    }
</style>