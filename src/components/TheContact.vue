<script setup>
import { ref } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookF, faInstagram, faLinkedin, faGithub);

const email = ref('daniil.stepanov@epitech.eu');
const instagram = ref('https://www.instagram.com/dan13615_/');
const facebook = ref('https://www.facebook.com/daniil.stepanov.311');
const github = ref('https://www.github.com/Dan13615/');
const linkedin = ref('https://www.linkedin.com/in/daniil-stepanov-89a98715a');
</script>

<template>
    <ContactItem>
        <div class="flex flex-col md:flex-row px-6">
            <div class="text-center md:text-left md:pr-6">
                <p class="font-bold text-5xl md:text-6xl lg:text-8xl">Contact <span class="text-primary">Me !</span></p>
            </div>
            <div class="text-center pt-20 w-full md:w-3/5 md:pt-0">
                <div class="social-media-links mb-10">
                    <a class="inline-flex justify-center items-center w-16 h-16 bg-transparent border-primary border-solid border-4 rounded-full m-3 text-4xl text-primary shadow-custom2 transition duration-150 ease-out hover:ease-in hover:shadow-none" :href="facebook">
                        <font-awesome-icon :icon="['fab', 'facebook-f']" />
                    </a>
                    <a class="inline-flex justify-center items-center w-16 h-16 bg-transparent border-primary border-solid border-4 rounded-full m-3 text-4xl text-primary shadow-custom2 transition duration-150 ease-out hover:ease-in hover:shadow-none" :href="instagram">
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                    </a>
                    <a class="inline-flex justify-center items-center w-16 h-16 bg-transparent border-primary border-solid border-4 rounded-full m-3 text-4xl text-primary shadow-custom2 transition duration-150 ease-out hover:ease-in hover:shadow-none" :href="linkedin">
                        <font-awesome-icon :icon="['fab', 'linkedin']" />
                    </a>
                    <a class="inline-flex justify-center items-center w-16 h-16 bg-transparent border-primary border-solid border-4 rounded-full m-3 text-4xl text-primary shadow-custom2 transition duration-150 ease-out hover:ease-in hover:shadow-none" :href="github">
                        <font-awesome-icon :icon="['fab', 'github']" />
                    </a>
                </div>
                <a href="/cv-daniil.pdf" download="CV-Daniil-Stepanov" class="inline-block px-10 py-6 bg-primary rounded-full shadow-custom2 font-black text-3xl tracking-widest transition duration-150 ease-out hover:ease-in hover:shadow-none">Download CV</a>
                <p class="py-10 text-lg md:text-xl lg:text-2xl">
                    <a class="text-primary text-2xl md:text-3xl" :href="`mailto:${my_email}`"> {{ email }} </a>
                </p>
            </div>
        </div>
    </ContactItem>
</template>

<style scoped></style>
