<template>
    <b-row class="shadow1 py-2 justify-content-between nav-panel mx-1">
        <b-col>
            <div class="title">
                <img :src="icon" alt="icon"> <!--Сюда надо передавть путь до картинки(props: icon) и использовать его, тогда будет один универскальный компонент -->
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

.title{
    color: #000000;
    font-size: 28px;
}

.nav-panel{
    border-radius: 14px;
}

.shadow1 {
    box-shadow: 0 0.1rem 0.7rem rgba(0, 0, 0, 0.15) !important;
    background: #ffffff;
}
</style>