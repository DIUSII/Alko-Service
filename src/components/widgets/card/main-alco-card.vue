<template>
    <b-col cols="12" md="6" xl="4">
        <router-link class="alco-card" :to="{name: 'shops'}">
            <b-card 
            class="mx-2 my-3 shadow alco-card__content"
        >
            <b-row>
                <b-col>
                    <div class="star">
                        <span class="pr-1">4.2</span> <!-- здеся рейтинг c БД как будет -->
                        <img src="./images/Star 1.svg" alt="star">
                    </div>
                    <div class="comment">
                        <span class="pr-1">34</span> <!--  коменты сюда c БД как будет -->
                        <img src="./images/bx_bx-comment-detail.svg" alt="comment">
                    </div>
                </b-col>
                <b-col>
                    <b-img src="https://picsum.photos/74/238/?image=25" class="product-img" fluid alt="image"></b-img> <!-- фотка затычка можно использовать просто img -->
                </b-col>
                <b-col class="text-right">
                   <img src="./images/like.svg" alt="like">
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" class="mb-2">
                    <p class="mb-0 mt-4">Красное полусладкое</p> <!-- Что-то от Бэка как будет  -->
                    <hr class="mt-0 mb-1">
                    <p id="title">{{product.title}}</p>
                    <p class="mb-0">{{product.vel}}л &#183; {{product.ethanol}}%</p>
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
        &:hover{
            background: #45988E;
        }
    }
    &:hover{
        text-decoration: none;
    }
}

.shadow {
    box-shadow: 0 0.1rem 0.7rem rgba(0, 0, 0, 0.15) !important;
}

.comment, .star{
    font-family: Rubik, sans-serif;
    display: flex;
    align-items: center;
    font-size: 20px;
}

.star{
    color: #000000;
}

#title{
    font-size: 20px;
    font-family: Rubik, sans-serif;
    color: #2C2C2C;
}

p{
    font-size: 14px;
}

// .product-img{
//     width: 71px;
//     height: 255px;
// }

</style>