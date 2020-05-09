<template>
    <div class="filter">
        <ul 
            class="filter__items"
            :class="{'filter__items_click': checkMargin}"
        >
            <li 
                class="filter__item" 
                :class="{'filter__item_click': item.checkFilter}"
                v-for="(item, index) in filter" 
                :key="item.id" 
                @click='clickFilter(index)'
            >
                <p 
                    class="filter__text"
                    :class="{'filter__text_click': item.checkFilter}"
                >{{item.text}}</p>
                <span 
                    class="filter__arrow " 
                    :class="{'rotate-arrow': item.checkRotateArrow, 'filter__arrow_click': item.checkFilter}"
                    @click="clickRotateArrow(index)"
                ></span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                filter: [
                    {
                        text: 'По популярности',
                        checkRotateArrow: false,
                        checkFilter: false,
                    },
                    {
                        text: 'Цена',
                        checkRotateArrow: false,
                        checkFilter: false,
                    },
                    {
                        text: 'Обьем',
                        checkRotateArrow: false,
                        checkFilter: false,
                    },
                    {
                        text: 'Производитель',
                        checkRotateArrow: false,
                        checkFilter: false,
                    },
                    {
                        text: 'Крепкость',
                        checkRotateArrow: false,
                        checkFilter: false,
                    },
                    {
                        text: 'Бренд',
                        checkRotateArrow: false,
                        checkFilter: false,
                    },
                    {
                        text: 'Страна',
                        checkRotateArrow: false,
                        checkFilter: false,
                    },
                    {
                        text: 'Вкус',
                        checkRotateArrow: false,
                        checkFilter: false,
                    },
                    {
                        text: 'Вид',
                        checkRotateArrow: false,
                        checkFilter: false,
                    },
                ],
                checkMargin: false,
                oldId: null,
            }
        },
        methods: {
            clickRotateArrow(index){//Перевачивает стрелку
                this.filter[index].checkFilter = false;
                // this.filter[index].checkRotateArrow = !this.filter[index].checkRotateArrow;
            },
            clickFilter(index){//Изменят фон, цвет текста и цвет стрелки
                this.checkMargin = true;
                for(let k = 0; k < this.filter.length; k++){ // возможность окрытия только одного фильтра
                    if(k == index){
                        this.filter[index].checkFilter = true;
                    } else {
                        this.filter[k].checkFilter = false;
                        this.filter[k].checkRotateArrow = false;
                    }
                }
                this.filter[index].checkRotateArrow = !this.filter[index].checkRotateArrow;
                for(let i = 0; i < this.filter.length; i++){ // проверка на кол-во элементов с false
                    if(this.filter[i].checkFilter === false){
                        this.k++;
                    } else {
                        this.k = 0;
                        break;
                    }
                    if(this.k === 9){
                        this.checkMargin = false;
                        this.k = 0;
                    }
                }
            }
        }
    }
</script>
<style lang="scss">
    .filter{
        max-width: 1258px;
        margin: 0 auto;
        &__items{
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 37px 0 30px;
            cursor: pointer;
            &_click{
                margin: 27px 0 20px !important;
            }
        }
        &__item{
            display: inline-block;
            vertical-align: middle;
            &_click{
                background: #FAAC6A;
                border-radius: 50px;
                padding:10px 10px;
            }
        }
        &__text{
            font-family: Montserrat;
            font-weight: 500;
            font-size: 18px;
            display: inline-block;
            vertical-align: middle; 
            margin: 0;
            &_click{
                color: #FFF !important;
            }
        }
        &__arrow{
            display: inline-block;
            vertical-align: middle;
            background: url('./images/arrow.svg') no-repeat 100% 40%;
            width: 12px;
            height: 8px;
            margin-left: 11px;
            &_click{
                background: url('./images/blue-arrow.svg') no-repeat 100% 50% !important;
            }
        }
    }
</style>