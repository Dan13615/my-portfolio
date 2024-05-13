<template>
    <main>
        <div class="title-container">
            <div class="title font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
                <p>My personnal<span class="text-primary text-4xl sm:text-5xl md:text-6xl lg:text-8xl"> Projects !</span></p>
            </div>
        </div>

        <div class="projects">
            <ProjectComponent title="Linux From Scratch Project" description="Linux From Scratch (LFS) is a project that provides you with step-by-step instructions for building your own custom Linux system, entirely from source code." picture="/src/assets/lfs.png" />
            <ProjectComponent title="C Library" description="This is a library that I am making in C and Assembly, inspired by the C standart library. It is gonna contain a lot of functions that I am using in my projects." github-link="https://github.com/Dan13615/my-C-library" picture="/src/assets/C-logo.png" />
            <ProjectComponent title="Arduino Car (Radio Frequence 2.4GHz)" description="This is a project that I made with my friend. We made a car that can be controlled with a remote control. The car is made with an Arduino Uno and a motor shield. The remote control is made with an Arduino Nano and a NRF24L01 module." github-link="https://github.com/Dan13615/TututMobile" picture="/src/assets/arduino_logo.png" />
        </div>
    </main>
</template>

<script setup>
import ProjectComponent from './../components/ProjectComponent.vue';
</script>

<style scoped>
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
