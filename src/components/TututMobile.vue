<template>
    <div class="box">
        <p class="text-xl md:text-2xl lg:text-4xl pb-5 title">{{ project.title }}</p>
        <p class="text-base md:text-lg lg:text-2xl">{{ project.description }}</p>
        <img class="picture" :src="project.picture" alt="Project Picture" />
        <a class="button text-base md:text-lg lg:text-2xl" :href="project.githubLink">GitHub Link</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            project: {
                title: 'Arduino Car (Radio Frequence 2.4GHz)',
                description: 'This is a project that I made with my friend. We made a car that can be controlled with a remote control. The car is made with an Arduino Uno and a motor shield. The remote control is made with an Arduino Nano and a NRF24L01 module.',
                githubLink: 'https://github.com/Dan13615/TututMobile',
                picture: '/src/assets/arduino_logo.png'
            }
        };
    }
};
</script>

<style scoped>
.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 90%;
    padding: 1rem;
    color: white;
    background: rgba(57, 62, 70, 0.8);
    border-radius: 0.8rem;
    margin: 1rem;
    resize: none;
}

.title {
    color: #0ef;
    font-weight: bold;
}

.button {
    display: inline-block;
    padding: 0.8rem 2rem;
    background: #0ef;
    border-radius: 4rem;
    box-shadow: 0 0 1rem #0ef;
    color: rgb(255, 255, 255);
    letter-spacing: 0.1rem;
    font-weight: 1000;
    transition: 0.5s ease;
}

.button:hover {
    box-shadow: none;
}

.picture {
    margin: 1rem;
    width: 60%;
    height: 60%;
}

@media (max-width: 1024px) {
    .button {
        display: inline-block;
        padding: 0.6rem 1.5rem;
        background: #0ef;
        border-radius: 4rem;
        box-shadow: 0 0 1rem #0ef;
        color: rgb(255, 255, 255);
        letter-spacing: 0.1rem;
        font-weight: 1000;
        transition: 0.5s ease;
    }

    .picture {
        margin: 1rem;
        width: 90%;
        height: 90%;
    }
}
</style>
