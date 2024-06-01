<script setup>
import { ref } from 'vue';

const name = ref('Daniil Stepanov');
const poste = ref('Junior Kernel Developper');
const datas = ref([
    {
        name: 'About me',
        text: 'As an aspiring Kernel Developer, I am passionate about delving deep into the core of operating systems. My fascination with Linux and Unix systems began at a young age and has grown into a profound interest in their architecture and functionality. <br><br> I thrive on the challenge of low-level programming, where every line of code brings me closer to optimizing system performance and enhancing stability. <br><br>The world of IoT captivates me, as it represents the intersection of innovation and practicality.<br> I am enthusiastic about contributing to this field by developing efficient, robust kernels that power the next generation of smart devices. <br>My passion extends to Arduino and embedded programming, where I enjoy creating seamless interactions between hardware and software to build powerful and responsive systems. <br><br>My journey in technology has been driven by curiosity and a relentless pursuit of excellence.<br> With a strong foundation in system-level programming and a keen interest in hardware-software integration, I am committed to pushing the boundaries of what is possible within the realm of kernel development and embedded systems.<br> In every project, I strive to combine my technical expertise with creative problem-solving to deliver solutions that are both elegant and effective. <br><br>I look forward to contributing to groundbreaking advancements in operating systems, IoT, and embedded programming, turning complex challenges into streamlined, functional realities.'
    },
    {
        name: 'Experience',
        text: 'Intern, WIT (Embedded Systems Company)<br>July-December 2023<br><br> During my internship at WIT Nice, a leading embedded systems company, I had the opportunity to work on an innovative project that integrated my interests in IoT and embedded programming. <br>My primary task was to develop an automation system capable of controlling intelligent lighting in a connected building environment.<br>I was responsible for designing and implementing a solution that allowed for seamless interaction between various lighting components and the central control unit.<br>Utilizing Arduino and SAMD platforms and DALI protocol, I programmed the system to enable automated and remote control of lighting, enhancing energy efficiency and user convenience. <br><br> This project involved:<br> - System Design: Developing the architecture for the intelligent lighting control system.<br> - Embedded Programming: Writing and debugging low-level code to ensure reliable operation of the automation system.<br> - Integration: Ensuring smooth communication between sensors, actuators, and the central control unit. <br> - Testing and Optimization: Conducting extensive testing to identify and resolve issues, optimizing the system for performance and reliability.<br> - This experience was invaluable, providing me with hands-on expertise in embedded systems and IoT applications. It solidified my passion for low-level programming and reinforced my commitment to pursuing a career in kernel development and embedded technologies.<br><br><br> Assistant Epitech Region (AER), Epitech<br>Since February 2024<br><br> As an AER at Epitech, I mentor and guide students through their academic journey in computer science and technology. <br>This role involves:<br> - Student Support: Providing academic support and guidance to students, helping them overcome challenges in their coursework and projects.<br> - Technical Mentorship: Assisting students with technical issues, offering insights and advice on programming, system design, and project development.<br> - Workshops and Tutorials: Conducting workshops and tutorials on various topics, including low-level programming, Linux/Unix systems, and IoT.<br> - Academic Advising: Helping students plan their academic paths, choose appropriate courses, and prepare for future careers in technology.<br> - This role has allowed me to share my knowledge and passion for technology with aspiring developers, fostering their growth and encouraging their pursuit of excellence in the field.<br><br><br>Asiatic Culture Museum Hackathon, Nice<br>January 2024<br><br> In the hackathon hosted by the Asiatic Culture Museum in Nice, I developed an Augmented Reality (AR) Game using the HoloLens 2. This AR game was designed to enhance visitor engagement by allowing them to play while touring the museum. The project included:<br><br> - AR Game Development: Designing and implementing an interactive AR game that integrates with the museum tour.<br> - HoloLens 2 Integration: Utilizing the capabilities of HoloLens 2 to create an immersive and interactive experience.<br> - Visitor Engagement: Enhancing the visitor experience by combining education with entertainment, making the tour more interactive and enjoyable.'
    },
    {
        name: 'Skills',
        text: 'I am proficient in multiple programming languages, including C, C++, C#, Python, Bash, Assembly Intel x86, Haskell, and VueJS.<br> My expertise in operating systems spans various Linux distributions and Unix as Arch based Linux, Debian based Linux, where I have deepened my understanding of system internals and architecture.<br><br> In the realm of embedded systems, I have hands-on experience with Arduino and SAMD, and I am adept at IoT development and working with Real-Time Operating Systems (RTOS).<br> My development toolkit includes Git, Make, GCC, and debugging tools such as gdb and Valgrind, which I use to ensure code quality and performance.<br>My low-level programming skills are centered around kernel development, where I have worked on device drivers, system calls, and memory management.<br> I am also skilled in hardware-software integration, having developed projects that involve interfacing with sensors, actuators, and other hardware components.<br><br> In UI/UX design, I have conducted user research, created wireframes and prototypes, and performed usability testing to enhance user experience.<br><br> My project management skills include knowledge of Agile methodologies and the use of team collaboration tools like Github Project and Trello, enabling effective teamwork and project execution.'
    }
]);
</script>

<template>
    <WelcomeItem>
        <div class="flex-col md:mx-24 lg:mx-24">
            <div class="text-center md:text-left">
                <p class="text-3xl md:text-4xl lg:text-6xl">Hello I'm</p>
                <p class="text-4xl md:text-5xl lg:text-7xl">{{ name }}</p>
                <p class="text-2xl md:text-3xl lg:text-5xl">
                    I'm a <span class="text-primary">{{ poste }}</span>
                </p>
            </div>
            <div class="flex flex-col gap-20 mt-20 mx-24">
                <div v-for="data in datas" :key="data" class="flex odd:flex-row-reverse odd:text-right even:flex-row">
                    <div class="my-w">
                        <div class="">
                            <p class="mb-4 text-primary text-3xl md:text-4xl lg:text-6xl font-bold">{{ data.name }}</p>
                            <p v-html="data.text" class="text-base md:text-xl lg:text-2xl"></p>
                        </div>
                    </div>
                    <div class="my-w"></div>
                </div>
            </div>
        </div>
    </WelcomeItem>
</template>

<style scoped>
.my-w {
    width: 40%;
}
</style>
