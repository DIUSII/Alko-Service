<template>
    <div class="nav-bar">
        <div class="nav-bar__container flex-container py-0">
            <!-- Левая сторона хедера -->
            <div class="nav-bar__logo-main-shop flex-container">
                <div class="nav-bar__logo">
                    <img src="./images/wineglass.svg" alt="logo" class="nav-bar__logo_img">
                    <h1 class="nav-bar__logo_text">лого</h1>
                </div>
                <!-- <ul class="nav-bar__items">
                    <li class="nav-bar__item" v-for="item in arrayMenu" :key="item.key">
                        <img :src="item.img" alt="" class="nav-bar__item_img">
                        <span class="nav-bar__item_span">{{item.title}}</span>
                    </li>
                </ul> -->
                <ul class="nav-bar__items">
                    <li class="nav-bar__item px-3 py-4" 
                        :class="{backgroundWhiteNav: test1}"
                        @mouseenter="test1 = true" 
                        @mouseleave="test1 = false" >
                        <img :src="require('./images/botal.svg')" alt="" class="nav-bar__item_img">
                        <span class="nav-bar__item_span">Напитки</span>
                        <popupDrink
                            v-if="test1"
                        />
                    </li>
                    <li class="nav-bar__item px-3 py-4" 
                        :class="{backgroundWhiteNav: test2}"
                        @mouseenter="test2 = true" 
                        @mouseleave="test2 = false" >
                        <img :src="require('./images/apple.svg')" alt="" class="nav-bar__item_img">
                        <span class="nav-bar__item_span">Подобрать к еде</span>
                        <popupFood
                            v-if="test2"
                        />
                    </li>
                    <li class="nav-bar__item px-3 py-4" 
                        :class="{backgroundWhiteNav: test3}"
                        @mouseenter="test3 = true" 
                        @mouseleave="test3 = false" >
                        <img :src="require('./images/cracker.svg')" alt="" class="nav-bar__item_img">
                        <span class="nav-bar__item_span">Подобрать к событию</span>
                        <popupEvent
                            v-if="test3"
                        />
                    </li>
                </ul>
                <!-- <ul class="nav-bar__items">
                    <li class="nav-bar__item" v-for="item in arrayMenu" :key="item.key" 
                        :class="{backgroundWhiteSearch: backWhite}"
                        @mouseenter="backWhite = true" 
                        @mouseleave="backWhite = false" >
                        <img :src="item.img" alt="" class="nav-bar__item_img">
                        <span class="nav-bar__item_span">{{item.title}}</span>
                    </li>
                </ul> -->

            </div>
            <!-- Правая сторона хедера -->
            <div class="nav-bar__search-like-profile flex-container">
                <!-- Поиск по товару -->
                <div class="nav-bar__search">
                    <input 
                        type="text" 
                        class='nav-bar__search_input' 
                        :class="{backgroundWhiteSearch: backWhite}" 
                        placeholder="Поиск" 
                        @focus="backWhite = true" 
                        @blur="backWhite = false" 
                        @keyup.enter="backWhite = false"
                    >
                    <span class="nav-bar__search_icon"></span>
                </div>
                <!-- Понравивешиеся ему продукты -->
                <div class="nav-bar__likes">
                    <img src="./images/black-heart.svg" alt="heart" class="nav-bar__img-heart">
                </div>
                <!-- Профиль юзера -->
                <div class="nav-bar__profile_back">
                    <img src="./images/man.svg" alt="man" class="nav-bar__profile_img" v-if="conclusionLogIn.token === null" @click="openAutorization">
                    <span class="nav-bar__likes_span" v-else @click="logoutUser">{{conclusionLogIn.user.name[0].toUpperCase()}}</span>
                </div>
                <logout v-show="checkLogout"></logout>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapMutations} from 'vuex'
    import logout from './modalWindowLogOut/modalWindowLogOut'
    import popupDrink from './popupsNav/popupDrink'
    import popupFood from './popupsNav/popupFood'
    import popupEvent from './popupsNav/popupEvent'
    export default {
        data(){
            return{
                arrayMenu: [
                    {
                        title: 'Напитки',
                        img: require('./images/botal.svg')
                    },
                    {
                        title: 'Подобрать к еде',
                        img: require('./images/apple.svg')
                    },
                    {
                        title: 'Подобрать к событию',
                        img: require('./images/cracker.svg')
                    },
                ],
                backWhite: false,
                test1: false,
                test2: false,
                test3: false,
            }
        },
        computed: mapGetters(['checkLogout', 'conclusionLogIn']),
        methods: {
            ...mapMutations(['openWindwoLogout', 'openWindowAuto']),
            // Открывает модальное окно выхода из акк
            logoutUser(){
                this.openWindwoLogout();
            },
            openAutorization(){
                this.openWindowAuto();
            }
        },
        components: {
            logout,
            popupDrink,
            popupFood,
            popupEvent
        }
    }
</script>
<style lang="scss">
    .rotate-arrow{
        transform: rotate(180deg) !important;
    }
    .backgroundWhiteSearch{
        background: #FFF !important;
    }
    .backgroundWhiteNav{
        background: #FFF !important;
        border-radius: 2rem 2rem 0 0;
    }
    .nav-bar{//Левая часть хедера
        background: #F6DB68;
        &__container{
            padding: 20px 30px;
            max-width: 1800px;
            margin: 0 auto;
        }
        &__logo{
            &_img{
                vertical-align: middle;
                display: inline-block;
                margin-right: 15px;
            }
            &_text{
                vertical-align: middle;
                display: inline-block;
                font-family: Rubik;
                font-weight: 500;
                font-size: 32px;
                margin: 0;
                line-height: 38px;
                color: #282828;
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
            //margin-right: 30px;
            &:nth-last-child(1){
                margin-right: 0px;
            }
            &_span{
                display: inline-block;
                vertical-align: middle;
                font-family: Montserrat;
                font-weight: 500;
                font-size: 20px;
                margin-left: 8px;
            }
            &_img{
                display: inline-block;
                vertical-align: middle;
            }
        
        }
    }
    .nav-bar{// Правая часть хедера
        &__search{
            position: relative;
            width: 331px;
            &_input{
                background: #ECCE7C;
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
        &__search-like-profile{
            position: relative;
        }
        &__like{
            margin-left: 50px;
            &_text{
                font-family: Montserrat;
                font-weight: 500;
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
            &_span{
                font-family: Rubik;
                font-size: 26px;
                line-height: 31px;
                color: #363636;
                cursor:pointer;
            }
        }
        &__profile_img{
            width:21px;
            height: 22px;
        }
    }
</style>
