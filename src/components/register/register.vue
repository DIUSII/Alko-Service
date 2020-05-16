<template>
    <div class="register">
        <h2 class="register__title">Регистрация</h2>
        <hr class="register__hr">
        <span class="register__cross" @click="$emit('closeRegister')"></span>
        <form class="register__form">
            <label >
                <p class="register__text">Ваше имя*</p>
                <input 
                    type="text" 
                    class="register__input" 
                    :class="{redBorder: checkRedBorder, orangeBorder: checkOrangeBorder, orangeBack: checkOrangeBack}"
                    @focus="checkRedBorder = false, nullValueInput = false, lengthValue = false, checkOrangeBorder = true, checkOrangeBack = false"
                    @blur="validationName(), checkOrangeBorder = false"
                    @keyup.enter="validationName(), checkOrangeBorder = false"
                    v-model="name"
                >
            </label>
            <span class="register__length-error" v-show="nullValueInput === true">Поле обязательно для заполнения.</span>
            <span class="register__length-error" v-show="lengthValue === true">Имя должно содержать от 1 до 25 символов.</span>
            <label >
                <p class="register__text">E-mail*</p>
                <input 
                    type="text" 
                    class="register__input" 
                    v-model="email"
                    @focus="checkRedBorderEmail = false, nullValueInputEmail = false, validationEmailInput = false, checkOrangeBorderEmail = true, checkOrangeBackEmail = false"
                    @blur="validationEmail(), checkOrangeBorderEmail = false"
                    @keyup.enter="validationEmail(), checkOrangeBorderEmail = false"
                    :class="{redBorder: checkRedBorderEmail, orangeBorder: checkOrangeBorderEmail, orangeBack: checkOrangeBackEmail}"
                >
            </label>
            <span class="register__length-error" v-show="nullValueInputEmail === true">Поле обязательно для заполнения.</span>
            <span class="register__length-error" v-show="validationEmailInput === true">
                Пожалуйста, введите действительный e-mail.<br>
                Например, bla-bla-bla@domain.com
            </span>
            <label >
                <p class="register__text">Пароль*</p>
                <input 
                    type="password" 
                    class="register__input" 
                    @focus="checkRedBorderPassword = false, nullValueInputPassword = false, lengthValuePassword = false, checkOrangeBorderPass = true, checkOrangeBackPass = false"
                    v-model='password'
                    @blur="validationPass(), checkOrangeBorderPass = false"
                    @keyup.enter="validationPass(), checkOrangeBorderPass = false"
                    :class="{redBorder: checkRedBorderPassword, orangeBorder: checkOrangeBorderPass, orangeBack: checkOrangeBackPass}"
                >
            </label>
            <span class="register__length-error" v-show="nullValueInputPassword === true">Поле обязательно для заполнения.</span>
            <span class="register__length-error" v-show="lengthValuePassword === true">Пароль должен содержать от 6 до 25 символов</span>
            <label >
                <p class="register__text">Повторите пароль*</p>
                <input 
                    type="password" 
                    class="register__input" 
                    @focus="
                        checkRedBorderRepeatPass = false, 
                        nullValueInputRepeatPass = false, 
                        repeatPassNoEquallyPass = false, 
                        checkOrangeBorderRepeatPass = true,
                        checkOrangeBackRepeatPass = false
                    "
                    @blur="validationRepeatPass(), checkOrangeBorderRepeatPass = false"
                    @keyup.enter="validationRepeatPass(), checkOrangeBorderRepeatPass = false"
                    v-model="repeatPass"
                    :class="{redBorder: checkRedBorderRepeatPass , orangeBorder: checkOrangeBorderRepeatPass, orangeBack: checkOrangeBackRepeatPass}"
                >
            </label>
            <span class="register__length-error" v-show="nullValueInputRepeatPass === true">Поле обязательно для заполнения.</span>
            <span class="register__length-error" v-show="repeatPassNoEquallyPass === true">Введенные пароли не совпадают.</span>
            <button class="register__button" @click="$emit('clickRegisterAkk',  clickRegisterAkk())">Зарегистрироваться</button>
        </form>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                name: "",
                email: "",
                password: "",
                repeatPass: "",
                checkRedBorder: false,
                checkRedBorderEmail: false,
                checkRedBorderPassword: false,
                checkRedBorderRepeatPass: false,
                nullValueInput: false,
                nullValueInputEmail: false,
                nullValueInputPassword: false,
                nullValueInputRepeatPass: false,
                lengthValue: false,
                validationEmailInput: false,
                lengthValuePassword: false,
                repeatPassNoEquallyPass: false,
                GoodValidationName: false,
                GoodValidationEmail: false,
                GoodValidationPass: false,
                GoodValidationRepeatPass: false,
                checkOrangeBorder: false,
                checkOrangeBorderEmail: false,
                checkOrangeBorderPass: false,
                checkOrangeBorderRepeatPass: false,
                checkOrangeBack: false,
                checkOrangeBackEmail: false,
                checkOrangeBackPass: false,
                checkOrangeBackRepeatPass: false
            }
        },
        methods: {
            validationName(){
                if(this.name === ""){ // Валидация имени
                    this.checkRedBorder = true;
                    this.nullValueInput = true;
                    this.lengthValue = false
                } else if (this.name.length < 1 || this.name.length > 26){
                    this.checkRedBorder = true;
                    this.nullValueInput = false;
                    this.lengthValue = true;
                } else {
                    this.checkRedBorder = false;
                    this.nullValueInput = false;
                    this.lengthValue = false;
                    this.GoodValidationName = true;
                    this.checkOrangeBack = true;
                }
            },
            validationEmail(){
                if(this.email === ""){ // Валидаци емайла
                    this.checkRedBorderEmail = true;
                    this.nullValueInputEmail = true;
                    this.validationEmailInput = false;
                } else if(this.email.indexOf("@") === -1){
                    this.checkRedBorderEmail = true;
                    this.nullValueInputEmail = false;
                    this.validationEmailInput = true;
                } else {
                    this.checkRedBorderEmail = false;
                    this.nullValueInputEmail = false;
                    this.validationEmailInput = false;
                    this.GoodValidationEmail = true;
                    this.checkOrangeBackEmail = true;
                }
            },
            validationPass(){
                if(this.password === ""){ // валидация на пароле
                    this.checkRedBorderPassword = true;
                    this.nullValueInputPassword = true;
                    this.lengthValuePassword = false;
                } else if (this.password.length < 6|| this.password.length > 26) {
                    this.checkRedBorderPassword = true;
                    this.nullValueInputPassword = false;
                    this.lengthValuePassword = true;
                } else {
                    this.checkRedBorderPassword = false;
                    this.nullValueInputPassword = false;
                    this.lengthValuePassword = false;
                    this.GoodValidationPass = true;
                    this.checkOrangeBackPass = true;
                }
            },
            validationRepeatPass(){
                if (this.repeatPass === ""){ // Валидация поля повторите пароль
                    this.checkRedBorderRepeatPass = true;
                    this.nullValueInputRepeatPass = true;
                    this.repeatPassNoEquallyPass = false;
                } else if(this.repeatPass !== this.password) {
                    this.checkRedBorderRepeatPass = true;
                    this.nullValueInputRepeatPass = false;
                    this.repeatPassNoEquallyPass = true;
                } else {
                    this.repeatPassNoEquallyPass = false;
                    this.checkRedBorderRepeatPass = false;
                    this.nullValueInputRepeatPass = false;
                    this.GoodValidationRepeatPass = true;
                    this.checkOrangeBackRepeatPass = true;
                }
            },
            clickRegisterAkk(){
                if(this.name === ""){ // Валидация имени
                    this.checkRedBorder = true;
                    this.nullValueInput = true;
                    this.lengthValue = false
                } else if (this.name.length < 1 || this.name.length > 26){
                    this.checkRedBorder = true;
                    this.nullValueInput = false;
                    this.lengthValue = true;
                } else {
                    this.checkRedBorder = false;
                    this.nullValueInput = false;
                    this.lengthValue = false;
                    this.GoodValidationName = true;
                    this.checkOrangeBack = true;
                }
                if(this.email === ""){ // Валидаци емайла
                    this.checkRedBorderEmail = true;
                    this.nullValueInputEmail = true;
                    this.validationEmailInput = false;
                } else if(this.email.indexOf("@") === -1){
                    this.checkRedBorderEmail = true;
                    this.nullValueInputEmail = false;
                    this.validationEmailInput = true;
                } else {
                    this.checkRedBorderEmail = false;
                    this.nullValueInputEmail = false;
                    this.validationEmailInput = false;
                    this.GoodValidationEmail = true;
                    this.checkOrangeBackEmail = true;
                }
                if(this.password === ""){ // валидация на пароле
                    this.checkRedBorderPassword = true;
                    this.nullValueInputPassword = true;
                    this.lengthValuePassword = false;
                } else if (this.password.length < 6|| this.password.length > 26) {
                    this.checkRedBorderPassword = true;
                    this.nullValueInputPassword = false;
                    this.lengthValuePassword = true;
                } else {
                    this.checkRedBorderPassword = false;
                    this.nullValueInputPassword = false;
                    this.lengthValuePassword = false;
                    this.GoodValidationPass = true;
                    this.checkOrangeBackPass = true;
                }
                if (this.repeatPass === ""){ // Валидация поля повторите пароль
                    this.checkRedBorderRepeatPass = true;
                    this.nullValueInputRepeatPass = true;
                    this.repeatPassNoEquallyPass = false;
                } else if(this.repeatPass !== this.password) {
                    this.checkRedBorderRepeatPass = true;
                    this.nullValueInputRepeatPass = false;
                    this.repeatPassNoEquallyPass = true;
                } else {
                    this.repeatPassNoEquallyPass = false;
                    this.checkRedBorderRepeatPass = false;
                    this.nullValueInputRepeatPass = false;
                    this.GoodValidationRepeatPass = true;
                    this.checkOrangeBackRepeatPass = true;
                }
                let user = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    repeatPass: this.repeatPass,
                };
                console.log(this.GoodValidationName);
                console.log(this.GoodValidationEmail);
                console.log(this.GoodValidationPass);
                console.log(this.GoodValidationRepeatPass);
                if(this.GoodValidationName === true && this.GoodValidationEmail === true && this.GoodValidationPass === true && this.GoodValidationRepeatPass === true){
                    this.$emit('user', user);
                    this.name = "";
                    this.email = "";
                    this.password = "";
                    this.repeatPass = "";
                    this.GoodValidationName = false;
                    this.GoodValidatioEmail = false;
                    this.GoodValidationPass = false;
                    this.GoodValidationRepeatPass = false;
                    this.checkOrangeBack = false;
                    this.checkOrangeBackEmail = false;
                    this.checkOrangeBackPass = false;
                    this.checkOrangeBackRepeatPass = false;
                } else {
                    this.$emit('user', null);
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
        background: rgba(246, 219, 104, 0.5) !important;
        border: 1px solid #ACACAC !important;
    }
    .register{//Стили для формы регистрации
        max-width: 520px;
        background: #FFFFFF;
        border-radius: 30px;
        padding: 30px 0 40px;
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
            display: inline-block;
            max-width: 420px;
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