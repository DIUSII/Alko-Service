<template>
    <div class="register" >
        <div class="register__modal" v-show="conclusionWindowRegister">
            <h2 class="register__title">Регистрация</h2>
            <hr class="register__hr">
            <span class="register__cross" @click="closeRegisterModal"></span>
            <form class="register__form">
                <label class="register__label">
                    <p class="register__text">Ваше имя*</p>
                    <!-- Инпут Имя -->
                    <input 
                        type="text" 
                        class="register__input" 
                        :class="{redBorder: checkRedBorder, orangeBorder: checkOrangeBorder, orangeBack: checkOrangeBack}"
                        @focus="checkOrangeBorder = true, checkOrangeBack = false"
                        @blur="validationName(), checkOrangeBorder = false"
                        @keyup.enter="validationName(), checkOrangeBorder = false"
                        v-model="name"
                    >
                </label>
                <span class="register__length-error">{{conclusionRegisterError.name !== undefined ? conclusionRegisterError.name.join(''): ""}}</span>
                <!-- <span class="register__length-error" v-show="lengthValue === true">Имя должно содержать от 1 до 25 символов.</span> -->
                <label class="register__label">
                    <p class="register__text">E-mail*</p>
                    <!-- Инпут еmail -->
                    <input 
                        type="text" 
                        class="register__input" 
                        v-model="email"
                        @focus="checkOrangeBorderEmail = true, checkOrangeBackEmail = false"
                        @blur="validationEmail(), checkOrangeBorderEmail = false"
                        @keyup.enter="validationEmail(), checkOrangeBorderEmail = false"
                        :class="{redBorder: checkRedBorderEmail, orangeBorder: checkOrangeBorderEmail, orangeBack: checkOrangeBackEmail}"
                    >
                </label>
                <span class="register__length-error" >{{conclusionRegisterError.email !== undefined ? conclusionRegisterError.email.join(''): ""}}</span>
                <!-- <span class="register__length-error" v-show="validationEmailInput === true">
                    Пожалуйста, введите действительный e-mail.<br>
                    Например, bla-bla-bla@domain.com
                </span> -->
                <label class="register__label">
                    <p class="register__text">Пароль*</p>
                    <!-- Инпут пароль -->
                    <input 
                        type="password" 
                        class="register__input" 
                        @focus="checkOrangeBorderPass = true, checkOrangeBackPass = false"
                        v-model='password'
                        @blur="validationPass(), checkOrangeBorderPass = false"
                        @keyup.enter="validationPass(), checkOrangeBorderPass = false"
                        :class="{redBorder: checkRedBorderPassword, orangeBorder: checkOrangeBorderPass, orangeBack: checkOrangeBackPass}"
                    >
                </label>
                <span class="register__length-error">{{conclusionRegisterError.password !== undefined ? conclusionRegisterError.password.join(''): ""}}</span>
                <!-- <span class="register__length-error" v-show="lengthValuePassword === true">Пароль должен содержать от 6 до 25 символов</span> -->
                <label class="register__label">
                    <p class="register__text">Повторите пароль*</p>
                    <!-- Инпут повтора пароля -->
                    <input 
                        type="password" 
                        class="register__input" 
                        @focus="
                            checkOrangeBorderRepeatPass = true,
                            checkOrangeBackRepeatPass = false
                        "
                        @blur="validationRepeatPass(), checkOrangeBorderRepeatPass = false"
                        @keyup.enter="validationRepeatPass(), checkOrangeBorderRepeatPass = false"
                        v-model="repeatPass"
                        :class="{
                            redBorder: checkRedBorderRepeatPass ,
                            orangeBorder: checkOrangeBorderRepeatPass,
                            orangeBack: checkOrangeBackRepeatPass
                        }"
                    >
                </label>
                <span class="register__length-error">
                    {{conclusionRegisterError.password !== undefined ? conclusionRegisterError.password.join(''): ""}}
                </span>
                <button class="register__button" @click="clickRegisterAkk">Зарегистрироваться</button>
            </form>
        </div>
        <div class="blackout" v-show="conclusionWindowRegister" @click="closeRegisterModal"></div>
    </div>
