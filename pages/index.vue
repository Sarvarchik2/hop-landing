<template>
    <div class="hop">
        <div class="hop-header">
                <img class="decor-krug krug-sec-left" src="@/assets/krug.svg" alt="">
            <img class="decor-krug krug-sec-right" src="@/assets/krug.svg" alt="">
            <h1><span>{{ t('hero.title.prefix') }}</span>{{ t('hero.title.suffix') }}</h1>
            <p><span>{{ t('hero.subtitle.bold') }}</span>{{ t('hero.subtitle.tail') }}</p>
            <div class="hop-header-btns">
                <NuxtLink to="/" class="btn-primary">
                    {{ t('hero.cta.primary') }}
                </NuxtLink>
                <NuxtLink to="/" class="btn-secondary">
                    {{ t('hero.cta.secondary') }}
                </NuxtLink>
            </div>
            <img class="hop-header-img" src="@/assets/header-bottom.svg" alt="hop-taxi">
        </div>
        <section class="hop-service">
            <img class="hop-service-img" src="@/assets/service-bg.svg" alt="">
            <img class="decor-krug krug-service-left" src="@/assets/krug.svg" alt="">
            <img class="decor-krug krug-service-right" src="@/assets/krug.svg" alt="">
            <h2>{{ t('service.about') }} <span>Hop Taxi</span></h2>
            <div class="hop-services-wrapper">
                <div class="hop-services-item">
                    <h3>
                        <span>{{ t('service.c1.l1') }}</span><br />
                        {{ t('service.c1.l2') }}
                    </h3>
                    <img src="@/assets/services/3.svg" alt="">
                </div>
                <div class="hop-services-item">
                    <h3>
                        <span>{{ t('service.c2.l1') }}</span><br />
                        {{ t('service.c2.l2') }}
                    </h3>
                    <img src="@/assets/services/4.svg" alt="">
                </div>


                <div class="hop-services-item">
                    <h3>
                        <span>{{ t('service.c3.l1') }}</span><br />
                        {{ t('service.c3.l2') }}
                    </h3>
                    <img src="@/assets/services/1.svg" alt="">
                </div>
                <div class="hop-services-item">
                    <h3>
                        <span>{{ t('service.c4.l1') }}</span><br />
                        {{ t('service.c4.l2') }}
                    </h3>
                    <img src="@/assets/services/2.svg" alt="">
                </div>
            </div>
            <img class="hop-header-img" src="@/assets/header-bottom.svg" alt="hop-taxi">

        </section>


        <section class="hop-passangers">
            <img class="hop-service-img" src="@/assets/service-bg.svg" alt="">
            <img class="decor-krug krug-pass-left" src="@/assets/krug.svg" alt="">
            <img class="decor-krug krug-pass-right" src="@/assets/krug.svg" alt="">
            <h2>{{ t('passengers.title') }}</h2>
            <div class="passangers-grid">
                <div class="passangers-item">
                    <h3><span>{{ t('passengers.c1.l1') }}</span><br /> {{ t('passengers.c1.l2') }}</h3>
                    <img src="@/assets/p1.svg" alt="">
                </div>
                <div class="passangers-item">
                    <h3><span>{{ t('passengers.c2.l1') }}</span><br /> {{ t('passengers.c2.l2') }}</h3>
                    <img src="@/assets/p2.svg" alt="">
                </div>
                <div class="passangers-item">
                    <h3><span>{{ t('passengers.c3.l1') }}</span><br /> {{ t('passengers.c3.l2') }}</h3>
                    <img src="@/assets/p3.svg" alt="">
                </div>
            </div>

            <NuxtLink to="/" class="btn-primary passangers-cta">{{ t('passengers.cta') }}</NuxtLink>
            <img class="hop-header-img" src="@/assets/header-bottom.svg" alt="hop-taxi">

        </section>
        <section class="hop-passangers">
                <img class="decor-krug krug-sec-left" src="@/assets/krug.svg" alt="">
            <img class="decor-krug krug-sec-right" src="@/assets/krug.svg" alt="">
            <img class="hop-service-img" src="@/assets/service-bg.svg" alt="">
            <h2>{{ t('drivers.title') }}</h2>
            <p>{{ t('drivers.subtitle') }}</p>
            <div class="passangers-grid">
                <div class="passangers-item">
                    <h3>{{ t('drivers.c1') }}</h3>
                    <img src="@/assets/v1.svg" alt="">
                </div>
                <div class="passangers-item">
                    <h3>{{ t('drivers.c2') }}</h3>
                    <img src="@/assets/v2.svg" alt="">
                </div>
                <div class="passangers-item">
                    <h3>{{ t('drivers.c3') }}</h3>
                    <img src="@/assets/v3.svg" alt="">
                </div>
            </div>
            <NuxtLink to="/" class="btn-primary passangers-cta">{{ t('drivers.cta') }}</NuxtLink>
            <img class="hop-header-img" src="@/assets/header-bottom.svg" alt="hop-taxi">

        </section>
        <section class="hop-security">
            <img class="hop-service-img" src="@/assets/service-bg.svg" alt="">
            <h2>{{ t('security.title') }}</h2>
            <img class="decor-krug krug-sec-left" src="@/assets/krug.svg" alt="">
            <img class="decor-krug krug-sec-right" src="@/assets/krug.svg" alt="">
            <div class="security-grid">
                <img class="hop-security-img" src="@/assets/sp2.svg" alt="">
                <div class="sec-item sec-verified">
                    <h3><span>{{ t('security.c1.l1') }}</span> {{ t('security.c1.l2') }}</h3>
                    <img src="@/assets/s1.svg" alt="verified placeholder">
                </div>
                <div class="sec-item sec-support">
                    <h3><span>{{ t('security.c2.l1') }}</span> {{ t('security.c2.l2') }}</h3>
                    <img src="@/assets/s2.svg" alt="support placeholder">
                </div>
                <div class="sec-item sec-geo">
                    <h3><span>{{ t('security.c3.l1') }}</span> {{ t('security.c3.l2') }}</h3>
                    <img src="@/assets/s3.svg" alt="geo placeholder">
                </div>
                <div class="sec-item sec-payments">
                    <h3><span>{{ t('security.c4.l1') }}</span> {{ t('security.c4.l2') }}</h3>
                    <img src="@/assets/s4.svg" alt="payments placeholder">
                </div>
                <img class="hop-security-img" src="@/assets/sp1.svg" alt="">

            </div>

        </section>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()
</script>

<style>
@import './index.css';
</style>
