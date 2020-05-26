<template>
    <b-row class="justify-content-center mt-5">
        <b-col cols="12">
            <navPanel
                titleValue="Сейчас выбирают"
            />
        </b-col>
        <b-col cols="12">
            <card/>
        </b-col>

        <b-col cols="3">
            <btn
                btnValue="Загрузить ещё"
                :block="true"
                class="download"
            />
        </b-col>
    </b-row>
</template>
<script>

import card from '../../widgets/card/main-alco-card'
import btn from '../../widgets/buttons/main-btn'
import navPanel from '../../widgets/nav-main/nav-panel2'

export default {
    data(){
        return {
            
        }
    },
    components:{
        card,
        navPanel,
        btn,
    }
}
</script>
<style lang="scss">
.download{
    border: 2px solid #F6DB68;
    background: #F6DB68;
    border-radius: 24px;
    color: #000000;
}
</style>