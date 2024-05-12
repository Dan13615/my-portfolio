<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookF, faInstagram, faLinkedin, faGithub);

export default {
    components: {
        FontAwesomeIcon
    },

    data() {
        return {
            name: 'Daniil Stepanov',
            poste: 'Embedded Software Developper',
            passion: 'low level programming, embedded systems and Linux systems',
            goals: 'an internship',
            windowWidth: 0
        };
    },
    computed: {
        isNotSmallScreen() {
            return this.windowWidth > 640;
        }
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    unmounted() {
        window.removeEventListener('resize', this.handleResize);
    }
};
</script>

<template>
    <WelcomeItem>
        <div class="centered-container">
            <div class="content-container">
                <div>
                    <div>
                        <p class="text-xl md:text-xl lg:text-5xl">Hello I'm</p>
                        <p class="text-2xl md:text-4xl lg:text-7xl">{{ name }}</p>
                        <p class="text-sm md:text-lg lg:text-4xl">
                            I'm a <span class="span">{{ poste }}</span>
                        </p>
                    </div>

                    <div class="py-10">
                        <p class="text-xs md:text-sm lg:text-base">I am passionnate about {{ passion }}.</p>
                        <p class="text-xs md:text-sm lg:text-base">I am currently looking for {{ goals }} in these fields.</p>
                    </div>
                </div>

                <div class="px-10" v-show="isNotSmallScreen"></div>

                <div class="flex-1 text-center">
                    <a class="social-media" href="https://www.facebook.com/daniil.stepanov.311">
                        <font-awesome-icon :icon="['fab', 'facebook-f']" />
                    </a>
                    <a class="social-media" href="https://www.instagram.com/dan13615_/">
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                    </a>
                    <a class="social-media" href="https://www.linkedin.com/in/daniil-stepanov-89a98715a">
                        <font-awesome-icon :icon="['fab', 'linkedin']" />
                    </a>
                    <a class="social-media" href="https://www.github.com/Dan13615/">
                        <font-awesome-icon :icon="['fab', 'github']" />
                    </a>
                    <a href="#" class="button">Download CV</a>
                </div>
            </div>
        </div>
    </WelcomeItem>
</template>

<style scoped>
.centered-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
}

.span {
    color: #0ef;
}

.social-media {
    color: #0ef;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    background: transparent;
    border: 0.2rem solid #0ef;
    border-radius: 50%;
    font-size: 2rem;
    margin: 3rem 1.5rem 3rem 0.2rem;
    transition: 0.5s ease;
}

.social-media a:hover {
    background: #0ef;
    color: rgb(255, 255, 255);
    box-shadow: 0 0 1rem #0ef;
}

.button {
    display: inline-block;
    padding: 1rem 2.8rem;
    background: #0ef;
    border-radius: 4rem;
    box-shadow: 0 0 1rem #0ef;
    font-size: 1.6rem;
    color: rgb(255, 255, 255);
    letter-spacing: 0.1rem;
    font-weight: 1000;
    transition: 0.5s ease;
}

.button:hover {
    box-shadow: none;
}

.content-container {
    display: flex;
    flex-direction: row;
}

@media (max-width: 1024px) {
    .content-container {
        flex-direction: column;
        text-align: center;
    }

    .button {
        background: #0ef;
        box-shadow: 0 0 0.7rem #0ef;
        color: rgb(255, 255, 255);
        display: inline-block;
        padding: 0.3rem 1rem;
        border-radius: 4rem;
        font-size: 1rem;
        letter-spacing: 0.1rem;
        font-weight: 1000;
        transition: 0.5s ease;
    }

    .social-media {
        color: #0ef;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        background: transparent;
        border: 0.2rem solid #0ef;
        border-radius: 50%;
        font-size: 1rem;
        margin: 2rem 1rem 2rem 1rem;
        transition: 0.5s ease;
    }

    .social-media a:hover {
        background: #0ef;
        color: rgb(255, 255, 255);
        box-shadow: 0 0 1rem #0ef;
    }
}
</style>
