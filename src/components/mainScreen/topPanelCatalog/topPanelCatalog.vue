<template>
    <div class="top-panel fixed-container flex-container">
        <div>
            <p class="top-panel__way">
                Главная > Напитки > Среднеалкагольные > <span class="top-panel__way_span">Вино</span>
            </p>
            <div class="top-panel__quantity-product">
                Найдено <span class="top-panel__quantity-product_span">234</span> товара
            </div>
        </div>
        <div class="top-panel__sorting">
            Сортировать по: <span class="top-panel__sorting_span">Популярности</span>
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss">
    .top-panel{
        // margin-top: 28px;
        // margin-bottom: 20px;
        margin: 28px auto 20px !important;
        &__way{
            margin-bottom: 3px;
            font-family: Montserrat;
            font-size: 18px;
            line-height: 22px;
            color: #565656;
            &_span{
                color: #45988E;
            }
        }
        &__quantity-product{
            font-family: Rubik;
            font-weight: 500;
            font-size: 28px;
            line-height: 33px;
            color: #606060;
            &_span{
            }
        }
        &__sorting{
            background: #FFFFFF;
            box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 20px;
            max-width: 397px;
            width: 100%;
            padding: 32px 0;
            text-align: center;
            font-family: Rubik;
            font-size: 20px;
            line-height: 24px;
            color: #606060;
            &_span{
                margin-left: 12px;
                font-weight: 300;
            }
        }
    }
</style>