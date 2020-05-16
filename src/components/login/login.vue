<template>
    <div class="login">
        <div class="login__title">Вход</div>
        <hr class="login__hr">
        <span class="login__cross" @click="$emit('closeAutorization')"></span>
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
                @blur="focusInput = false, fillInput()"
                @keyup.enter="fillInput"
                v-model='login'
            >
            <span class="login__null-error" v-show="errorNullInput">Поле обязательно для заполнения.</span>
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
                @blur="focusInputPass = false, fillInputPass()"
                @keyup.enter="fillInputPass"
                v-model='password'
            >
            <span class="login__null-error" v-show="errorNullInputPass">Поле обязательно для заполнения.</span>
            <span class="login__null-error" v-show="errorNotRightInput">Неверно введен e-mail и/или пароль</span>
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
        <div class="login__registration" @click="$emit('clickRegister')">Ещё не зарегестрированы? Регистрация</div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            focusInput: false,
            focusInputPass: false,
            checkInput: false,
            checkInputPass: false,
            nullValueInput: false,
            nullValueInputPass: false,
            errorNullInput: false,
            errorNullInputPass: false,
            errorNotRightInput: false,
            login: "",
            password: "",
            userTest: {},
            testTestGet: {},
            info: null
        }
    },
    methods: {
        
        fillInput(){//Проверяет заполненость input логин
            if(this.login === ""){
                this.checkInput = false;
                this.nullValueInput = true;
                this.errorNullInput = true;
            } else {
                this.checkInput = true;
                this.nullValueInput = false;
                this.errorNullInput = false;
            }
            this.errorNotRightInput = false;
        },
        fillInputPass(){// Проверяет заполненость поля пароль
            if(this.password === ""){
                this.checkInputPass = false;
                this.nullValueInputPass = true;
                this.errorNullInputPass = true;
            } else {
                this.checkInputPass = true;
                this.nullValueInputPass = false;
                this.errorNullInputPass = false;
            }
            this.errorNotRightInput = false;
        },
        async comInAkk(){// Вход в учентную запись
            this.userTest = {
                email: "Userfortest@mail.ru",
                "password":"Userfortest"
            }; 
            await axios
                .post('http://alco-backend.ru.host1813568.serv76.hostland.pro/public/api/login', this.userTest)
                .then( response =>{
                    this.testTestGet =  response;
                })
                .catch(function (error) {
                    console.log(error.response)
                });
            console.log(this.testTestGet);
            if(this.login === ""){
                this.nullValueInput = true;
                this.errorNullInput = true;
            } 
            if(this.password === ""){
                this.nullValueInputPass = true;
                 this.errorNullInputPass = true;
            }
            let user = {
                login: this.login,
                password: this.password,
            }
            this.$emit('dataAkk', user);
            if(this.login == 123 && this.password == 123){ //Если логин и пароль правильный
                this.focusInput = this.focusInputPass = false;
                this.checkInput = this.checkInputPass = false;
                this.nullValueInput = this.nullValueInputPass = false;
                this.errorNullInput = this.errorNullInputPass = false;
                this.login = "";
                this.password = "";

            } else if(this.login === "" && this.password === ""){ // Если Пароль и Логин пустые
                this.errorNotRightInput = false;
                this.nullValueInput = this.nullValueInputPass = true;
                this.focusInput = this.focusInputPass = false;
                this.checkInput = this.checkInputPass = false;
                this.errorNullInput = this.errorNullInputPass = true;

            } else if(this.login === "" && this.password !== ""){ // Если Логин пустой
                this.errorNotRightInput = false;
                this.nullValueInput = true;
                this.focusInput = this.focusInputPass = false;
                this.checkInput = this.checkInputPass = false;
                this.errorNullInput = true;

            } else if(this.login !== "" && this.password === ""){ // Если пароль пустой
                this.errorNotRightInput = false;
                this.nullValueInputPass = true;
                this.focusInput = this.focusInputPass = false;
                this.checkInput = this.checkInputPass = false;
                this.errorNullInputPass = true;

            } else if(this.login != 123 || this.password != 123){ // Если логин и пароль не совпадают
                this.errorNotRightInput = true;
                this.nullValueInput = this.nullValueInputPass = true;
                this.focusInput = this.focusInputPass = false;
                this.checkInput = this.checkInputPass = false;
                this.errorNullInput = this.errorNullInputPass = false;
            }
        }
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
        padding: 22px 0;
        max-width: 520px;
        background-color: #FFF;
        border-radius: 30px;
        position: relative;
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