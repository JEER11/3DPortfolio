import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    java,
    jee3,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    c,
    matlab,
    arduino1,
    python5,
    sakura,
    baby,
    vss,
    robot,

} from "../assets/icons";

export const skills = [
    
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: jee3,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: c,
        name: "C++",
        type: "Programming Language",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: matlab,
        name: "MATLAB",
        type: "Programming Language",
    },
    {
        imageUrl: arduino1,
        name: "Arduino",
        type: "Hardware/IoT",
    },
    {
        imageUrl: python5,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: vss,
        name: "VSS",
        type: "Version Control",
    },
];

export const experiences = [
    {
        title: "Customer Service",
        company_name: "Sarku Japan",
        icon: sakura,
        iconBg: "#accbe1",
        date: "August 2022 - present",
        points: [
            "Trained new employees, built a strong team, and helped customers with purchases and questions.",
            "Handled opening and closing of cash drawer.",
            "Managed inventory and ensured the store was clean and organized.",
        ],
    },
    {
        title: "Childcare Provider",
        company_name: "Freelance/Nanny Lane",
        icon: baby,
        iconBg: "#fbc3bc",
        date: "August 2019 - Present",
        points: [
            "Provided care for children aged 1-12, including meal prep, transportation, and educational activities.",
            "Communicated effectively with parents to ensure children's needs were met.",
            "Maintained a safe and nurturing environment for children.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/JEER11',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/jeraldiner/',
    }
];

export const projects = [
    {
        iconUrl: robot,
        theme: 'btn-back-red',
        name: 'ML Object Detection',
        description: 'Currently working on an automated object tracking system using ESP32 cam, web controller and buzzer to detect and deter pests from crops. Programming for real-time tracking and controlled algorithms using Edge Impulse to enhance efficiency.',
        link: 'https://github.com/Jeraldine/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Smart Lamp',
        description: 'Motion-activated smart lighting system. Made in a 24-hour hackathon at MakeNJIT using ESP32, HC-SR04 ultrasonic sensor, and KY-016 RGB LED - automatically turns on when someone enters a room and off when they leave, combining real-time detection with energy-efficient automation.',
        link: 'https://github.com/JEER11/Smart-Light.git',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-blue',
        name: 'AI Media Analyzer',
        description: 'A suite of AI-powered tools to enhance media accessibility. It includes automated features like image captioning, document summarization, audio and video transcription, and summarization.',
        link: 'https://github.com/Jeraldine/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: '2D Shooter Game',
        description: 'Implemented mechanics like gun aiming, shooting, and target spawning. With a scoring system, timer, bullet count, and a restart function. Gained hands-on experience in game development, coding in C# and utilizing Unity to bring game concepts to life.',
        link: 'https://github.com/JEER11/Onion-Shoots.git',
    },
];