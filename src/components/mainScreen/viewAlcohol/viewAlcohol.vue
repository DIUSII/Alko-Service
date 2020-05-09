<template>
    <div class="viewAlco">
        <h2 class="viewAlco__title">
            Выбирают сейчас
        </h2>
        <ul class="viewAlco__items">
            <li class="viewAlco__item" v-for="item in array" :key='item.id'>
                <img src="./images/wine.png" alt="wine">
                <span class="viewAlco__img"></span>
            </li>
        </ul>
        <h2 class="viewAlco__title">
            Лучшая цена
        </h2>
        <ul class="viewAlco__items">
            <li class="viewAlco__item" v-for="item in array" :key='item.id'>
                <img src="./images/wine.png" alt="wine">
                <span class="viewAlco__img"></span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                array: [
                    {},
                    {},
                    {},
                    {},
                ]
            }
        }
    }
</script>
<style lang="scss">
    .viewAlco{
        &__title{
            font-family: Montserrat;
            font-weight: 500;
            font-size: 24px;
            margin-top: 0;
            margin-bottom: 14px;
        }
        &__items{
            margin: 0;
            padding:0;
            list-style: none;
            margin-bottom: 39px;
        }
        &__item{
            display: inline-block;
            vertical-align: middle;
            margin-right: 15px;
            position: relative;
            &:nth-last-child(){
                margin-right: 0px;
            }
        }
        &__img{
            background: url('./images/white-heart.svg') no-repeat;
            width: 23px;
            height: 22px;
            display: inline-block;
            position: absolute;
            margin: auto;
            top: 21px;
            right: 31px;
        }
    }
</style>