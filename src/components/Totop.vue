<template>
    <Transition name="fade">
        <button @click="goToTop" v-show="isShow" class="fixed z-50 bottom-5 md:bottom-8 right-5 md:right-8 border-0 w-12 h-12 rounded-full drop-shadow-md bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 text-white text-3xl font-bold flex items-center justify-center">
            <svg class="w-4" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.35355 0.646447C4.15829 0.451184 3.84171 0.451184 3.64645 0.646447L0.464466 3.82843C0.269204 4.02369 0.269204 4.34027 0.464466 4.53553C0.659728 4.7308 0.976311 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646447ZM4.5 11V1H3.5L3.5 11H4.5Z" fill="white"/>
            </svg>               
        </button>
    </Transition>
</template>

<script setup>
    import { ref } from 'vue';
    let isShow = ref()
    window.onscroll = () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
           isShow.value = true
        } else {
            isShow.value = false
        }
    }

    function goToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>