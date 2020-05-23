<template>
    <div class="mainScreen">
        <header-main-screen @openAutorization="openAutorization"></header-main-screen>
        <filter-filter></filter-filter>
        <div class="fixed-container sorting-viewAclo">
            <sorting></sorting>
            <view-alco></view-alco>
        </div>
        <footer-container></footer-container>
        <login-login 
            class="modalLogin" 
            v-show="login" 
            @closeAutorization="closeAutorization" 
            @comInAkk="comInAkk" 
            @dataAkk="dataAkk($event)"
            @clickRegister="clickRegister"
            @recoveryLogin="recoveryLogin"
            @arrayToken="arrayToken($event)"
        ></login-login>
        <register 
            class="modalRegister"
            v-show="register"
            @closeRegister="closeRegister"
            @clickRegisterAkk="clickRegisterAkk"
            @user="userRegister($event)"
        ></register>
        <recovery 
            v-show="recovery === true"
            class="modalRecovery"
            @recoveryPass="recoveryPass"
            @closeRecoveryPass="closeRecoveryPass"
        ></recovery>
        <div class="blackout" v-show="back" @click="closeAutorization"></div>
    </div>
</template>
<script>
    import headerMainScreen from "./headerMainScreen/headerMainScreen"
    import filter from './filter/filter'
    import sorting from './sorting/sorting'
    import viewAlco from './viewAlcohol/viewAlcohol'
    import login from '../login/login'
    import register from '../register/register'
    import recovery from '../recovery/recovery'
    import footer from  './footer/footer'
    // import axios from 'axios'
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
        components: {
            'header-main-screen': headerMainScreen,
            "filter-filter": filter,
            sorting,
            'view-alco': viewAlco,
            "login-login":login,
            register,
            recovery,
            "footer-container": footer,
            
        },
        methods: {
            closeAutorization(){ // Тыкнуть на задний фон и закрыть все окна
                this.login = false;
                this.register = false;
                this.recovery = false;
                this.back = false;
            },
            openAutorization(){// открыть авторизацию
                this.login = true;
                this.back = true;
            },
            dataAkk(user){ // Присвоить объект из модального онка логин
                this.user = user;
            },
            arrayToken(token){
                this.token = token;

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
        position: absolute;
        top: 0;
        left: 0;
        background: #3F3F3F;
        opacity: 0.5;
    }
    .modalRegister{
        right: 0;
        z-index: 1000;
        position: fixed;
        margin: auto;
        top: 5%;
        left: 0;
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