<template>
    <div class="popup-drink">
        <b-row class="px-5 py-4 justify-content-around flex-nowrap">
            <b-col cols="12" md="4" xl="4" class="first">

                <div class="category pb-4">
                    <div class="title-group pb-2">
                        <img :src="require('../images/openmoji_beer-mug.svg')" alt="beer">
                        <span class="title-group__text">Слабоалкогольные</span>
                    </div>
                    <p class="mb-2 pl-2 category__sub-drink">Пиво</p>
                    <p class="mb-2 pl-2 category__sub-drink">Сидр, медовуха, эль</p>
                </div>

                <div class="category">
                    <div class="title-group pb-2">
                        <img :src="require('../images/openmoji_wine-glass.svg')" alt="wine">
                        <span class="title-group__text">Среднеалкогольные</span>
                    </div>
                    <p class="mb-2 pl-2 category__sub-drink">Вино</p>
                    <p class="mb-2 pl-2 category__sub-drink">Шампанское и игристые вина</p>
                    <p class="mb-2 pl-2 category__sub-drink">Десертные вина</p>
                    <p class="mb-2 pl-2 category__sub-drink">Вермут</p>
                </div>
            </b-col>
            <b-col cols="12" md="3" xl="3">
                <div class="category">
                    <div class="title-group pb-2">
                        <img :src="require('../images/openmoji_tumbler-glass.svg')" alt="wine">
                        <span class="title-group__text">Крепкие напитки</span>
                    </div>
                    <b-row>
                        <b-col cols="6" md="4">
                            <p class="mb-2 pl-2 category__sub-drink">Виски</p>
                            <p class="mb-2 pl-2 category__sub-drink">Водка</p>
                            <p class="mb-2 pl-2 category__sub-drink">Ром</p>
                            <p class="mb-2 pl-2 category__sub-drink">Джин</p>
                        </b-col>
                        <b-col>
                            <p class="mb-2 pl-2 category__sub-drink">Бренди, коньяк</p>
                            <p class="mb-2 pl-2 category__sub-drink">Абсент</p>
                            <p class="mb-2 pl-2 category__sub-drink">Текила</p>
                            <p class="mb-2 pl-2 category__sub-drink">Ликер</p>                        
                        </b-col>
                    </b-row>

                    <b-col class="pl-2">
                        <p class="mb-2 category__sub-drink">Настойка, наливка, биттер, бальзам</p>                      
                    </b-col>
                </div>
            </b-col>
            <b-col cols="12" xl="5">
                <b-row>
                    <b-col cols="12">
                        <div class="category">
                            <div class="title-group pb-2">
                                <img :src="require('../images/openmoji_cocktail-glass.svg')" alt="wine">
                                <span class="title-group__text">Коктейли</span>
                            </div>
                            <b-row>
                                <b-col cols="4">
                                    <p class="mb-2 pl-2 type">Популярные</p>
                                    <p class="mb-2 pl-2 category__sub-drink">Махито</p>
                                    <p class="mb-2 pl-2 category__sub-drink">Маргарита</p>
                                    <p class="mb-2 pl-2 category__sub-drink">Лонг-Айленд</p>
                                    <p class="mb-2 pl-2 category__sub-drink">Пина колада</p>
                                    <p class="mb-2 pl-2 category__sub-drink">Глинтвейны</p>
                                </b-col >
                                <b-col cols="4" class="pr-0">
                                    <p class="mb-2 pl-2 type">По вкусу</p>
                                    <p class="mb-2 pl-2 category__sub-drink">Сауэры</p>
                                    <p class="mb-2 pl-2 category__sub-drink">Слинги</p>
                                    <p class="mb-2 pl-2 category__sub-drink">Коллинзы</p>
                                    <p class="mb-2 pl-2 category__sub-drink">Физы</p>      
                                    <p class="mb-2 pl-2 category__sub-drink">Пуншы</p>   
                                    <p class="mb-2 pl-2 category__sub-drink">Гроги</p>                     
                                </b-col>
                                <b-col cols="4" class="pl-0">
                                    <p class="mb-2 pl-2 type">По типу</p>
                                    <p class="mb-2 pl-2 category__sub-drink">Согревающие</p>
                                    <p class="mb-2 pl-2 category__sub-drink">Лонг дринки</p>
                                    <p class="mb-2 pl-2 category__sub-drink">Шорт дринки</p>
                                    <p class="mb-2 pl-2 category__sub-drink">Шоты</p>                        
                                </b-col>
                            </b-row>
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
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
<style lang="scss" scoped>

.title-group{
    display: flex;
    align-items: center;
    &__text{
        font-size: 18px;
        font-weight: bold;
        font-family: Montserrat, sans-serif;
        &:hover{
            color: #45988E;
            cursor: pointer;
        }
    }
}

.type{
    color: #7E7E7E;
}
    
.popup-drink{
    position: absolute;
    background: #FFFFFF;
    border: none;
    margin: auto;
    top: 4.9rem;
    right: 40%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 0 0 18px 18px;
    max-width: 1000px;
    width: 100%;
    z-index: 1000;
} 

.category{  
    &__sub-drink{
        &:hover{
            color: #45988E;
            cursor: pointer;
        }
    }
}

.first{
    max-width: 260px;
}

</style>
