<template>
    <div class="hop">
        <div class="hop-header">
            <h1><span>Taxi Bot —</span> ваш надёжный партнёр в поездках</h1>
            <p><span>Быстро, безопасно и удобно — </span>всё, что нужно для комфортной поездки</p>
            <div class="hop-header-btns">
                <NuxtLink to="/" class="btn-primary">
                    Стать пассажиром
                </NuxtLink>
                <NuxtLink to="/" class="btn-secondary">
                    Стать водителем
                </NuxtLink>
            </div>
            <img class="hop-header-img" src="@/assets/header-bottom.svg" alt="hop-taxi">
        </div>
        <section class="hop-service">
            <img class="hop-service-img" src="@/assets/service-bg.svg" alt="">
            <h2>О сервисе <span>Hop Taxi</span></h2>
            <div class="hop-services-wrapper">
                 <div class="hop-services-item">
                    <h3>
                        <span>Быстрый поиск</span><br/>
                        ближайшего водителя
                    </h3>
                    <img src="@/assets/services/3.svg" alt="">
                </div>
                 <div class="hop-services-item">
                    <h3>
                        <span>Удобная оплата</span><br/>
                        картой или наличными
                    </h3>
                    <img src="@/assets/services/4.svg" alt="">
                </div>
               
               
                <div class="hop-services-item">
                    <h3>
                        <span>Безопасность</span><br/>
                        на каждом этапе
                    </h3>
                    <img src="@/assets/services/1.svg" alt="">
                </div>
                   <div class="hop-services-item">
                    <h3>
                        <span>Мгновенные</span><br/>
                        уведомления и трекинг
                    </h3>
                    <img src="@/assets/services/2.svg" alt="">
                </div>
            </div>
            <img class="hop-header-img" src="@/assets/header-bottom.svg" alt="hop-taxi">

        </section>
        
   
        <section class="hop-passangers">
            <img class="hop-service-img" src="@/assets/service-bg.svg" alt="">
            <h2>Для <span>пассажиров</span></h2>
            <div class="passangers-grid">
                <div class="passangers-item">
                    <h3><span>Умное определение</span><br/> маршрута</h3>
                    <img src="@/assets/p1.svg" alt="">
                </div>
                <div class="passangers-item">
                    <h3><span>Прозрачная цена</span><br/> без скрытых комиссий</h3>
                    <img src="@/assets/p2.svg" alt="">
                </div>
                <div class="passangers-item">
                    <h3><span>Мгновенные уведомления</span><br/> о водителе</h3>
                    <img src="@/assets/p3.svg" alt="">
                </div>
            </div>
            
            <NuxtLink to="/" class="btn-primary passangers-cta">Начать поездку</NuxtLink>
            <img class="hop-header-img" src="@/assets/header-bottom.svg" alt="hop-taxi">
        
        </section>
         <section class="hop-passangers">
            <img class="hop-service-img" src="@/assets/service-bg.svg" alt="">
            <h2>Для <span>водилетей</span></h2>
            <p>Зарабатывай с Taxi Bot, работай когда удобно.</p>
            <div class="passangers-grid">
                <div class="passangers-item">
                    <h3>Зарегистрируйся</h3>
                    <img src="@/assets/v1.svg" alt="">
                </div>
                <div class="passangers-item">
                    <h3>Пройди проверку</h3>
                    <img src="@/assets/v2.svg" alt="">
                </div>
                <div class="passangers-item">
                    <h3>Принимай заказы</h3>
                    <img src="@/assets/v3.svg" alt="">
                </div>
            </div>
            <NuxtLink to="/" class="btn-primary passangers-cta">Стать водитлемyfl</NuxtLink>
            <img class="hop-header-img" src="@/assets/header-bottom.svg" alt="hop-taxi">
        
        </section>
             <section class="hop-security">
            <img class="hop-service-img" src="@/assets/service-bg.svg" alt="">
            <h2>Безопасность и <span>надёжность</span></h2>
            <div class="security-grid">
                <div class="sec-item sec-verified">
                    <h3><span>Проверенные</span> водители</h3>
                    <img src="@/assets/s1.svg" alt="verified placeholder">
                </div>
                <div class="sec-item sec-support">
                    <h3><span>24/7</span> поддержка</h3>
                    <img src="@/assets/s2.svg" alt="support placeholder">
                </div>
                <div class="sec-item sec-geo">
                    <h3><span>Геолокация</span> в реальном времени</h3>
                    <img src="@/assets/s3.svg" alt="geo placeholder">
                </div>
                <div class="sec-item sec-payments">
                    <h3><span>Безопасные</span> онлайн-платежи</h3>
                    <img src="@/assets/s4.svg" alt="payments placeholder">
                </div>
            </div>
            <img class="hop-header-img" src="@/assets/header-bottom.svg" alt="hop-taxi">

        </section>
    </div>
</template>

<style>
@import './index.css';
</style>
