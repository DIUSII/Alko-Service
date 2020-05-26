<template>
    <b-col cols="12" md="6" xl="4">
        <router-link class="alco-card" :to="{name: 'shops'}">
            <b-card 
            @click="getUser"
            class="mx-2 my-3 shadow alco-card__content"
        >
        <b-img src="https://picsum.photos/600/300/?image=25" class="test" fluid alt=""></b-img>
            <b-row>
                <b-col cols="12">
                    
                </b-col>
                <b-col cols="12">
                    <p class="mb-0">Красное полусладкое</p>
                    <hr class="mt-0 mb-1">
                    <p>{{product.title}}</p>
                    <p>{{product.vel}}л &#183; {{product.ethanol}}%</p>
                    <p>{{product.country}}</p>
                </b-col>
                <b-col cols="12">
                    <btn
                        btnValue="Магазины"
                        :block="true"
                        class="alco-card__btn mb-3"
                    />
                </b-col>
            </b-row>
        </b-card>
        </router-link>
    </b-col>
</template>

<script>

//import {mapGetters, mapActions} from 'vuex'
import btn from '../buttons/main-btn'

export default {
    name: 'main-alco-card',
    components:{
        btn
    },
    props:{
        product:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    computed:{

    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
.alco-card{
    color: #575757;
    &__content{
        border-radius: 18px;
    }
    &__btn{
        background: #45988E;
        border: none;
        border-radius: 100px;
    }
}

.test{
    overflow: hidden;
}
</style>