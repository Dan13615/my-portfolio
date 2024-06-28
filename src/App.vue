<script setup>
import { RouterLink, RouterView } from 'vue-router';
import TheHeader from './components/TheHeader.vue';
</script>

<template>
    <TheHeader />
    <div class="min-h-screen flex justify-center transition-all">
        <RouterView />
    </div>
</template>

<style></style>
