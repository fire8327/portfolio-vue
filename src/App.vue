<template>
  <Header></Header>
  <RouterView />
  <Totop></Totop>
  <Footer></Footer>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import Totop from '@/components/Totop.vue';
</script>
