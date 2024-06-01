<script setup>
import { ref } from 'vue';

const name = ref('Daniil Stepanov');
const poste = ref('Junior Kernel Developper');
const datas = ref([
    {
        name: 'About me',
        text: 'As an aspiring Kernel Developer, I am passionate about the core of operating systems. My fascination with Linux and Unix systems began at a young age and has evolved into a profound interest in their architecture and functionality.<br><br>I thrive on the challenge of low-level programming, optimizing system performance and enhancing stability. The world of IoT captivates me, as it represents the intersection of innovation and practicality. I am enthusiastic about contributing to this field by developing efficient, robust kernels that power the next generation of smart devices. My passion extends to Arduino and embedded programming, where I create seamless interactions between hardware and software.<br><br>With a strong foundation in system-level programming and a keen interest in hardware-software integration, I am committed to pushing the boundaries of kernel development and embedded systems. In every project, I strive to combine my technical expertise with creative problem-solving to deliver elegant and effective solutions.<br><br>I look forward to contributing to advancements in operating systems, IoT, and embedded programming, turning complex challenges into streamlined, functional realities.'
    },
    {
        name: 'Experience',
        text: '<strong>Intern, WIT (Embedded Systems Company)</strong><br>July-December 2023<br><br>During my internship at WIT Nice, I developed an automation system for controlling intelligent lighting in a connected building environment. Utilizing Arduino and SAMD platforms and the DALI protocol, I programmed the system for automated and remote lighting control.<br><br>This project involved:<br>- System Design: Developing the architecture for the lighting control system.<br>- Embedded Programming: Writing and debugging low-level code.<br>- Integration: Ensuring smooth communication between sensors, actuators, and the central control unit.<br>- Testing and Optimization: Conducting extensive testing to optimize system performance and reliability.<br><br>This experience provided me with hands-on expertise in embedded systems and IoT applications, reinforcing my commitment to kernel development and embedded technologies.<br><br><strong>Assistant Epitech Region (AER), Epitech</strong><br>Since February 2024<br><br>As an AER at Epitech, I mentor and guide students in computer science and technology.<br><br>This role involves:<br>- Student Support: Providing academic support and guidance.<br>- Technical Mentorship: Assisting with programming, system design, and project development.<br>- Workshops and Tutorials: Conducting sessions on low-level programming, Linux/Unix systems, and IoT.<br>- Academic Advising: Helping students plan their academic paths and prepare for careers in technology.<br><br>This role allows me to share my knowledge and passion for technology, fostering growth in aspiring developers.<br><br><strong>Asiatic Culture Museum Hackathon, Nice</strong><br>January 2024<br><br>At the Asiatic Culture Museum Hackathon, I developed an Augmented Reality (AR) Game using the HoloLens 2 to enhance visitor engagement by integrating an interactive AR experience with the museum tour.<br><br>This project included:<br>- AR Game Development: Designing and implementing the AR game.<br>- HoloLens 2 Integration: Utilizing HoloLens 2 for an immersive experience.<br>- Visitor Engagement: Combining education with entertainment for a more interactive tour.'
    },
    {
        name: 'Skills',
        text: 'I am proficient in multiple programming languages, including C, C++, C#, Python, Bash, Assembly Intel x86, Haskell, and VueJS.<br> My expertise in operating systems spans various Linux distributions and Unix, such as Arch based Linux and Debian based Linux, where I have deepened my understanding of system internals and architecture.<br><br> In the realm of embedded systems, I have hands-on experience with Arduino and SAMD, and I am adept at IoT development and working with Real-Time Operating Systems (RTOS).<br> My development toolkit includes Git, Make, GCC, and debugging tools such as gdb and Valgrind, which I use to ensure code quality and performance.<br> My low-level programming skills are centered around kernel development, where I have worked on device drivers, system calls, and memory management.<br> I am also skilled in hardware-software integration, having developed projects that involve interfacing with sensors, actuators, and other hardware components.<br><br> In UI/UX design, I have conducted user research, created wireframes and prototypes, and performed usability testing to enhance user experience.'
    }
]);
</script>

<template>
    <WelcomeItem>
        <div class="flex flex-col md:mx-24 lg:mx-24">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="text-center md:text-left w-1/2">
                    <p class="text-3xl md:text-4xl lg:text-6xl">Hello I'm</p>
                    <p class="text-4xl md:text-5xl lg:text-7xl">{{ name }}</p>
                    <p class="text-2xl md:text-3xl lg:text-5xl">
                        I'm a <span class="text-primary">{{ poste }}</span>
                    </p>
                </div>
                <div class="w-1/2 md:pl-32 pt-20 md:pt-0">
                    <img src="@/assets/dan.png" class="" />
                </div>
            </div>
            <div class="flex flex-col gap-10 mx-6 md:mx-24">
                <div v-for="data in datas" :key="data" class="flex first:mt-24 last:mb-24 odd:flex-row-reverse odd:text-right even:flex-row">
                    <div class="w-full md:w-1/2 lg:w-1/2">
                        <div class="">
                            <p class="mb-4 text-primary text-3xl md:text-4xl lg:text-6xl font-bold">{{ data.name }}</p>
                            <p v-html="data.text" class="text-base md:text-xl lg:text-2xl"></p>
                        </div>
                    </div>
                    <div class="w-0 md:w-1/2 lg:w-1/2"></div>
                </div>
            </div>
        </div>
    </WelcomeItem>
</template>

<style scoped></style>
