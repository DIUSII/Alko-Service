<template>
    <b-row class="justify-content-center mt-5">
        <b-col cols="12">
            <navPanel
                icon="/img/ps_sale-tag.b2533c19.svg"
                titleValue="Лучшая цена"
            />
        </b-col>
        <b-col cols="12">
            <b-row>
                <card
                    v-for="product in PRODUCTS"
                    :key="product.id"
                    :product="product"
                />
            </b-row>
        </b-col>

        <b-col cols="3" class="mt-3">
            <btn/>
        </b-col>
    </b-row>
</template>
<script>

import card from '../../widgets/card/main-alco-card'
import btn from '../../widgets/buttons/download-btn'
import navPanel from '../../widgets/nav-main/nav-panel'
import {mapActions, mapGetters} from 'vuex'

export default {
    data(){
        return {
            
        }
    },
    components:{
        card,
        navPanel,
        btn,
    },
    computed:{
        ...mapGetters([
            'PRODUCTS',
        ]),
    },
    methods:{
        ...mapActions([
            'GET_PRODUCTS',
        ]),
    },
    mounted(){
        this.GET_PRODUCTS()
    }
}
</script>
<style lang="scss">

</style>