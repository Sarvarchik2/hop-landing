<template>
    <div class="navbar">
        <div class="logo">
            <img src="@/assets/logo.svg" alt="hopt taxi logo">
        </div>
        <ul class="navbar-list">
            <NuxtLink to="/">
                <li>
                    О сервисе
                </li>
            </NuxtLink>
            <NuxtLink to="/">
                <li>
                    Для пассажиров
                </li>
            </NuxtLink>
            <NuxtLink to="/">
                <li>
                    Для водителей
                </li>
            </NuxtLink>
            <NuxtLink to="/">
                <li>
                    Поддержка
                </li>
            </NuxtLink>
        </ul>
        <div class="navbar-actions">
            <div class="navbar-lang">
                
            </div>
            <NuxtLink to="/" class="login-btn">
                <img src="@/assets/login.svg" alt="hoptaxi login">
                    Войти
            </NuxtLink>
        </div>

    </div>
</template>


<style>
@import './navbar.css';
</style>