<template>
    <div class="mainScreen">
        <header-main-screen @openAutorization="openAutorization"></header-main-screen>
        <filter-filter></filter-filter>
        <div class="fixed-container sorting-viewAclo">
            <sorting></sorting>
            <view-alco></view-alco>
        </div>
        <login-login 
            class="modalLogin" 
            v-show="login" 
            @closeAutorization="closeAutorization" 
            @comInAkk="comInAkk" 
            @dataAkk="dataAkk($event)"
            @clickRegister="clickRegister"
            @recoveryLogin="recoveryLogin"
        ></login-login>
        <register 
            class="modalRegister"
            v-show="register"
            @closeRegister="closeRegister"
            @clickRegisterAkk="clickRegisterAkk"
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
    export default {
        data(){
            return {
                login: false,
                register: false,
                recovery: false,
                back: false,
                user: {},
            }
        },
        methods: {
            closeAutorization(){
                this.login = false;
                this.back = false;
            },
            openAutorization(){
                this.login = true;
                this.back = true;
            },
            dataAkk(user){
                this.user = user;
            },
            comInAkk(){
                // console.log(user);
                if(this.user.password === "" || this.user.login === ""){
                    this.login = true;
                    this.back = true;
                } else if(this.user.password === "123" && this.user.login === "123"){
                    this.login = false;
                    this.back = false;
                } 
            },
            clickRegister(){
                this.register = true;
                this.login = false;
                this.back = true;
            },
            closeRegister(){
                this.register = false;
                this.back = false;
            },
            clickRegisterAkk(){
                this.register = false;
                this.back = false;
            },
            recoveryLogin(){
                this.login = false;
                this.recovery = true;
                this.back = true;
            },
            recoveryPass(){
                this.recovery = false;
                this.back = false;
            },
            closeRecoveryPass(){
                this.recovery = false;
                this.back = false;
            }
        },
        components: {
            'header-main-screen': headerMainScreen,
            "filter-filter": filter,
            sorting,
            'view-alco': viewAlco,
            "login-login":login,
            register,
            recovery
            
        }
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
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1000;
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