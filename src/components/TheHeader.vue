<template>
    <HeaderItem>
        <div class="text-sm lg:text-xl">
            <div class="p-2 w-full flex flex-row justify-between fixed">
                <div>
                    <RouterLink to="/" class="font-bold">HOME</RouterLink>
                </div>
                <div>
                    <nav class="font-bold w-full flex gap-5">
                        <RouterLink to="/projects">PROJECTS</RouterLink>
                        <RouterLink to="/contact">CONTACT</RouterLink>
                    </nav>
                </div>
            </div>
        </div>
    </HeaderItem>
</template>

<script setup></script>

<style scoped></style>
