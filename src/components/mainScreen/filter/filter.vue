<template>
    <div class="filter">
        <h2 class="filter__title">Фильтры</h2>
        <hr class="filter__hr">
        <div class="filter__main-filter">
            <div class="filter__event">
                <h3 class="filter__main-title">Для события<span class="filter__main-arrow"></span></h3>
            </div>
            <div class="filter__to-food">
                <h3 class="filter__main-title">К блюду<span class="filter__main-arrow"></span></h3>
            </div>
            <div class="filter__taste">
                <h3 class="filter__main-title">Вкус<span class="filter__main-arrow"></span></h3>
            </div>
        </div>
        <hr class="filter__hr">
        <div class="filter__sub-filter">
            <div class="filter__rating">
                <h4 class="filter__sub-title">Рейтинг<span class="filter__sub-arrow"></span></h4>
            </div>
            <div class="filter__price">
                <h4 class="filter__sub-title">Цена<span class="filter__sub-arrow"></span></h4>
                <vue-range-slider ref="slider" v-model="value" :min="min" :max="max" :enable-cross="enableCross" :dot-size="doteSize" :tooltip-merge="tooltipMerge"></vue-range-slider>
            </div>
            <div class="filter__volume">
                <h4 class="filter__sub-title">Объем<span class="filter__sub-arrow"></span></h4>
            </div>
            <div class="filter__fortress">
                <h4 class="filter__sub-title">Крепкость<span class="filter__sub-arrow"></span></h4>
            </div>
            <div class="filter__country">
                <h4 class="filter__sub-title">Страна<span class="filter__sub-arrow"></span></h4>
            </div>
            <div class="filter__manufacturer">
                <h4 class="filter__sub-title">Производитель<span class="filter__sub-arrow"></span></h4>
            </div>
            <div class="filter__brand">
                <h4 class="filter__sub-title">Бренд<span class="filter__sub-arrow"></span></h4>
            </div>
        </div>
        <form class="filter__form">
            <button class="filter__main-button">Применить фильтры</button>
            <button class="filter__clear-filter">Очистить фильтры</button>
        </form>
    </div>
</template>
<script>
import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'
export default {
    
    data(){
        return {
            value: [0, 10000],
        }
    },
    created() {
        this.min = 0
        this.max = 10000
        // this.width = 300['px']
        this.tooltipMerge = false
        this.doteSize = 29;
        this.enableCross = false
    },
    components: {
        VueRangeSlider,
        
    }
    
}
</script>
<style lang="scss">
.slider{
    position: absolute;
    z-index: 10;
}
.filter {  
    background: #FFFFFF;
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    min-width: 370px;
    max-width: 370px;
    width: 100%;
    box-sizing: border-box;
    padding: 20px 0;
    margin-top: 15px;
    &__title{
        font-family: Rubik;
        font-weight: 500;
        font-size: 28px;
        line-height: 33px;
        color: #2C2C2C;
        margin-left: 30px;
    }
    &__main-filter{
        margin-left: 30px;

    }
    &__hr{
        border: 0.5px solid #ECECEC;
        margin: 0;
    }
    &__main-title{
        font-family: Rubik;
        font-weight: 500;
        font-size: 26px;
        line-height: 31px;
        margin-top: 16px;
        color: #575757;
        &:nth-last-child(1){
            margin-bottom: 17px;
        }
    }
    &__main-arrow{
        margin-left: 8px;
        background: url('./images/main-arrow.png') no-repeat 50% 50%;
        width:16px;
        height:10px;
        display: inline-block;
    }
    &__sub-filter{
        margin-left: 30px;
    }
    &__sub-title{
        font-family: Rubik;
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;
        margin-top: 18px;
    }
    &__sub-arrow{
        margin-left: 8px;
        background: url('./images/sub-arrow.png') no-repeat 50% 50%;
        width:15px;
        height:9px;
        display: inline-block;
    }
    &__brand{
        margin-bottom: 48px;
    }
    &__form{
        text-align: center;
    }
    &__main-button{
        background: #F6DB68;
        border: none;
        outline: none;
        border-radius: 50px;
        font-family: Rubik;
        font-size: 18px;
        line-height: 21px;
        box-sizing: border-box;
        width: 100%;
        max-width:310px;
        padding: 13px 0;
    }
    &__clear-filter{
        font-family: Rubik;
        line-height: 19px;
        color: #45988E;
        border: none;
        background-color: transparent   ;
        margin-top: 20px;
        outline: none;
    }

}
</style>