<template>
    <div class="mainScreen">
        <header-main-screen></header-main-screen>
    </div>
</template>
<script>
    import headerMainScreen from "./headerMainScreen/headerMainScreen"
    export default {
        components: {
            'header-main-screen': headerMainScreen,
        }
    }
</script>
<style lang="scss">

    .flex-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .fixed-container{
        max-width: 1500px;
        margin: 0 auto;
    }
</style>