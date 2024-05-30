<script>
export default {
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
        <div class="flex justify-center items-center px-40">
            <div class="flex flex-row">
                <div class="w-1/2">
                    <div>
                        <p class="text-xl md:text-xl lg:text-5xl">Hello I'm</p>
                        <p class="text-2xl md:text-4xl lg:text-7xl">{{ name }}</p>
                        <p class="text-sm md:text-lg lg:text-4xl">
                            I'm a <span class="text-primary">{{ poste }}</span>
                        </p>
                    </div>

                    <div class="mt-20">
                        <p class="mb-4 text-primary text-xl md:text-xl lg:text-5xl font-bold">About Me:</p>
                        <p class="text-xs md:text-sm lg:text-base">{{ aboutme }}</p>
                    </div>

                    <div class="mt-20">
                        <p class="title text-primary text-xl md:text-xl lg:text-5xl font-bold">Experience:</p>
                        <p class="text-xs md:text-sm lg:text-base">{{ exp }}</p>
                    </div>

                    <div class="mt-20">
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
            </div>
        </div>
    </WelcomeItem>
</template>

<style scoped></style>
