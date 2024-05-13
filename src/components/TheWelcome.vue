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
            aboutme: 'As an Embedded Software Developer, I thrive on the intricacies of low-level programming, the challenges of embedded systems, and the versatility of Linux environments. My passion lies in crafting efficient, robust software solutions that power the next generation of technological advancements.',
            exp: 'In my journey as a software developer, I have honed my skills through hands-on experience and academic pursuits. From designing firmware for microcontrollers to optimizing system performance on Linux platforms, I have tackled diverse projects that have deepened my understanding of embedded systems.',
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
                <div class="text-container">
                    <div>
                        <p class="text-xl md:text-xl lg:text-5xl">Hello I'm</p>
                        <p class="text-2xl md:text-4xl lg:text-7xl">{{ name }}</p>
                        <p class="text-sm md:text-lg lg:text-4xl">
                            I'm a <span class="text-primary">{{ poste }}</span>
                        </p>
                    </div>

                    <div class="sections-container">
                        <p class="title text-primary text-xl md:text-xl lg:text-5xl font-bold">About Me:</p>
                        <p class="text-xs md:text-sm lg:text-base">{{ aboutme }}</p>
                    </div>

                    <div class="sections-container">
                        <p class="title text-primary text-xl md:text-xl lg:text-5xl font-bold">Experience:</p>
                        <p class="text-xs md:text-sm lg:text-base">{{ exp }}</p>
                    </div>

                    <div class="sections-container">
                        <p class="title text-primary text-xl md:text-xl lg:text-5xl font-bold">Skills:</p>
                        <li class="text-xs md:text-sm lg:text-base">Proficient in C/C++ for low-level programming.</li>
                        <li class="text-xs md:text-sm lg:text-base">Extensive experience with embedded systems development.</li>
                        <li class="text-xs md:text-sm lg:text-base">Strong knowledge of Linux kernel and device drivers.</li>
                        <li class="text-xs md:text-sm lg:text-base">Familiarity with hardware interfaces and protocols.</li>
                        <li class="text-xs md:text-sm lg:text-base">Skilled in debugging and troubleshooting complex issues.</li>
                        <li class="text-xs md:text-sm lg:text-base">Adaptable problem solver with a keen eye for optimization.</li>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>

                <div class="px-10" v-show="isNotSmallScreen"></div>

                <div class="assets-container flex-1 text-center">
                    <div class="social-media-links">
                        <p class="text-xl md:text-xl lg:text-5xl">My social links :</p>
                        <a class="social-media text-primary" href="https://www.facebook.com/daniil.stepanov.311">
                            <font-awesome-icon :icon="['fab', 'facebook-f']" />
                        </a>
                        <a class="social-media text-primary" href="https://www.instagram.com/dan13615_/">
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                        </a>
                        <a class="social-media text-primary" href="https://www.linkedin.com/in/daniil-stepanov-89a98715a">
                            <font-awesome-icon :icon="['fab', 'linkedin']" />
                        </a>
                        <a class="social-media text-primary" href="https://www.github.com/Dan13615/">
                            <font-awesome-icon :icon="['fab', 'github']" />
                        </a>
                    </div>
                    <a href="cv-daniil.pdf" download="CV-Daniil-Stepanov" class="button">Download CV</a>
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

.text-container {
    width: 50%;
}

.assets-container {
    position: fixed;
    right: 0;
    left: 50%;
    top: 55%;
    transform: translateY(-60%);
}

.sections-container {
    margin-top: 5rem;
}

.title {
    font-weight: 700;
    margin-bottom: 1rem;
}

.social-media {
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

    .text-container {
        width: 100%;
    }

    .assets-container {
        position: relative;
        right: 0;
        left: 0;
        top: 0;
        transform: translateY(0);
    }
}
</style>
