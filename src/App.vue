<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <div>
        <div class="bg-gradient-to-b from-slate-800 to-slate-900">
            <header class="p-2 w-full flex flex-row justify-between">
                <div>
                    <p class="text-2xl">INSERT LOGO</p>
                </div>
                <div>
                    <nav class="w-full flex gap-5">
                        <RouterLink to="/">Home</RouterLink>
                        <RouterLink to="/projects">My Projects</RouterLink>
                        <RouterLink to="/contact">Contact</RouterLink>
                    </nav>
                </div>
            </header>
        </div>
        <div class="min-h-screen">
            <RouterView class="flex justify-center transition-all pt-36" />
        </div>
        <div class="bg-gradient-to-t from-slate-800 to-slate-900">
            <footer class="p-2 w-full text-left">
                <p>&copy; 2024 Daniil Stepanov</p>
            </footer>
        </div>
    </div>
</template>
