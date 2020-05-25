<template>
    <div class="popup-drink">
        <b-row class="px-5 py-4">
            <b-col cols="12" md="4" xl="3">

                <div class="category pb-4">
                    <div class="title-group pb-2">
                        <img :src="require('../images/openmoji_beer-mug.svg')" alt="beer">
                        <span class="title-group__text">Слабоалкогольные</span>
                    </div>
                    <p class="mb-2 pl-2">Пиво</p>
                    <p class="mb-2 pl-2">Сидр, медовуха, эль</p>
                </div>

                <div class="category">
                    <div class="title-group pb-2">
                        <img :src="require('../images/openmoji_wine-glass.svg')" alt="wine">
                        <span class="title-group__text">Среднеалкогольные</span>
                    </div>
                    <p class="mb-2 pl-2">Вино</p>
                    <p class="mb-2 pl-2">Шампанское</p>
                    <p class="mb-2 pl-2">Десертные вина</p>
                    <p class="mb-2 pl-2">Вермут</p>
                </div>
            </b-col>
            <b-col cols="12" md="4" xl="3">
                <div class="category">
                    <div class="title-group pb-2">
                        <img :src="require('../images/openmoji_tumbler-glass.svg')" alt="wine">
                        <span class="title-group__text">Крепкие напитки</span>
                    </div>
                    <b-row>
                        <b-col>
                            <p class="mb-2 pl-2">Виски</p>
                            <p class="mb-2 pl-2">Водка</p>
                            <p class="mb-2 pl-2">Ром</p>
                            <p class="mb-2 pl-2">Джин</p>
                        </b-col>
                        <b-col>
                            <p class="mb-2 pl-2">Бренди, коньяк</p>
                            <p class="mb-2 pl-2">Абсент</p>
                            <p class="mb-2 pl-2">Текила</p>
                            <p class="mb-2 pl-2">Ликер</p>                        
                        </b-col>
                    </b-row>

                    <b-col class="pl-2">
                        <p class="mb-2">Настойка, наливка, биттер, бальзам</p>                      
                    </b-col>
                </div>
            </b-col>
            <b-col>
                <b-row>
                    <b-col cols="12">
                        <div class="category">
                            <div class="title-group pb-2">
                                <img :src="require('../images/openmoji_cocktail-glass.svg')" alt="wine">
                                <span class="title-group__text">Коктейли</span>
                            </div>
                            <b-row>
                                <b-col>
                                    <p class="mb-2 pl-2 type">Популярные</p>
                                    <p class="mb-2 pl-2">Махито</p>
                                    <p class="mb-2 pl-2">Маргарита</p>
                                    <p class="mb-2 pl-2">Лонг-Айленд</p>
                                    <p class="mb-2 pl-2">Пина колада</p>
                                    <p class="mb-2 pl-2">Глинтвейн</p>
                                </b-col>
                                <b-col>
                                    <p class="mb-2 pl-2 type">По вкусу</p>
                                    <p class="mb-2 pl-2">Сауэры</p>
                                    <p class="mb-2 pl-2">Слинги</p>
                                    <p class="mb-2 pl-2">Коллинзы</p>
                                    <p class="mb-2 pl-2">Физы</p>      
                                    <p class="mb-2 pl-2">Пуншы</p>   
                                    <p class="mb-2 pl-2">Гроги</p>                     
                                </b-col>
                                <b-col>
                                    <p class="mb-2 pl-2 type">По типу</p>
                                    <p class="mb-2 pl-2">Согревающие</p>
                                    <p class="mb-2 pl-2">Лонг дринки</p>
                                    <p class="mb-2 pl-2">Шорт дринки</p>
                                    <p class="mb-2 pl-2">Шоты</p>                        
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
        :hover{
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
        right: 30%;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
        border-radius: 0 0 18px 18px;
        max-width: 1200px;
        width: 100%;
        z-index: 1000;
    }
</style>
