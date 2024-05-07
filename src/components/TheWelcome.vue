<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookF, faInstagram, faLinkedin, faGithub);

export default {
    components: {
        FontAwesomeIcon
    }
};
</script>

<template>
    <WelcomeItem>
        <div class="centered-container">
            <div>
                <p class="text-5xl">Hello I'm</p>
                <p class="text-7xl">Daniil Stepanov</p>
                <p class="text-4xl">I'm a <span class="span">embedded software developper</span></p>

                <p>I am passionate about <b>low level programming</b>, <b>embedded systems</b> and <b>Linux systems</b>.</p>
                <p>I am currently looking for an internship in these fields.</p>
            </div>

            <div class="px-10"></div>

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
                <a href="#" class="btn">Download CV</a>
            </div>
        </div>
    </WelcomeItem>
</template>

<style scoped>
.icon-container {
    margin-left: auto;
}

#box {
    background-color: rgba(57, 62, 70, 0.8);
}

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
    margin: 3rem 1.5rem 3rem 0;
    transition: 0.5s ease;
}

.social-media a:hover {
    background: #0ef;
    color: rgb(255, 255, 255);
    box-shadow: 0 0 1rem #0ef;
}

.btn {
    display: inline-block;
    padding: 1rem 2.8rem;
    background: #0ef;
    border-radius: 4rem;
    box-shadow: 0 0 1rem #0ef;
    font-size: 1.6rem;
    color: rgb(255, 255, 255);
    letter-spacing: 0.1rem;
    font-weight: 600;
    transition: 0.5s ease;
}

.btn:hover {
    box-shadow: none;
}
</style>
