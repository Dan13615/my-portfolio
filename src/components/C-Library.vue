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
                title: 'C Library',
                description: 'This is a library that I am making in C and Assembly, inspired by the C standart library. It is gonna contain a lot of functions that I am using in my projects.',
                githubLink: 'https://github.com/Dan13615/my-C-library',
                picture: '/src/assets/C-logo.png'
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

.picture {
    width: 40%;
    height: 40%;
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
        width: 60%;
        height: 60%;
    }
}
</style>
