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
    nounai,
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
    detection,
    cloud,
    phone,
    team,
    home,
    cpu,

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
        title: "AI Training Data Contributor",
        company_name: "Handshake AI - Project Lexicon",
        icon: phone,
        iconBg: "#8b5cf6",
        date: "Dec 2025 - Present",
        points: [
            "Participate in recorded video conversations covering diverse topics for AI training and research purposes.",
            "Contribute to machine learning datasets by providing natural human interaction data to improve AI language models and conversational systems.",
            "Maintain professional communication standards while on camera for 2-4 minute sessions.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "OpenQQuantify",
        icon: cpu,
        iconBg: "#1e293b",
        iconScale: 1.25,
        date: "May 2025 - Present",
        points: [
            "Built tools for AI-driven media and electronics platforms, focusing on signal analysis, database integration, and system optimization.",
            "Contributed to open-source healthcare projects, supported cross-team development, and created technical documentation and user-facing materials.",
        ],
    },
    {
        title: "Customer Service",
        company_name: "Sarku Japan",
        icon: team,
        iconBg: "#1e40af",
        date: "August 2022 - May 2025",
        points: [
            "Trained new employees, built a strong team, and helped customers with purchases and questions.",
            "Handled opening and closing of cash drawer.",
            "Managed inventory and ensured the store was clean and organized.",
        ],
    },
    {
        title: "Childcare Provider",
        company_name: "Freelance/Nanny Lane",
        icon: home,
        iconBg: "#ec4899",
        date: "August 2019 - Mar 2025",
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
        iconUrl: detection,
        theme: 'btn-back-pink',
        iconScale: 1.2,
        name: 'ML Object Detection',
        description: 'An automated object tracking system using ESP32 cam, web controller and buzzer to detect and deter pests from crops. Programming for real-time tracking and controlled algorithms using Edge Impulse to enhance efficiency.',
        link: 'https://github.com/JEER11/ML-Object.Tracking.Robot.git',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-red',
        name: 'AI Medical Website',
    description: 'Docteck, A modern web app for healthcare professionals and clients. It streamlines appointment scheduling, billing, and daily tasks, and features an AI-powered Doctor Assistant for quick medical guidance, all in a secure, responsive interface.',
        link: 'https://github.com/JEER11/Docteck.git',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'NJIT Interactive Kiosk',
        description: 'An advanced campus navigation and wayfinding kiosk featuring an integrated AI assistant. Built with multimodal interaction capabilities including touch, gesture, and voice recognition to provide seamless indoor mapping and real-time guidance for students and visitors.',
        link: 'https://github.com/JEER11/KioskApp.git',
    },
    {
        iconUrl: cloud,
        theme: 'btn-back-yellow',
        iconScale: 1.2,
        name: 'AI Video Search Extension',
        description: 'Intelligent Chrome extension leveraging AI/ML to semantically analyze and rank videos beyond keyword matching. Built for ECE 422, it implements advanced networking principles and efficient data communication protocols to collect, categorize, and retrieve video content based on contextual understanding and user-defined tags.',
        link: 'https://github.com/JEER11/AISearch',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Smart Lamp',
        description: 'Motion-activated smart lighting system. Made in a 24-hour hackathon at MakeNJIT using ESP32 - automatically turns on when someone enters a room and off when they leave, with an integrated remote-control web server. Combining real-time detection with energy-efficient automation.',
        link: 'https://github.com/JEER11/Smart-Light.git',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-blue',
        name: 'AI Media Analyzer',
        description: 'A suite of AI-powered tools to enhance media accessibility. It includes automated features like image captioning, document summarization, audio and video transcription, and summarization.',
        link: 'https://github.com/JEER11/AI-Media-Analyzer.git',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-orange',
        name: '2D Shooter Game',
        description: 'Implemented mechanics like gun aiming, shooting, and target spawning. With a scoring system, timer, bullet count, and a restart function. Gained hands-on experience in game development, coding in C# and utilizing Unity to bring game concepts to life.',
        link: 'https://github.com/JEER11/Onion-Shoots.git',
    },
];