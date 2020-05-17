<template>
    <div class="nav-bar">
        <div class="nav-bar__container flex-container">
            <!-- Правая сторона хедера -->
            <div class="nav-bar__logo-main-shop flex-container">
                <div class="nav-bar__logo">
                    <img src="./images/logo.svg" alt="logo" class="nav-bar__logo_img">
                    <span class="nav-bar__logo_text">лого</span>
                </div>
                <ul class="nav-bar__items">
                    <li class="nav-bar__item">Слабоалкогольные</li>
                    <li class="nav-bar__item">Среднеалкогольные</li>
                    <li class="nav-bar__item">Крепкие напитки</li>
                    <li class="nav-bar__item">Коктейли</li>
                </ul>
            </div>
            <!-- Правая сторона хедера -->
            <div class="nav-bar__search-like-profile flex-container">
                <div class="nav-bar__search">
                    <input type="text" class='nav-bar__search_input' placeholder="Поиск">
                    <span class="nav-bar__search_icon"></span>
                </div>
                <div class="nav-bar__profile_back">
                    <img src="./images/man.svg" alt="man" class="nav-bar__profile_img">
                </div>
                <div class="nav-bar__likes">
                    <img src="./images/black-heart.svg" alt="heart" class="nav-bar__img-heart">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                
            }
        },
        methods: {
        }
    }
</script>
<style lang="scss">
    .rotate-arrow{
        transform: rotate(180deg) !important;
    }
    .nav-bar{//Левая часть хедера
        padding: 23px 38px;
        background: #F6DB68;
        &__container{
            max-width: 1800px;
            margin: 0 auto;
        }
        &__logo{
            &_img{
                vertical-align: middle;
                display: inline-block;
            }
            &_text{
                font-family: Yeseva One;
                font-size: 20px;
                text-transform: uppercase;
                vertical-align: middle;
                display: inline-block;
                margin-left: 11px;
            }
        }
        &__items{
            margin: 0;
            padding: 0;
            list-style: none;
            margin-left: 57px;
        }
        &__item{
            display: inline-block;
            vertical-align: middle;
            margin-right: 32px;
            font-family: Montserrat;
            font-weight: 500;
            font-size: 20px;
            &:nth-last-child(1){
                margin-right: 0px;
            }
        }
    }
    .nav-bar{// Правая часть хедера
        &__search{
            position: relative;
            width: 331px;
            &_input{
                background: #FFF;
                border: none;
                border-radius: 50px;
                outline: none;
                max-width: 297px;   
                width: 100%;
                height: 44px;
                font-family: Montserrat;
                color: rgb(17, 6, 6);
                padding-left: 24px;
                padding-right: 10px;
            }
            &_icon{
                // display: inline-block;
                background: url('./images/icon-search.svg') no-repeat;
                width:19px;
                height: 19px;
                position: absolute;
                margin: auto;
                top: 0;
                bottom: 0;
                right: 19px;
            }
        }
        &__like{
            margin-left: 50px;
            &_text{
                font-family: Montserrat;
                font-weight: 500;
                font-size: 16px;
                display:inline-block;
                vertical-align: middle;
            }
            &_img{
                margin-left: 20px;
                display:inline-block;
                vertical-align: middle;
            }
        }
        &__profile_back{
            display: flex;
            justify-content: center;
            align-items: center;
            background: #FFF;
            border: none;
            border-radius: 50%;
            width: 48px;
            height: 48px;
            margin-left: 20px;
        }
        &__likes{
            display: flex;
            justify-content: center;
            align-items: center;
            background: #FFF;
            border: none;
            border-radius: 50%;
            width: 46px;
            height: 46px;
            margin-left: 20px;
        }
        &__profile_img{
            width:21px;
            height: 22px;
        }
    }
</style>
