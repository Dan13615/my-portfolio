<template>
    <main>
        <div class="title-container">
            <div class="title font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
                <p>My personnal<span class="span text-4xl sm:text-5xl md:text-6xl lg:text-8xl"> Projects !</span></p>
            </div>
        </div>

        <div class="projects">
            <LFSProject />
            <CLibrary />
            <TututMobile />
        </div>
    </main>
</template>

<script setup>
import LFSProject from '@/components/LFS-Project.vue';
import CLibrary from '@/components/C-Library.vue';
import TututMobile from '@/components/TututMobile.vue';
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

@media (max-width: 1024px) {
    .title-container {
        position: static;
        right: auto;
        top: auto;
        left: auto;
        margin-bottom: 8%;
    }

    .projects {
        margin-left: 0;
    }
}
</style>
