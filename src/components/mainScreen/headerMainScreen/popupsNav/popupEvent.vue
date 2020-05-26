<template>
    <div class="popup-drink">
        <b-row class="px-5 py-4 flex-xl-nowrap justify-content-around">
            <b-col cols="12" md="4" xl="2">
                <div class="title-group pb-2">
                    <img :src="require('../images/openmoji_party-popper.svg')" alt="paty">
                    <span class="title-group__text">Вечеринка</span>
                </div>
            </b-col>
            <b-col cols="12" md="4" xl="1" class="px-0">
                <div class="title-group pb-2">
                    <img :src="require('../images/openmoji_clinking-glasses.svg')" alt="banket">
                    <span class="title-group__text">Банкет</span>
                </div>
            </b-col>
            <b-col cols="12" md="4" xl="2">
                <div class="title-group pb-2">
                    <img :src="require('../images/openmoji_tumbler-glass.svg')" alt="banket">
                    <span class="title-group__text">В одиночестве</span>
                </div>
            </b-col>  
            <b-col cols="12" md="4" xl="2">
                <div class="title-group pb-2">
                    <img :src="require('../images/openmoji_beer-mug.svg')" alt="banket">
                    <span class="title-group__text">Пятница, вечер</span>
                </div>
            </b-col> 
            <b-col cols="12" md="4" xl="3">
                <div class="title-group pb-2">
                    <img :src="require('../images/openmoji_two-wine-glass.svg')" alt="banket">
                    <span class="title-group__text">Романтический ужин</span>
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
        right: 21%;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
        border-radius: 0 0 18px 18px;
        max-width: 1250px;
        width: 100%;
        z-index: 1000;
    }
</style>