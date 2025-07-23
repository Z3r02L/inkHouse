<script setup lang="ts">
import { StagewiseToolbar } from '@stagewise/toolbar-vue';
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Catalog from './components/Catalog.vue';
import Promo from './components/Promo.vue';
import Team from './components/Team.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header/>
  <router-view />
  <Footer/>
  <StagewiseToolbar />
</template>

<style scoped>
</style>
