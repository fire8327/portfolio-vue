<template>
    <header class="flex items-center justify-between p-4 container mx-auto">
        <RouterLink :to="{name:'home'}">
            <img src="Images/header/logo.jpg" alt="" class="rounded-full w-16">
        </RouterLink>
        <div class="flex items-center gap-6 text-slate-400">
            <RouterLink :to="{name:'home'}" class="[&.router-link-active]:text-white [&.router-link-active]:font-semibold [&.router-link-active]:after:w-full delay-100 transition-all duration-500 after:delay-100 after:duration-500 after:transition-all flex flex-col after:bg-white after:w-0 after:h-px after:rounded-full hover:after:w-full hover:text-white">Главная</RouterLink>
            <RouterLink :to="{name:'home'}" class="[&.router-link-active]:text-white [&.router-link-active]:font-semibold [&.router-link-active]:after:w-full delay-100 transition-all duration-500 after:delay-100 after:duration-500 after:transition-all flex flex-col after:bg-white after:w-0 after:h-px after:rounded-full hover:after:w-full hover:text-white">Примеры работ</RouterLink>
            <RouterLink :to="{name:'home'}" class="[&.router-link-active]:text-white [&.router-link-active]:font-semibold [&.router-link-active]:after:w-full delay-100 transition-all duration-500 after:delay-100 after:duration-500 after:transition-all flex flex-col after:bg-white after:w-0 after:h-px after:rounded-full hover:after:w-full hover:text-white">Обо мне</RouterLink>
            <RouterLink :to="{name:'home'}" class="[&.router-link-active]:text-white [&.router-link-active]:font-semibold [&.router-link-active]:after:w-full delay-100 transition-all duration-500 after:delay-100 after:duration-500 after:transition-all flex flex-col after:bg-white after:w-0 after:h-px after:rounded-full hover:after:w-full hover:text-white">Фишки Api</RouterLink>
            <RouterLink :to="{name:'home'}" class="[&.router-link-active]:text-white [&.router-link-active]:font-semibold [&.router-link-active]:after:w-full delay-100 transition-all duration-500 after:delay-100 after:duration-500 after:transition-all flex flex-col after:bg-white after:w-0 after:h-px after:rounded-full hover:after:w-full hover:text-white">Облако</RouterLink>
        </div>
    </header>
</template>

<script setup>
    import { RouterLink} from 'vue-router'
</script>
