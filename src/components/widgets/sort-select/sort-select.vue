<template>
    <b-col class="mr-5">
        <b-row class="select px-4 justify-content-end">
            <b-col cols="12" class="select-head px-4 py-3 justify-content-center">
                <p class="mb-0 pr-2 py-2">Сортировать по: </p>
                <p @click="noVisible" class="py-2 mb-0 pr-2" id="selected">{{selected}}</p>            
                <img src="./Vector (1).svg" alt="arrow" @click="noVisible">
            </b-col>
            <b-row class="pr-3">
                <b-col cols="12" class="options mt-2 py-2" :class="{show: isOptionVisible}">
                    <div class=" px-3 py-1 option"                 
                        v-for="option in options" 
                        :key="option.value" 
                        @click="selectOption(option)">
                            
                        <p class=" mb-0">{{option.name}}</p>                    
                    </div>
                </b-col>
            </b-row>
        </b-row>
    </b-col>
</template>

<script>

export default {
    data(){
        return {
            isOptionVisible: false,
        }
    },
    props:{
        options:{ 
            type: Array,
            default(){
                return[]
            }
        },
        selected:{
            type:String,
            default:'Популярности'
        },
    },
    components:{

    },
    computed:{

    },
    methods:{
        selectOption(option){
            this.$emit('select', option)
            this.isOptionVisible = false
        },
        noVisible(){
            this.isOptionVisible = !this.isOptionVisible
            this.$emit('isvisble', this.isOptionVisible)
        },
    },

}
</script>
<style lang="scss">
    
.select-head{
    background: #ffffff;
    border-radius: 20px;
    display: flex;
    color: #606060;
    font-size: 20px;
    font-family: Rubik, sans-serif;
    font-weight: bold;
    box-shadow: 0 0.1rem 0.7rem rgba(0, 0, 0, 0.15) !important;
}

#selected{
    font-weight: 300;
}
.options{
    background: #ffffff;
    display: none;
    border-radius: 20px;
    font-weight: 300;
    box-shadow: 0 0.1rem 0.7rem rgba(0, 0, 0, 0.15) !important;

}
.show{
    display: block;
}

.option{
    font-family: Rubik, sans-serif;
    color: #606060;
    font-size: 20px;
    &:hover{
        color: #45988E;
    }
}
</style>