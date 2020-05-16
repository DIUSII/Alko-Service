<template>
    <div class="recovery">
        <h2 class="recovery__title">Восстановление пароля</h2>
        <span class="recovery__cross" @click="$emit('closeRecoveryPass')"></span>
        <hr class="recovery__hr">
        <form  class="recovery__form">
            <h3 class="recovery__sub-title">Укажите свой e-mail</h3>
            <input type="text" class="recovery__input" v-model="recovery">
        </form>
        <hr class="recovery__hr">
        <button class="recovery__button" @click="$emit('recoveryPass', recoveryPass())">Отправить письмо для сброса пароля</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                recovery: "",
            }
        },
        methods: {
            recoveryPass(){
                
            }
        }
    }
</script>
<style lang="scss">
    .recovery{
        padding: 24px 0 17px;
        background: #FFFFFF;
        border-radius: 30px;
        max-width: 520px;
        width: 100%;
        &__title{
            font-family: Rubik;
            font-weight: bold;
            font-size: 32px;
            margin: 0 0 20px;
            padding: 0 0 0 35px;
        }
        &__cross{
            background: url('./cross.svg') no-repeat;
            width: 23px; 
            height: 23px;
            position: absolute;
            top: 23px;
            right: 23px;
            margin: 0;
        }
        &__form{
            padding: 16px 35px 29px;
        }
        &__hr{
            margin: 0;
            border: 0.5px solid #ACACAC;
        }
        &__sub-title{
            font-family: Montserrat;
            font-weight: 500;
            margin: 0 0 10px;
        }
        &__input{
            border: 1px solid #ACACAC;
            border-radius: 50px;
            max-width: 430px;
            width: 100%;
            outline: none;
            padding: 11px 0 11px 20px;
            font-family: Montserrat;
            font-weight: 500;
            font-size: 14px;
            color: #090909;
        }
        &__button{
            margin: 25px 35px 0;
            max-width: 450px;
            width: 100%;
            border: none;
            outline: none;
            background: #F6DB68;
            border-radius: 50px;
            padding: 11px 0;
            font-family: Montserrat;
            font-weight: 500;
            font-size: 14px;
        }
    }
</style>