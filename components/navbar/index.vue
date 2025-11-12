<template>
    <nav class="navbar" :class="{ open: menuOpen }">
        <div class="logo">
            <img src="@/assets/logo.svg" alt="Hop Taxi logo">
        </div>

        <button class="burger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
            <span></span><span></span><span></span>
        </button>

        <ul class="navbar-list">
            <NuxtLink to="/">
                <li>О сервисе</li>
            </NuxtLink>
            <NuxtLink to="/">
                <li>Для пассажиров</li>
            </NuxtLink>
            <NuxtLink to="/">
                <li>Для водителей</li>
            </NuxtLink>
            <NuxtLink to="/">
                <li>Поддержка</li>
            </NuxtLink>
            <NuxtLink to="/documents">
                <li>Документы</li>
            </NuxtLink>
        </ul>

        <div class="navbar-actions">
            <div class="navbar-lang">
                <select v-model="lang" class="lang-select" aria-label="Language">
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                </select>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const menuOpen = ref(false)
const lang = ref<'ru' | 'en'>('ru')

// Stub: you can replace with real i18n later
watch(lang, (val) => {
  document.documentElement.setAttribute('lang', val)
})
</script>


<style>
@import './navbar.css';
</style>