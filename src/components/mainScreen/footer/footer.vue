<template>
    <div class="footer">
        <div class="footer__container flex-container">
            <div class="footer__logo flex-container">
                <img src="./images/white-wineglass.svg" alt="white-wineglass" class="footer__img-logo">
                <span class="footer__span-logo">ЛОГО</span>
            </div>
            <p class="footer__warning">18+ МИНЗДРАВ РОССИИ ПРЕДУПРЕЖДАЕТ: ЧРЕЗМЕРНОЕ УПОТРЕБЛЕНИЕ АЛКОГОЛЯ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ</p>
            <div class="footer__contacts">
                <p class="footer__sub-title">Связаться с нами:</p>
                <div class="footer__call flex-container">
                    <img src="./images/phone.svg" alt="" class="footer__img-phone">
                    <a href="tel:+79990000000" class="footer__phone">8-999-000-00-00</a>
                </div>
                <div class="footer__group-email flex-container">
                    <img src="./images/email-dog.svg" alt="" class="footer__email-dog">
                    <div class="footer__group-text-email">
                        <a href="mailto:fistemail@gmail.com" class="footer__email">fistemail@gmail.com</a>
                        <a href="mailto:secemail@gmail.com" class="footer__email">secemail@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss">
    .footer{
        background: #3C3C3C;
        &__container{
            max-width: 1800px;
            margin: 0 auto;
            padding: 20px 40px;
        }
        &__span-logo{
            font-family: Rubik;
            font-weight: 500;
            font-size: 40px;
            line-height: 47px;
            margin-left: 21px;
            color: #FFFFFF;
        }
        &__warning{
            font-family: Rubik;
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            color: #C7C7C7;
            margin: 0;
        }
        &__sub-title{
            font-family: Montserrat;
            font-weight: bold;
            font-size: 22px;
            line-height: 27px;
            margin: 0;
            margin-bottom: 13px;
            color: #FFFFFF;
        }
        &__call{
            margin-bottom: 13px;
        }
        &__phone{
            font-family: Montserrat;
            font-weight: bold;
            font-size: 20px;
            color: #FFFFFF;
            text-decoration: none;
        }
        &__email{
            font-family: Montserrat;
            font-weight: 500;
            display: block;
            text-decoration: none;
            line-height: 20px;
            color: #FFFFFF;
        }
    }
</style>