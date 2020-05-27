<template>
    <b-container fluid class="viewAlco mr-0">
        <youWatch/>
        <popular/>
        <bestPrice/>
    </b-container>
</template>
<script>

import youWatch from './you-watch'
import popular from './popular'
import bestPrice from './best-price'


export default {
    data(){
        return {

        }
    },
    components:{
        youWatch,
        popular,
        bestPrice,
    },
    methods:{

    }
}
</script>
<style lang="scss">
.viewAlco{
    max-width: 1000px;
}
</style>