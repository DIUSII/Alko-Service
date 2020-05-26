<template>
    <div class="favorites" v-show='conclusionWindowFavorites'>
        <div class="flex-container favorites__name-block">
            <h2 class="favorites__title">Избранное</h2>
            <img src="./images/cross.png" alt="" class="favorites__cross" @click="closeModal">
        </div>
        <hr class="favorites__hr">
        <ul class="favorites__container" v-if="conclusionFavorites.length > 0">
            <!-- Элемент избранного -->
            <li class="favorites__item flex-container" v-for='(item,index) in conclusionFavorites' :key='item.id'>
                <!-- Общая картинка продукта -->
                <img src="./images/botal.png" alt="" class="favorites__botal-wine">
                <div class="favorites__contant">
                    <div class="favorites__info-drink flex-container">
                        <!-- Тиа напитка -->
                        <div class="favorites__type">Красное полусладкое</div>
                        <!-- Комменты и оценка -->
                        <div class="flex-container">
                            <div class="favorites__stars flex-container">
                                <span class="favorites__stars_span">4.2</span>
                                <img src="./images/star.png" alt="star" class="favorites__stars_img">
                            </div>
                            <div class="favorites__comments flex-container">
                                <span class="favorites__comments_span">12</span>
                                <img src="./images/comments.png" alt="comments" class="favorites__comments_img">
                            </div>
                        </div>
                    </div>
                    <hr class="favorites__container_hr">
                    <!-- название продукта -->
                    <div class="favorites__name-product">
                        Rockpile Zinfandel 2009
                    </div>
                    <div class="favorites__info-product flex-container">
                        <div>
                            <!-- Миллелтры и градус -->
                            <div class="flex-container favorites__main-info">
                                <span class="favorites__milliliters">0.77л  •</span>
                                <span class="favorites__percent-alco">10.5%</span>
                            </div>
                            <div class="favorites__country-production">Италия, Венето</div>
                        </div>
                        <div class="favorites__group-btn">
                            <button 
                                class="favorites__score" 
                                :class="{lightBackground: item.hoverEffectBtnScore}"
                                @mouseout="item.hoverEffectBtnScore = false" 
                                @mouseenter="item.hoverEffectBtnScore = true"

                            ></button>
                            <button 
                                class="favorites__delete-in-favorites"
                                :class="{redBackground: item.hoverEffectBtnDeleteInFavorites}"
                                @mouseout="item.hoverEffectBtnDeleteInFavorites = false" 
                                @mouseenter="item.hoverEffectBtnDeleteInFavorites = true"
                                @click="deleteItemFavorites(index)"
                            ></button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="favorites__array-null" v-else>
            <div class="favorites__instruction">Добавьте алкоголь в избранное.</div>
            <div class="favorites__info">В этом списке будет храниться понравившийся вам алкоголь.</div>
        </div>
        <hr class="favorites__hr" v-if="conclusionFavorites.length > 0">
    </div>
</template>
<script>
    import {mapGetters, mapMutations} from "vuex"
    export default {
        computed: mapGetters(['conclusionWindowFavorites', 'conclusionFavorites']),
        methods: {
            ...mapMutations(['closeWindowFavorites', 'deleteItemInFavorite']),
            closeModal(){
                this.closeWindowFavorites();
            },
            deleteItemFavorites(index){
                this.deleteItemInFavorite(index);
            }
        }
    }
</script>
<style lang="scss">
    .lightBackground{
        background-color: #00BEA7 !important;
    }
    .redBackground{
        background: url('./images/trash-can-white.png') no-repeat 50% 50% !important;
        background-color: #EA4335 !important;
        border: 1px solid #EA4335 !important;
    }
    .favorites{
        background: #FFFFFF;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
        border-radius: 18px;
        width: 467px;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1000;
        box-sizing: border-box;
        padding-bottom: 50px;
        &__name-block{
            padding: 20px 30px;
        }
        &__title{
            font-family: Rubik;
            font-weight: 500;
            font-size: 28px;
            margin: 0;
        }
        &__hr{
            margin: 0;
            border: 0.5px solid #ECECEC;
        }
        &__container{
            max-height: 867px;
            margin: 0;
            padding: 0;
            overflow-y: scroll;
            overflow-x: 0;
            word-wrap: wrap;
            &_hr{
                margin: 0;
                background: #E3E3E3;
                transform: matrix(1, 0, 0, -1, 0, 0);
            }
        }
        ::-webkit-scrollbar { width: 4px; height: 0px;}
        ::-webkit-scrollbar-button {height: 0px; width: 0;}
        ::-webkit-scrollbar-track-piece { background-color: transparent;}
        ::-webkit-scrollbar-thumb { height: 85px;background-color: #929292; border-radius: 100px;}
        &__item{
            padding: 20px 40px 0px;
            align-items: flex-start !important;
            &:nth-last-child(1){
                margin-bottom: 20px;
            }
        }
        &__contant{
            max-width: 320px;
            width: 100%;
        }
        &__info-drink{
            margin-bottom: 2px;
        }
        &__type{
            font-family: Rubik;
            font-size: 14px;
            line-height: 17px;
            color: #575757;
        }
        &__name-product{
            font-family: Rubik;
            font-size: 20px;
            line-height: 24px;
            margin-top: 5px;
            color: #2C2C2C;
            margin-bottom: 36px;
        }
        &__stars{
            margin-right: 11px;
            &_span{
                font-family: Rubik;
                font-size: 14px;
                line-height: 17px;
                color: #575757;
                margin-right: 2px;
            }
        }
        &__comments{
            &_span{
                font-family: Rubik;
                font-size: 14px;
                line-height: 17px;
                color: #575757;
                margin-right: 2px;
            }
        }
        &__main-info{
            margin-bottom: 5px;
            max-width: 80px;
        }
        &__milliliters, &__percent-alco, &__country-production{
            font-family: Rubik;
            font-size: 14px;
            line-height: 17px;
            color: #575757;
        }
        &__score{
            background: url('./images/score.png') no-repeat 50% 50%;
            background-color: #45988E;
            width: 38px;
            height: 38px;
            border-radius: 100px;
            border: none;
            outline: none;
            transition: 1s;
        }
        &__delete-in-favorites{
            background: url('./images/trash-can-gray.png') no-repeat 50% 50%;
            border: 1px solid #575757;
            box-sizing: border-box;
            outline: none;
            border-radius: 100px;
            width: 38px;
            height: 38px;
            margin-left: 10px;
            transition: 1s;
        }
        &__instruction{
            font-family: Rubik;
            font-weight: bold;
            font-size: 26px;
            line-height: 31px;
            margin-bottom: 22px;
        }
        &__array-null{
            text-align: center;
            padding: 33px 20px 0;
        }
        &__info{
            font-family: Rubik;
            font-weight: 300;
            font-size: 22px;
            line-height: 26px;
            max-width:367px;
            margin: 0 auto;
        }
    }
</style>
