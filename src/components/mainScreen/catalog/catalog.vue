<template>
    <div class="catalog ">
        <div class="flex-container catalog__container">
            <card v-for="item in array" :key="item.id" ></card>
        </div>
    </div>
</template>
<script>
    import card from '../../widgets/card/main-alco-card'
    export default {
        components: {
            card,
        },
        data(){
            return {
                array: [
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                ]
            }
        }
    }
</script>
<style lang="scss">
    .catalog{
        &__container{
            margin-left: 25px;
            width: 100%;
            flex-wrap: wrap;
        }
    }
</style>