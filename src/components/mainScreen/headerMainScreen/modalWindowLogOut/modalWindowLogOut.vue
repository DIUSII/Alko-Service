<template>
    <div class="logout">
        <span class="logout__name">{{conclusionLogIn.user.name !== undefined ?  conclusionLogIn.user.name : 'User'}}</span>
        <hr class="logout__hr">
        <button class="logout__exit" @click="exitoOfAcc">Выйти</button>
    </div>
</template>
<script>
 import {mapMutations,mapGetters} from 'vuex'
    export default {
        computed: mapGetters(['conclusionLogIn']),
        methods: {
            ...mapMutations(['closeWindwoLogout']),
            exitoOfAcc(){
                this.closeWindwoLogout();
            }
        }
    }
</script>
<style lang="scss">
    .logout{
        position: absolute;
        background: #FFFFFF;
        border: none;
        margin: auto;
        top: 0;
        right: 0;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
        border-radius: 18px;
        text-align: center;
        max-width: 227px;
        width: 100%;
        &__name{
            font-family: Rubik;
            font-size: 22px;
            line-height: 26px;
            color: #000000;
            margin: 16px 0;
            display: block;
        }
        &__hr{
            border: 0.5px solid #ACACAC;
            margin: 0;
        }
        &__exit{
            font-family: Rubik;
            font-weight: 300;
            font-size: 20px;
            line-height: 24px;
            color: #45988E;
            border: none;
            margin: 10px 0;
            background-color: transparent;
            outline: none;
        }
    }
</style>
