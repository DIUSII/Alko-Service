<template>
    <div class="register">
        <h2 class="register__title">Регистрация</h2>
        <hr class="register__hr">
        <span class="register__cross" @click="$emit('closeRegister')"></span>
        <form class="register__form">
            <label >
                <p class="register__text">Введите ваш логин</p>
                <input type="text" class="register__input" placeholder="Логин">
            </label>
            <label >
                <p class="register__text">Придумайте пароль <span class="register__span">(не короче шести символов)</span></p>
                <input type="text" class="register__input" placeholder="Пароль">
            </label>
            <label >
                <p class="register__text">Повторите пароль</p>
                <input type="text" class="register__input" placeholder="Повторите пароль">
            </label>
            <label >
                <p class="register__text">Ваше имя</p>
                <input type="text" class="register__input" placeholder="Имя">
            </label>
            <button class="register__button" @click="$emit('clickRegisterAkk')">Зарегистрироваться</button>
        </form>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="scss">
    .register{
        max-width: 520px;
        background: #FFFFFF;
        border-radius: 30px;
        padding: 30px 0 40px;
        height: 550px;
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
        &__span{
            font-weight: 400;
            font-size: 15px;
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
</style>