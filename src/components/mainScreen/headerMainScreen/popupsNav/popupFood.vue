<template>
    <div class="popup-drink">
        <b-row class="px-5 py-5 justify-content-around">
            <b-col cols="12" md="4" xl="3">

                <div class="category pb-4">
                    <div class="title-group pb-2">
                        <span class="title-group__text">Мясо на мангале</span>
                    </div>
                    <p class="pb-2 mb-0 pl-2 sub-food">Стейк</p>
                    <p class="pb-2 mb-0  pl-2 sub-food">Ребрышки</p>
                    <p class="pb-2 mb-0 pl-2 sub-food">Шашлык куринный</p>
                    <p class="pb-2 mb-0  pl-2 sub-food">Шашлык из свинины</p>
                    <p class="pb-2 mb-0 pl-2 sub-food">Шашлык из говядины</p>
                    <p class="pb-2 mb-0  pl-2 sub-food">Шашлык из баранины</p>
                </div>

                <div class="category">
                    <div class="title-group pb-2">
                        <span class="title-group__text">Мраморное мясо</span>
                    </div>
                </div>
                <div class="category">
                    <div class="title-group pb-2">
                        <span class="title-group__text">Морепродукты</span>
                    </div>
                </div>
                <div class="category">
                    <div class="title-group pb-2">
                        <span class="title-group__text">Барбекю-рыба</span>
                    </div>
                </div>

            </b-col>
            <b-col cols="12" md="4" xl="4">
                <div class="category">
                    <div class="title-group pb-2">
                        <span class="title-group__text">Низкокалорийные салаты</span>
                    </div>
                </div>
                <div class="category">
                    <div class="title-group pb-2">
                        <span class="title-group__text">Высококалорийные салаты</span>
                    </div>
                </div>
                <div class="category">
                    <div class="title-group pb-2">
                        <span class="title-group__text">Горячие супы</span>
                    </div>
                    <p class="pb-2 mb-0 pl-2 sub-food">Щи</p>
                    <p class="pb-2 mb-0  pl-2 sub-food">Борщ</p>
                    <p class="pb-2 mb-0 pl-2 sub-food">Рассольник</p>
                </div> 
                <div class="category">
                    <div class="title-group pb-2">
                        <span class="title-group__text">Сыры</span>
                    </div>
                    <p class="pb-2 mb-0 pl-2 sub-food">Мацарелла</p>
                    <p class="pb-2 mb-0  pl-2 sub-food">Фета</p>
                    <p class="pb-2 mb-0 pl-2 sub-food">Козий сыр</p>
                </div>                
            </b-col>
            <b-col xl="3" class="thrid">
                <div class="category">
                    <div class="title-group pb-2">
                        <span class="title-group__text">Паста и пицца</span>
                    </div>
                </div>
                <div class="category">
                    <div class="title-group pb-2">
                        <span class="title-group__text">Суши и роллы</span>
                    </div>
                </div>  
                <div class="category">
                    <div class="title-group pb-2">
                        <span class="title-group__text">Сырные шарики и кортофель фри</span>
                    </div>
                </div>
                <div class="category">
                    <div class="title-group pb-2">
                        <span class="title-group__text">Фрукты</span>
                    </div>
                </div> 
                <div class="category">
                    <div class="title-group pb-2">
                        <span class="title-group__text">Десерты</span>
                    </div>
                </div>                               
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
    right: 39%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 0 0 18px 18px;
    max-width: 890px;
    width: 100%;
    z-index: 1000;
} 

.sub-food{
    border-left: #45988E solid 2px;
    &:hover{
        font-weight: bold;
        color: #45988E;
        cursor: pointer;
    }
}

.thrid{
    max-width: 190px;
}
</style>