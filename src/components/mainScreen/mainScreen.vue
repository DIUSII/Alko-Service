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
        ></login-login>
        <register 
            class="modalRegister"
            v-show="register"
            @closeRegister="closeRegister"
            @clickRegisterAkk="clickRegisterAkk"
        ></register>
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
    export default {
        data(){
            return {
                login: false,
                register: false,
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
                } else {
                    this.login = false;
                    this.back = true;
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
            }
        },
        components: {
            'header-main-screen': headerMainScreen,
            "filter-filter": filter,
            sorting,
            'view-alco': viewAlco,
            "login-login":login,
            register,
            
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
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1000;
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
</style>