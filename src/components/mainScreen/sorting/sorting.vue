<template>   
    <b-container  tainer fluid class="container-filter mt-4">
        <b-row class="justify-content-between">
            <b-col cols="12" xl="6" class="container-filter__finded">
                <p class="mb-0 container-filter__text mt-3">По запросу {{test}} найдено {{test}} товаров</p> <!-- С БД данные пихать-->
            </b-col>
            <b-col v-if="test">
                
            </b-col>
            <b-col cols="12" xl="4">
                <selectSort
                    :options="sortOption"
                    :selected="selected"
                    @select="sort"
                />
            </b-col>
        </b-row>
    </b-container>
</template>
<script>

import selectSort from '../../widgets/sort-select/sort-select'

export default {
    data(){
        return {
            sortOption:[
                {name: 'Популярности', value: 1},
                {name: 'Рейтингу', value: 2},
                {name: 'Возрастанию цены', value: 3},
                {name: 'Убыванию цены', value: 4},
                {name: 'Возрастанию объёма', value: 5},
                {name: 'Убыванию объёма', value: 6},
                {name: 'Возрастанию крепости', value: 7},
                {name: 'Убыванию крепости', value: 8},
                {name: 'Наименованию', value: 9},
            ],
            selected: 'Популярности',
            test: false
        }
    },
    components:{
        selectSort
    },
    methods: {
        sort(select){
            this.selected = select.name
        }    
    }
}
</script>
<style lang="scss">

.container-filter{
    max-width: 1500px;
    &__finded{
        color: #2C2C2C;
        font-size: 23px;
        font-weight: 600;
        font-family: Rubik, sans-serif;
    }
}
</style>
