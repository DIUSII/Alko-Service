<template>
    <button :id="id" class="download w-100 py-2" @click="action">Загрузить ещё</button>
</template>

<script>

export default {
    name: 'button-main',
    props:{
        id:{
            type: String,
            default(){
                return null
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
    color: #000000;
    font-size: 20px;
    font-family: Rubik, sans-serif;
}

</style>
