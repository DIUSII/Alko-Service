<template>
    <b-row class="shadow py-2 justify-content-between nav-panel">
        <b-col>
            <div class="title">
                <img src="./images/ps_sale-tag.svg" alt="icon">  <!-- Сюда надо передавть путь до картинки(props: icon) и использовать его, тогда будет один универскальный компонент-->
                <span class="title__text pl-2">{{titleValue}}</span>
            </div>
        </b-col>
        <b-col xl="2" class="text-right">
            <p class="show-all mt-2 mb-0">Показать всё</p>
        </b-col>
    </b-row>
</template>

<script>



export default {
    data(){
        return {

        }
    },
    components:{
        
    },
    props:{
        icon:{
            type: String,
            default(){
                return ''
            }
        },
        titleValue:{
            type: String,
            default(){
                return ''
            }
        }
    },
    mounted(){
        console.log(this.icon)
    }
}
</script>
<style lang="scss">
.show-all{
    color: #45988E;
    &:hover{
        color: #45988E;
        text-decoration: none;
    }
}

.nav-panel{
    border-radius: 14px;
}
</style>