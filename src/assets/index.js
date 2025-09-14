import as1 from './as1.png';
import as2 from './as2.png';
import as3 from './as3.png';
import as4 from './as4.png';
import as5 from './as5.png';
import bm1 from './bm1.png';
import bm2 from './bm2.png';
import bm3 from './bm3.png';
import bm4 from './bm4.png';
import bm5 from './bm5.png';
import bm6 from './bm6.png';
import bm7 from './bm7.png';
import ff1 from './ff1.jpg';
import ff2 from './ff2.jpg';
import ff3 from './ff3.jpg';
import ff4 from './ff4.jpg';
import ff5 from './ff5.png';
import ff6 from './ff6.png';
import ff7 from './ff7.png';
import ff8 from './ff8.png';
import nb1 from './nb1.jpg';
import nb2 from './nb2.jpg';
import nb3 from './nb3.jpg';
import nb4 from './nb4.jpg';
import nb5 from './nb5.jpg';
import nb6 from './nb6.jpg';

const projectData = [
    {
        id: 'nobleNews',
        name: 'The Noble News',
        description: 'A dynamic and responsive news website that fetches real-time news using NewsAPI. Offers news in multiple categories, languages, and countries. Users can save news, comment, like/dislike comments, and share articles across social media platforms.',
        img: [nb1, nb2, nb3, nb4, nb5],
        links: {
            github: 'https://github.com/Rizwan-Khan-10/The-Noble-News',
            liveUrl: null,
        },
        techStack: {
            frontend: ['HTML', 'CSS', 'JS'],
            backend: ['Java', 'Java Servlet'],
            db: 'MySql',
            library: ['JDBC', 'Apache Tomcat', 'gson', 'Font Awesome', 'Google Fonts'],
            tools: ['Apache NetBeans', 'News Api', 'Git', 'GitHub']
        },
        features: [
            'Fetches news from NewsAPI (Runs on localhost due to paid API)',
            'News available in different categories (Technology, Sports, Business, etc.)',
            'View news from a specific date',
            'Supports three Indian languages – Hindi, English, Marathi',
            'News can be saved with date & history',
            'Share news directly on WhatsApp, Facebook, Twitter',
            'Copy link option for easy sharing',
            'Comment system (Users can like/dislike comments)',
            'View news from different countries',
            'Night mode for better reading experience',
            'Fully responsive for mobile & desktop',
            'Filter news by date, language, and country'
        ]
    },
    {
        id: 'fileFlow',
        name: 'File Flow',
        description: 'A fully responsive, real-time file and text sharing web application that allows users to securely share data within private rooms using AES-256-CBC encryption. Features include chat, room customization, access control, and light/dark mode.',
        img: [ff1, ff2, ff3, ff4, ff5, ff6, ff7, ff8],
        links: {
            github: 'https://github.com/zaid9866/fileflow',
            liveUrl: null,
        },
        techStack: {
            frontend: ['HTML', 'CSS', 'JavaScript'],
            backend: ['Python', 'FastAPI'],
            db: 'PostgreSQL',
            library: ['AES-256-CBC Encryption', 'SQLAlchemy', 'Cloudinary', 'Google Auth', 'JQuery', 'Google Fonts', 'Font Awesome', 'webscoket'],
            tools: ['Vs Code', 'Git', 'GitHub']
        },
        features: [
            'Secure Room-Based Sharing with AES-256-CBC encryption',
            'Create private rooms with unique encryption keys',
            'Real-time file and text sharing',
            'Auto-delete on room close',
            'Download shared text as a file',
            'Room customization: change username, view participants, set closing time, block/remove guests, custom room code',
            'Real-time chat with smooth UI',
            'Light/Dark mode for better usability',
            'Fully responsive design'
        ],
    },
    {
        id: 'alSana',
        name: 'Al Sana Trading East',
        description: 'A fully responsive, real-time file and text sharing web application that allows users to securely share data within private rooms using AES-256-CBC encryption. Features include chat, room customization, access control, and light/dark mode.',
        img: [as1, as2, as3, as4, as5],
        links: {
            github: null,
            liveUrl: 'https://al-sana-trading-east.vercel.app/',
        },
        techStack: {
            frontend: ['Reactjs', 'Tailwind'],
            backend: ['Nodejs', 'Expressjs'],
            db: 'mongodb atlas',
            library: ['Cloudinary', 'JWT', 'multer'],
            tools: ['Vs Code', 'Git', 'GitHub']
        },
        features: [
            'Secure Room-Based Sharing with AES-256-CBC encryption',
            'Create private rooms with unique encryption keys',
            'Real-time file and text sharing',
            'Auto-delete on room close',
            'Download shared text as a file',
            'Room customization: change username, view participants, set closing time, block/remove guests, custom room code',
            'Real-time chat with smooth UI',
            'Light/Dark mode for better usability',
            'Fully responsive design'
        ],
    },
    {
        id: 'bunkMate',
        name: 'BunkMate',
        description: 'A lightweight attendance tracking web app that helps students manage and monitor their class attendance effortlessly. Track attendance, plan bunks smartly, and ensure you meet the minimum attendance requirements.',
        img: [bm1, bm2, bm3, bm4, bm5, bm6, bm7],
        links: {
            github: 'https://github.com/Rizwan-Khan-10/BunkMate',
            liveUrl: 'https://bunk-mate.vercel.app',
        },
        techStack: {
            frontend: ['React', 'Tailwind CSS'],
            backend: [],
            db: 'localStorage',
            library: ['react-calendar', 'react-icons'],
            tools: ['VS Code', 'Git', 'GitHub']
        },
        features: [
            'Add subjects with name and shortcode',
            'Create weekly timetable and adjust for specific days',
            'Mark daily attendance automatically per schedule',
            'Live stats per subject and overall',
            'Predict impact of future bunks',
            'Monthly attendance breakdown with visual calendar',
            'Light/Dark mode for better usability',
            'Fully responsive design for mobile and desktop'
        ],
    },
];

export default projectData;