<template>
    <div class="login" >
        <div class="login__modal" v-show="conclusionBackground">
            <div class="login__title">Вход</div>
            <hr class="login__hr">
            <span class="login__cross" @click="closeLogin"></span>
            <!-- Форма авторизации -->
            <div class="login__authorization">
                <div class="login__sub-title login__sub-title_akk">С помощью аккаунта</div>
                <!-- инпут с полей e-mail -->
                <input 
                    type="text" 
                    class="login__name login__input" 
                    :class="{
                        orangeBorder:focusInput, 
                        orangeBack: checkInput,
                        redBorder: nullValueInput
                    }"
                    required
                    placeholder="E-mail" 
                    @focus="focusInput = true"
                    @blur="focusInput = false, ifValuEmail()"
                    @keyup.enter="ifValuEmail()"
                    v-model='login'
                >
                <span class="login__null-error" >{{conclusionError.email !== undefined ? conclusionError.email.join('') : ''}}</span>
                <!-- инпут с полей password -->
                <input 
                    required
                    type="password" 
                    class="login__password login__input" 
                    placeholder="Пароль"
                    :class="{
                        orangeBorder:focusInputPass, 
                        orangeBack: checkInputPass,
                        redBorder: nullValueInputPass
                    }"
                    @focus="focusInputPass = true"
                    @blur="focusInputPass = false, ifValuePass()"
                    @keyup.enter="ifValuePass()"
                    v-model='password'
                >
                <span class="login__null-error" >{{conclusionError.password !== undefined ? conclusionError.password.join('') : ''}}</span>
                <span class="login__null-error" >{{conclusionError.error}}</span>
                <div class="flex-container">
                    <button class="login__button" @click="$emit('comInAkk', comInAkk())">Войти</button>
                    <div class="login__forget" @click="$emit('recoveryLogin')">Забыли пароль?</div>
                </div>
            </div>
            <!--Ccылки на соцсети -->
            <div class="login__network">
                <hr class="login__hr">
                <div class="login__sub-title">Войти через</div>
                <div class="login__vk">
                    <img src="./images/vk.svg" alt="vk" class="login__img_vk">
                    <div class="login__fiqcaption_vk">ВКонтакте</div>
                </div>
                <div class="login__google">
                    <img src="./images/google.svg" alt="google" class="login__img_google">
                    <div class="login__fiqcaption_google">Google</div>
                </div>
            </div>
            <hr class="login__hr">
            <div class="login__registration" @click="clickRegister">Ещё не зарегестрированы? Регистрация</div>
        </div>
        <div class="blackout" v-show="conclusionBackground" @click="closeLogin"></div>
    </div>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    data(){
        return {
            focusInput: false,//Оранжевый бордер
            focusInputPass: false,
            checkInput: false,// Оранжевый бекграунд
            checkInputPass: false,
            nullValueInput: false,// Красный бордер
            nullValueInputPass: false,
            login: "",
            password: "",
        }
    },
    computed: mapGetters(['conclusionLogIn', 'conclusionError', 'conclusionBackground']),
    methods: {
        ...mapMutations(['assignUserInput', 'closeWindwoAuto', 'openRegister']),
        ...mapActions(['autorization']),
        // Проверка поля email 
        ifValuEmail(){
            if(this.conclusionError.email !== undefined){
                this.nullValueInput = true;
                this.checkInput = false;
            } else {

                this.checkInput = true;
                this.nullValueInput = false;
            }
        },
        // Проверка поля password
        ifValuePass(){
            if(this.conclusionError.password !== undefined){
                this.nullValueInputPass = true;
                this.checkInputPass = false;
            } else {
                this.checkInputPass = true;
                this.nullValueInputPass = false;
            }
        },
        clickRegister(){
            this.openRegister();
            this.closeWindwoAuto();
        },
        closeLogin(){
            this.closeWindwoAuto();
        },
        async comInAkk(){// Вход в учентную запись
            let user = {
                email: this.login,
                password: this.password,
            }
            await this.autorization(user);
            this.ifValuEmail();
            this.ifValuePass();
            // Если пользователь не правильно ввел пароль или логин
            if(this.conclusionError.error !== undefined) {
                this.checkInput = false;
                this.nullValueInput = true;
                this.checkInputPass = false;
                this.nullValueInputPass = true;
            } 
            // Когда он авторизовался
            if(this.conclusionLogIn.token !== null) {
                this.login = "";
                this.password = "";
                this.checkInput = false;
                this.nullValueInput = false;
                this.checkInputPass = false;
                this.nullValueInputPass = false;
                this.closeWindwoAuto();
            }
        },
    }
}
</script>
<style lang="scss">
    // .editHeight{
    //     height: 517px !important;
    // }
    .redBorder{
        border: 1px solid #EA4335 !important;
    }
    .orangeBorder{
        border: 1px solid #F6DB68 !important;
    }
    .orangeBack{
        background: rgba(246, 219, 104, 0.5) !important;
        border: 1px solid #ACACAC !important;
    }
    .login{ // Заголовок и внешний вид авторизации по vk, google
        &__modal{
            right: 0;
            z-index: 1000;
            position: fixed;
            margin: auto;
            top: 15%;
            left: 0;
            padding: 22px 0;
            max-width: 520px;
            background-color: #FFF;
            border-radius: 30px;
        }
        &__title{
            font-family: Montserrat;
            font-weight: bold;
            font-size: 32px;
            margin: 0;
            margin-left: 35px;
            margin-bottom: 22px;
        }
        &__cross{
            position: absolute;
            background: url('./images/cross.svg') no-repeat;
            width: 23px;
            height: 23px;
            display: inline-block;
            margin: auto;
            top: 23px;
            right: 23px;

        }
        &__hr{
            border: 0.5px solid #ACACAC;
            margin: 0;
        }
        &__network{
            padding: 25px 35px 0;
        }
        &__sub-title{
            font-family: Montserrat;
            font-weight: 500;
            margin: 15px 0;
            &_akk{
                display: inline-block;
                vertical-align: middle;
                margin-right: 88px;
            }
        }
        &__vk{ 
            display: inline-block;
            vertical-align: middle;
            background: #4D75A3;
            border-radius: 50px;
            min-width: 193px;
            padding: 17px 0 17px 22px;
            margin-right: 20px;
            margin-bottom: 30px;
        }
        &__google{
            display: inline-block;
            vertical-align: middle;
            min-width: 215px;
            padding: 13px 0 13px 20px;
            border: 1px solid #2796FF;
            box-sizing: border-box;
            border-radius: 50px;
            margin-bottom: 30px;
        }
        &__fiqcaption{
            &_vk{
                display: inline-block;
                vertical-align: middle;
                font-family: Montserrat;
                font-weight: bold;
                color: #FFFFFF;
                margin-left: 11px;
            }
            &_google{
                display: inline-block;
                vertical-align: middle;
                font-family: Montserrat;
                font-weight: bold;
                color: #2796FF;
                margin-left: 10px;
            }
        }
        &__img{
            &_vk, &_google{
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
    .login{// Форма авторизации
        &__authorization{
            padding: 0 35px;
        }
        &__registration{
            text-align: center;
            font-family: Montserrat;
            font-weight: 500;
            opacity: 0.5;
            margin-top: 22px;
        }
        &__input{
            border: 1px solid #ACACAC;
            box-sizing: border-box;
            border-radius: 50px;
            padding:11px 0 11px 20px;
            font-family: Montserrat;
            font-weight: 500;
            font-size: 14px;
            width: 100%;
            margin-bottom: 20px;
            outline: none;
            &::placeholder{
                font-family: Montserrat;
                font-weight: 500;
                font-size: 14px;
                opacity: 0.5;
            }
        }
        &__button{
            font-family: Montserrat;
            font-weight: 500;
            font-size: 14px;
            background: #F6DB68;
            border-radius: 50px;
            max-width: 137px;
            width: 100%;
            border: none;
            outline: none;
            padding: 11px 0;
            display: inline-block;
            vertical-align: middle;
        }
        &__forget{
            font-family: Montserrat;
            font-weight: 500;
            opacity: 0.5;
            display: inline-block;
            vertical-align: middle;
        }
        &__null-error{
            font-family: Montserrat;
            font-size: 14px;
            color: #EA4335;
            margin-bottom: 20px;
            display: inline-block;
        }
    }
</style>