</template>
<script>
    import {mapActions, mapGetters, mapMutationsy} from 'vuex'
    export default {
        data(){
            return {
                name: "",
                email: "",
                password: "",
                repeatPass: "",
                showWindowRegister: false,
                checkRedBorder: false,
                checkRedBorderEmail: false,
                checkRedBorderPassword: false,
                checkRedBorderRepeatPass: false,
                checkOrangeBorder: false,
                checkOrangeBorderEmail: false,
                checkOrangeBorderPass: false,
                checkOrangeBorderRepeatPass: false,
                checkOrangeBack: false,
                checkOrangeBackEmail: false,
                checkOrangeBackPass: false,
                checkOrangeBackRepeatPass: false,
            }
        },
        computed: mapGetters(['conclusionRegisterError', 'conclusionRegisterUser', 'conclusionWindowRegister']),
        methods: {
            ...mapActions(['registerUser']),
            ...mapMutations(['closeRegister']),
            validationName(){
                if(this.conclusionRegisterError.name !== undefined){
                    this.checkRedBorder = true;
                    this.checkOrangeBack = false;
                } else {
                    this.checkOrangeBack = true;
                    this.checkRedBorder = false;
                }
            },
            validationEmail(){
                if(this.conclusionRegisterError.email !== undefined){
                    this.checkRedBorderEmail = true;
                    this.checkOrangeBackEmail = false;
                } else {
                    this.checkOrangeBackEmail = true;
                    this.checkRedBorderEmail = false;
                }
            },
            validationPass(){
                if(this.conclusionRegisterError.password !== undefined){
                    this.checkRedBorderPassword = true;
                    this.checkOrangeBackPass = false;
                } else {
                    this.checkOrangeBackPass = true;
                    this.checkRedBorderPassword = false;
                }
            },
            validationRepeatPass(){
                if(this.conclusionRegisterError.password !== undefined){
                    this.checkRedBorderRepeatPass = true;
                    this.checkOrangeBackRepeatPass = false;
                } else {
                    this.checkOrangeBackRepeatPass = true;
                    this.checkRedBorderRepeatPass = false;
                }
            },
            closeRegisterModal(){
                this.closeRegister();
            },
            async clickRegisterAkk(){
                let asdf = {
                    email: this.email,
                    name: this.name,
                    password: this.password,
                    password_confirmation: this.repeatPass
                };
                await this.registerUser(asdf);
                this.validationName();
                this.validationEmail();
                this.validationPass();
                this.validationRepeatPass();
                if(this.conclusionRegisterUser.statusText === "Created"){
                    this.name = "";
                    this.email = "";
                    this.password = "";
                    this.repeatPass = "";
                    this.checkOrangeBack = false;
                    this.checkOrangeBackEmail = false;
                    this.checkOrangeBackPass = false;
                    this.showWindowRegister = false;
                    this.closeRegister();
                } 
                
            }
        }
    }
</script>
<style lang="scss">
    .editHeightRegister{
        height: 438px !important;
    }
    .redBorder{
        border: 1px solid #EA4335 !important;
    }
    .orangeBorder{
        border: 1px solid #F6DB68 !important;
    }
    .orangeBack{
        background: rgba(110, 108, 97, 0.5) !important;
        border: 1px solid #ACACAC !important;
    }
    .register{//Стили для формы регистрации
        &__modal{ 
           max-width: 520px;
            background: #FFFFFF;
            border-radius: 30px;
            padding: 30px 0 40px;
            right: 0;
            z-index: 1000;
            position: fixed;
            margin: auto;
            top: 5%;
            left: 0;
        }
        &__label{
            display: block;
            margin: 0;
            box-sizing: none;
        }
        &__title{
            font-family: Montserrat;
            font-weight: bold;
            font-size: 32px;
            margin: 0 0 14px 40px;
        }
        &__hr{
            border: 0.5px solid #ACACAC;
            margin: 0;
        }
        &__form{
            padding: 0 40px;
        }
        &__input{
            border: 1px solid #ACACAC;
            border-radius: 50px;
            font-family: Montserrat;
            font-weight: 500;
            font-size: 14px;
            display: block;
            width: 100%;
            padding: 11px 0 11px 20px;
            outline: none;
            &::placeholder{
                font-family: Montserrat;
                font-weight: 500;
                font-size: 14px;
                opacity: 0.5;
            }
        }
        &__text{
            font-family: Montserrat;
            font-weight: 500;
            margin: 0;
            padding: 30px 0 13px;

        }
        &__button{
            background: #F6DB68;
            border-radius: 50px;
            border: none;
            outline: none;
            max-width: 205px;
            width: 100%;
            font-family: Montserrat;
            font-weight: 500;
            font-size: 14px;
            padding: 11px;
            margin-top: 40px;
        }
        &__cross{
            background: url('./cross.svg') no-repeat;
            width: 23px; 
            height: 23px;
            position: absolute;
            margin: auto;
            top: 23px;
            right: 23px;
            cursor: pointer;
        }
    }
    .register{
        &__length-error{
            font-family: Montserrat;
            font-size: 14px;
            color: #EA4335;
            margin-top: 12px;
            display: block;
        }
    }
</style>