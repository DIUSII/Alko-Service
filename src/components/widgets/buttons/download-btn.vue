<template>
    <b-button :block="block" :id="id" class="download" :size="size" @click="action">Загрузить ещё</b-button>
</template>

<script>

export default {
    name: 'button-main',
    props:{
        btnValue:{
            type: String,
            default(){
                return 'button'
            }
        },
        id:{
            type: String,
            default(){
                return null
            }
        },
        block:{
            type: Boolean,
            default(){
                return false
            }
        },
        size:{
            type: String,
            default(){
                return 'lg'
            }
        },
    },
    methods:{
        action(){
           this.$emit('action') 
        }
    }
}
</script>

<style lang="scss">
.download{
    border: 2px solid #F6DB68;
    background: #F6DB68;
    border-radius: 24px;
}

</style>
