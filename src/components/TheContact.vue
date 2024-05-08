<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            message: '',
            windowWidth: 0,
            my_email: 'daniil.stepanov@epitech.eu'
        };
    },
    methods: {
        submitForm() {
            console.log('Form submitted!');
            console.log('Name:', this.name);
            console.log('Email:', this.email);
            console.log('Message:', this.message);
        },

        handleResize() {
            this.windowWidth = window.innerWidth;
        }
    },
    computed: {
        isNotSmallScreen() {
            return this.windowWidth > 1024;
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
    <ContactItem>
        <div class="centered-container contact">
            <form @submit="submitForm">
                <div class="input-box text-xs sm:text-base md:text-lg lg:text-xl">
                    <input type="text" id="name" placeholder="Name" v-model="name" required />
                </div>

                <div class="input-box text-xs sm:text-base md:text-lg lg:text-xl">
                    <input type="email" id="email" placeholder="Email Adress" v-model="email" required />
                </div>

                <div class="input-box text-xs sm:text-base md:text-lg lg:text-xl">
                    <textarea cols="40" rows="5" id="message" placeholder="Your message" v-model="message" required></textarea>
                </div>

                <button class="button" type="submit">Submit</button>
            </form>

            <div class="px-10" v-show="isNotSmallScreen"></div>

            <div>
                <p class="font-bold text-4xl md:text-6xl lg:text-8xl">Contact <span class="span">Me !</span></p>
                <p class="py-10 text-lg md:text-xl lg:text-2xl">
                    my mail : <a class="span" :href="`mailto:${my_email}`"> {{ my_email }} </a>
                </p>
            </div>
        </div>
    </ContactItem>
</template>

<style scoped>
.span {
    color: #0ef;
}

.centered-container {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
}

.contact form {
    text-align: center;
}

.contact form .input-box input,
.contact form textarea {
    text-align: center;
    width: 100%;
    padding: 0.5rem;
    color: white;
    background: rgba(57, 62, 70, 0.8);
    border-radius: 0.8rem;
    margin: 0.5rem;
    resize: none;
}

.contact form .input-box input {
    text-align: center;
    width: 100%;
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
    margin-top: 2rem;
}

@media (max-width: 1024px) {
    .centered-container {
        flex-direction: column-reverse;
    }

    .contact form {
        text-align: center;
        margin-top: 2rem;
    }

    .button {
        background: #0ef;
        box-shadow: 0 0 0.7rem #0ef;
        color: rgb(255, 255, 255);
        display: inline-block;
        padding: 0.5rem 1rem;
        border-radius: 4rem;
        font-size: 1.3rem;
        letter-spacing: 0.1rem;
        font-weight: 1000;
        transition: 0.5s ease;
    }
}
</style>
