<template>
    <main>
        <div class="title-container">
            <div class="title font-bold text-xl sm:text-2xl md:text-5xl lg:text-7xl">
                <p>My personnal<span class="span text-xl sm:text-3xl md:text-6xl lg:text-8xl"> Projects !</span></p>
            </div>
        </div>

        <div class="projects">
            <LFS-Project />
        </div>
    </main>
</template>

<script setup>
import LFSProject from '@/components/LFS-Project.vue';
</script>

<style scoped>
.span {
    color: #0ef;
}

.title-container {
    position: fixed;
    top: 40%;
    left: 0%;
    right: 50%;
    display: flex;
    justify-content: center;
}

.title {
    max-width: 60%;
    text-align: left;
}

.projects {
    margin-left: 50%;
    display: flex;
    flex-direction: column;
}
</style>
