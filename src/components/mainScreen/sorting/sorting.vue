<template>
    <div class="sorting">
        <h2 class="sorting__title">Выбор напитка</h2>
        <ul class="sorting__items">
            <h3 class="sorting__items_title">Слабоалкогольные</h3>
            <li class="sorting__item" v-for="item in oneArray" :key="item.id">{{item.text}}</li>
        </ul>
        <ul class="sorting__items">
            <h3 class="sorting__items_title">Среднеалкогольные</h3>
            <li class="sorting__item" v-for="item in dwoArray" :key="item.id">{{item.text}}</li>
        </ul>
        <ul class="sorting__items">
            <h3 class="sorting__items_title">Крепкие напитки</h3>
            <li class="sorting__item" v-for="item in freeArray" :key="item.id">{{item.text}}</li>
        </ul>   
    </div>
</template>
<script>
export default {
    data(){
        return {
            oneArray: [
                {
                    text: 'Пиво',
                },
                {
                    text: 'Сидр',
                },
                {
                    text: 'Медовуха',
                },
                {
                    text: 'Эль',
                },
            ],
            dwoArray: [
                {
                    text: 'Вино'
                },
                {
                    text: 'Десертные вина'
                },
                {
                    text: 'Шампанское'
                },
                {
                    text: 'Игристые вина'
                },
                {
                    text: 'Вермут'
                },
                {
                    text: 'Аперетив'
                },
            ],
            freeArray: [
                {
                    text: 'Абсент'
                },
                {
                    text: 'Бренди, коньяк'
                },
                {
                    text: 'Виски'
                },
                {
                    text: 'Джин'
                },
                {
                    text: 'Текила'
                },
                {
                    text: 'Ликер'
                },
                {
                    text: 'Ром'
                },
                {
                    text: 'Настойки, наливки, бальзам'
                },
                
            ]
        }
    }
}
</script>
<style lang="scss">
.sorting {  
    &__title{
        font-family: Montserrat;
        font-weight: bold;
        font-size: 26px;
        margin-top: 0px;
        margin-bottom: 26px;
    }
    &__items{
        margin: 0;
        padding: 0;
        list-style: none;
        &_title{
            font-family: Montserrat;
            font-weight: 500;
            font-size: 18px;
            margin-top: 0px;
            margin-bottom: 10px;
        }
    }
    &__item{
        font-family: Montserrat;
        font-size: 16px;
        color: #5E5E5E;
            margin-bottom: 10px;
    }
}
</style>