<template>
    <div class="login" :class="{editHeight: errorNullInput}">
        <div class="login__title">Вход</div>
        <hr class="login__hr">
        <span class="login__cross" @click="$emit('closeAutorization')"></span>
        <!--Ccылки на соцсети -->
        <div class="login__network">
            <div class="login__sub-title">Через соцсети</div>
            <div class="login__vk">
                <img src="./images/vk.svg" alt="vk" class="login__img_vk">
                <div class="login__fiqcaption_vk">ВКонтакте</div>
            </div>
            <div class="login__google">
                <img src="./images/google.svg" alt="google" class="login__img_google">
                <div class="login__fiqcaption_google">Google</div>
            </div>
            <hr class="login__hr">
        </div>
        <!-- Форма авторизации -->
        <div class="login__authorization">
            <div class="login__sub-title login__sub-title_akk">С помощью аккаунта</div>
            <div class="login__registration" @click="$emit('clickRegister')">Зарегистрироваться</div>
            <input 
                type="text" 
                class="login__name login__input" 
                :class="{
                    orangeBorder:focusInput, 
                    orangeBack: checkInput,
                    redBorder: nullValueInput
                }"
                required
                placeholder="Логин" 
                @focus="focusInput = true"
                @blur="focusInput = false, fillInput()"
                @keyup.enter="fillInput"
                v-model='login'
            >
            <input 
                required
                type="text" 
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
            <div class="login__center">
                <span class="login__null-error" v-show="errorNullInput">Логин и/или пароль не могут быть пустыми</span>
            </div>
            <button class="login__button" @click="$emit('comInAkk', comInAkk())">Войти</button>
            <div class="login__forget">Забыли пароль?</div>
        </div>
    </div>
</template>
<script>
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
            login: "",
            password: "",
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
        },
        fillInputPass(){// Проверяет заполненость поля пароль
            if(this.password === ""){
                this.checkInputPass = false;
                this.nullValueInputPass = true;
                this.errorNullInput = true;
            } else {
                this.checkInputPass = true;
                this.nullValueInputPass = false;
                this.errorNullInput = false;
            }
        },
        comInAkk(){// Вход в учентную запись
            if(this.login === ""){
                this.nullValueInput = true;
            } 
            if(this.password === ""){
                this.nullValueInputPass = true;
            }
            let user = {
                login: this.login,
                password: this.password,
            }
            this.$emit('dataAkk', user);
            if(this.login !== "" && this.password !== ""){
                this.focusInput = this.focusInputPass = false;
                this.checkInput = this.checkInputPass = false;
                this.nullValueInput = this.nullValueInputPass = false;
                this.errorNullInput = false;
                this.login = "";
                this.password = "";
            }
        }
    }
}
</script>
<style lang="scss">
    .editHeight{
        height: 438px !important;
    }
    .redBorder{
        border: 2px solid #EA4335 !important;
    }
    .orangeBorder{
        border: 2px solid #F6DB68 !important;
    }
    .orangeBack{
        background: rgba(246, 219, 104, 0.5) !important;
        border: 1px solid #ACACAC !important;
    }
    .login{ // Заголовок и внешний вид авторизации по vk, google
        padding: 30px 0 40px;
        max-width: 520px;
        background-color: #FFF;
        border-radius: 30px;
        position: relative;
        height: 411px;
        &__title{
            font-family: Montserrat;
            font-weight: bold;
            font-size: 32px;
            margin: 0;
            margin-left: 35px;
            margin-bottom: 13px;
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
            padding: 25px 35px;
        }
        &__sub-title{
            font-family: Montserrat;
            font-weight: 500;
            margin: 0;
            margin-bottom: 13px;
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
            display: inline-block;
            vertical-align: middle;
            font-family: Montserrat;
            font-weight: 500;
            opacity: 0.5;
            margin-bottom: 13px;
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
            margin-left: 30px;
        }
        &__center{
            text-align: center;
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