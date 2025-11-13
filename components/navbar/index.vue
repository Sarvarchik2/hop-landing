<template>
    <nav class="navbar" :class="{ open: menuOpen }">
        <div class="logo">
            <img src="@/assets/logo.svg" alt="Hop Taxi logo">
        </div>



        <ul class="navbar-list">
            <NuxtLink to="/" @click="menuOpen = false"><li>{{ t('nav.about') }}</li></NuxtLink>
            <NuxtLink to="/" @click="menuOpen = false"><li>{{ t('nav.passengers') }}</li></NuxtLink>
            <NuxtLink to="/" @click="menuOpen = false"><li>{{ t('nav.drivers') }}</li></NuxtLink>
            <NuxtLink to="/" @click="menuOpen = false"><li>{{ t('nav.support') }}</li></NuxtLink>
        </ul>

        <div class="navbar-actions">
          
            <div class="navbar-lang">
                <select v-model="localeProxy" class="lang-select" aria-label="Language">
                    <option value="uz">UZ</option>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                </select>
            </div>
              <button class="burger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
                <span></span><span></span><span></span>
            </button>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from '@/composables/useI18n'

const menuOpen = ref(false)
const { locale, setLocale, t } = useI18n()

const localeProxy = computed({
    get: () => locale.value,
    set: (val) => setLocale(val)
})
</script>


<style>
@import './navbar.css';
</style>