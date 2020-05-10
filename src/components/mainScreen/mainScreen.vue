<template>
    <div class="mainScreen">
        <header-main-screen></header-main-screen>
        <filter-filter></filter-filter>
        <div class="fixed-container sorting-viewAclo">
            <sorting></sorting>
            <view-alco></view-alco>
        </div>
        <login-login class="modalLogin"></login-login>
        <div class="blackout"></div>
    </div>
</template>
<script>
    import headerMainScreen from "./headerMainScreen/headerMainScreen"
    import filter from './filter/filter'
    import sorting from './sorting/sorting'
    import viewAlco from './viewAlcohol/viewAlcohol'
    import login from '../login/login'
    export default {
        components: {
            'header-main-screen': headerMainScreen,
            "filter-filter": filter,
            sorting,
            'view-alco': viewAlco,
            "login-login":login,
            
        }
    }
</script>
<style lang="scss">
    .sorting-viewAclo{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .flex-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .fixed-container{
        max-width: 1500px;
        margin: 0 auto;
    }
    .modalLogin{
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }
    .blackout{
        z-index: 800;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: #3F3F3F;
        opacity: 0.5;
    }
</style>