<template>
    <div class="mainScreen">
        <header-main-screen @openAutorization="openAutorization" @visible="visibleFilter" @backToMain="backToMain"></header-main-screen>
        <sorting v-if="isVisibleFilter"></sorting>
        <div class="fixed-container sorting-viewAclo">
            <div style="margin: 30px;">
                <filter-filter ></filter-filter>
            </div>
            <view-alco v-if="isVisibleMain"></view-alco>
        </div>
        <!-- Каталог после поиска -->
        <!-- <div class="fixed-container">
            <top-panel-catalog></top-panel-catalog>
            <div class="flex-container catalogEdit">
                <filter-filter></filter-filter>
                <catalog></catalog>
            </div>
        </div> -->
        <footer-container></footer-container>
        <!-- Модальное окно авторизации -->
        <login-login 
        ></login-login>
        <!-- Модальное окно регистрации -->
        <register
        ></register>
        <!-- Модальное окно восставноление пароля -->
        <recovery 
            v-show="recovery === true"
            class="modalRecovery"
        ></recovery>
        <!-- бекграунд при открытие модальных окан авто и регистрации -->
    </div>
</template>
<script>
    import headerMainScreen from "./headerMainScreen/headerMainScreen"
    import filter from './filter/filter'
    import sorting from './sorting/sorting'
    import viewAlco from './viewAlcohol/viewAlcohol'
    import login from '../login/login'
    import register from '../register/register'
    import recovery from '../recovery/recovery'
    import footer from  './footer/footer'
    // import topPanelCatalog from './topPanelCatalog/topPanelCatalog'
    // import catalog from './catalog/catalog'
    import {mapGetters, mapMutations} from 'vuex'
    export default {
        data(){
            return {
                recovery: false,
                back: false,
                user: {},
                userReg: null,
                token: null,
                testTestGet: null,
                isVisibleFilter: false,
                isVisibleMain: true
            }
        },
        computed: mapGetters(['conclusionLogIn', 'conclusionBackground']),
        components: {
            'header-main-screen': headerMainScreen,
            "filter-filter": filter,
            sorting,
            'view-alco': viewAlco,
            "login-login":login,
            register,
            recovery,
            "footer-container": footer,
            // 'top-panel-catalog':topPanelCatalog,
            // catalog
            
        },
        methods: {
            ...mapMutations(['openWindowAuto', 'closeWindwoAuto']),
            closeAutorization(){ // Тыкнуть на задний фон и закрыть все окна
                this.closeWindwoAuto();
            },
            openAutorization(){// открыть авторизацию
                this.openWindowAuto();
            },
        },
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
    .modalRecovery{
        right: 0;
        z-index: 1000;
        position: fixed;
        margin: auto;
        top: 40%;
        left: 0;
    }
    .blackout{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #464646;
        opacity: 0.4;
    }
    .catalogEdit{
        align-items: flex-start;
    }
    .mainScreen{
        background: #F5F5F5;
    }
</style>