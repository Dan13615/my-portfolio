<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <div class="bg-gradient-to-b from-gray-400 p-2">
        <header class="p-2 w-full flex flex-row justify-between">
            <div>
                <p class="text-2xl">INSERT LOGO</p>
            </div>
            <div>
                <nav class="font-bold w-full flex gap-5">
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/projects">My Projects</RouterLink>
                    <RouterLink to="/contact">Contact</RouterLink>
                </nav>
            </div>
        </header>
    </div>
    <div class="min-h-screen flex justify-center transition-all pt-64">
        <RouterView />
    </div>
    <div class="bg-gradient-to-t from-gray-400 p-2">
        <footer class="p-2 w-full text-left">
            <p class="font-bold">&copy; 2024 Daniil Stepanov</p>
        </footer>
    </div>
</template>
