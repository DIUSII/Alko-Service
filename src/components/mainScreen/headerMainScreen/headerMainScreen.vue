<template>
    <div class="nav-bar">
        <div class="fixed-container flex-container">
            <!-- Правая сторона хедера -->
            <div class="nav-bar__logo-main-shop flex-container">
                <div class="nav-bar__logo">
                    <img src="./images/logo.svg" alt="logo" class="nav-bar__logo_img">
                    <span class="nav-bar__logo_text">лого</span>
                </div>
                <h2 class="nav-bar__title">Главная</h2>
                <p class="nav-bar__shop">
                    Магазины
                    <span 
                        class="nav-bar__shop_arrow" 
                        :class="{'rotate-arrow': rotateArrow}"
                        @click="clickRotateArrow"
                    ></span>
                </p>
            </div>
            <!-- Правая сторона хедера -->
            <div class="nav-bar__search-like-profile flex-container">
                <div class="nav-bar__search">
                    <input type="text" class='nav-bar__search_input' placeholder="Поиск">
                    <span class="nav-bar__search_icon"></span>
                </div>
                <div class="nav-bar__like">
                    <div class="nav-bar__like_text">Понравилось</div>
                    <img src="./images/like.svg" alt="like" class="nav-bar__like_img">
                </div>
                <div class="nav-bar__profile">
                    <div class="nav-bar__profile_text" @click="$emit('openAutorization')">Профиль</div>
                    <img src="./images/man.svg" alt="man" class="nav-bar__profile_img">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                rotateArrow: false
            }
        },
        methods: {
            clickRotateArrow(){
                this.rotateArrow = !this.rotateArrow;
            }
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
        &__title{
            margin: 0;
            margin-left: 60px;
            font-family: Montserrat;
            font-weight: 500;
            font-size: 18px;
        }
        &__shop{
            margin: 0;
            margin-left: 50px;
            font-family: Montserrat;
            font-weight: 500;
            font-size: 18px;
            &_arrow{
                display: inline-block;
                vertical-align: middle;
                background: url('./images/shop-arrow.svg') no-repeat 100% 40%;
                width: 12px;
                height: 8px;
                margin-left: 11px;
            }
        }
    }
    .nav-bar{// Правая часть хедера
        &__search{
            position: relative;
            &_input{
                background: #E8D06C;
                border: none;
                border-radius: 50px;
                outline: none;
                max-width: 163px;
                width: 100%;
                height: 44px;
                font-family: Montserrat;
                font-size: 16px;
                color: #6F6F6F;
                padding-left: 47px;
                padding-right: 10px;
            }
            &_icon{
                // display: inline-block;
                background: url('./images/icon-search.svg') no-repeat;
                width:16px;
                height: 16px;
                position: absolute;
                margin: auto;
                top: 0;
                bottom: 0;
                left: 19px;
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
        &__profile{
            margin-left: 52px;
            &_text{
                font-family: Montserrat;
                font-weight: 500;
                font-size: 16px;
                display:inline-block;
                vertical-align: middle;
            }
            &_img{
                margin-left: 10px;
                display:inline-block;
                vertical-align: middle;
            }
        }
    }
</style>
