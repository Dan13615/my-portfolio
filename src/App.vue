<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <div class="text-sm lg:text-xl">
        <header class="p-2 w-full flex flex-row justify-between fixed">
            <div>
                <RouterLink to="/" class="font-bold">HOME</RouterLink>
            </div>
            <div>
                <nav class="font-bold w-full flex gap-5">
                    <RouterLink to="/projects">PROJECTS</RouterLink>
                    <RouterLink to="/contact">CONTACT</RouterLink>
                </nav>
            </div>
        </header>
    </div>
    <div class="min-h-screen flex justify-center transition-all padd">
        <RouterView />
    </div>
</template>

<style scoped>
header {
    background-color: rgba(57, 62, 70, 0.8);
}

nav {
    color: #eeeeee;
}

.padd {
    padding-top: 8rem;
}

@media (min-width: 1024px) {
    .padd {
        padding-top: 16rem;
    }
}
</style>
