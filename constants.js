// Constants for Yasaswini's Portfolio Application

// Personal Information
const PERSONAL_INFO = {
    name: 'Reddimigari Yasaswini',
    title: 'Full Stack Java Developer',
    subtitle: 'CSE Student | Java Enthusiast | Problem Solver',
    description: 'Self-driven CSE student skilled in Java, SQL, HTML, CSS, JavaScript. Passionate about building efficient, scalable, and user-focused software solutions.',
    location: 'Bengaluru, India',
    email: 'yasaswiniyasaswini57@gmail.com',
    phone: '+91 9392682870',
    resumeFile: 'resume.pdf' // Add your resume file to the project
};

// Typing effect texts for hero section
const TYPING_TEXTS = [
    'Full Stack Java Developer',
    'CSE Student (2025)',
    'Problem Solver',
    'Tech Enthusiast',
    'Java Developer'
];

// Projects Data
const PROJECTS = [
    {
        id: 1,
        title: 'Learning Management System',
        description: 'A full-stack web application that delivers end-to-end online learning functionality. Features include dynamic course creation, quizzes, assignments, multimedia content upload, automated email notifications, and progress analytics.',
        image: 'images/lms-project.jpg',
        technologies: ['Java', 'HTML', 'CSS', 'JavaScript', 'SQL'],
        liveLink: '#',
        githubLink: 'https://github.com/yassu-554',
        featured: true
    },
    {
        id: 2,
        title: 'Portfolio Website',
        description: 'A responsive personal portfolio website showcasing my skills, projects, and experience. Built with modern web technologies and featuring smooth animations and interactive elements.',
        image: 'images/portfolio-project.jpg',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        liveLink: '#',
        githubLink: 'https://github.com/yassu-554',
        featured: true
    },
    {
        id: 3,
        title: 'Quiz Application',
        description: 'An interactive quiz application with multiple choice questions, timer functionality, and score tracking. Demonstrates creativity and self-learning capabilities.',
        image: 'images/quiz-app.jpg',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        liveLink: '#',
        githubLink: 'https://github.com/yassu-554',
        featured: false
    }
];

// Experience Data (Jobs + Education)
const EXPERIENCE = [
    {
        id: 1,
        type: 'work',
        title: 'Java Full Stack Intern',
        company: 'TAP Academy',
        location: 'Bengaluru, Karnataka',
        startDate: 'Aug 2025',
        endDate: 'Present',
        current: true,
        description: [
            'Learning Java, Spring Boot, JDBC, Hibernate and RESTful APIs for backend development',
            'Gaining hands-on experience in HTML, CSS, JavaScript and React for frontend design',
            'Practicing Database Management using SQL and integrating it with Java applications'
        ]
    },
    {
        id: 2,
        type: 'work',
        title: 'Full Stack Intern',
        company: 'SkillDzire',
        location: 'Anantapur, AP',
        startDate: 'Dec 2024',
        endDate: 'Apr 2025',
        current: false,
        description: [
            'Contributed to both front-end (HTML, CSS, JavaScript) and back-end (Java) development',
            'Ensured responsive and robust web applications',
            'Gained hands-on experience with database management using SQL'
        ]
    },
    {
        id: 3,
        type: 'education',
        title: 'Bachelor of Computer Science',
        company: 'Sri Venkateswara Institute of Technology',
        location: 'Anantapur, AP',
        startDate: '2021',
        endDate: '2025',
        current: false,
        grade: 'CGPA: 8.2',
        description: 'Specialized in Computer Science with focus on software development, data structures, algorithms, and database management.'
    },
    {
        id: 4,
        type: 'education',
        title: 'Intermediate (MPC)',
        company: 'Masters Junior College',
        location: 'Anantapur, AP',
        startDate: '2019',
        endDate: '2021',
        current: false,
        grade: 'CGPA: 8.91',
        description: 'Mathematics, Physics, Chemistry with strong foundation in analytical thinking.'
    },
    {
        id: 5,
        type: 'education',
        title: 'SSC',
        company: 'Z.P High School',
        location: 'Venkatampalli, AP',
        startDate: '2019',
        endDate: '2019',
        current: false,
        grade: 'CGPA: 9.3',
        description: 'Secondary School Certificate with excellent academic performance.'
    }
];

// Skills Data
const SKILLS = {
    technical: [
        { name: 'Java', icon: 'fab fa-java', level: 85 },
        { name: 'SQL', icon: 'fas fa-database', level: 80 },
        { name: 'HTML', icon: 'fab fa-html5', level: 90 },
        { name: 'CSS', icon: 'fab fa-css3-alt', level: 85 },
        { name: 'JavaScript', icon: 'fab fa-js-square', level: 80 },
        { name: 'React', icon: 'fab fa-react', level: 70 },
        { name: 'Spring Boot', icon: 'fas fa-leaf', level: 75 },
        { name: 'Hibernate', icon: 'fas fa-server', level: 70 }
    ],
    soft: [
        { name: 'Strong Communication Skills', icon: 'fas fa-comments' },
        { name: 'Problem Solving', icon: 'fas fa-puzzle-piece' },
        { name: 'Analytical Thinking', icon: 'fas fa-brain' },
        { name: 'Time Management', icon: 'fas fa-clock' },
        { name: 'Team Collaboration', icon: 'fas fa-users' },
        { name: 'Self Learning', icon: 'fas fa-graduation-cap' }
    ]
};

// Contact Information
const CONTACT_INFO = {
    email: {
        label: 'Email',
        value: 'yasaswiniyasaswini57@gmail.com',
        link: 'mailto:yasaswiniyasaswini57@gmail.com',
        icon: 'fas fa-envelope'
    },
    phone: {
        label: 'Phone',
        value: '+91 9392682870',
        link: 'tel:+919392682870',
        icon: 'fas fa-phone'
    },
    location: {
        label: 'Location',
        value: 'Bengaluru, India',
        link: null,
        icon: 'fas fa-map-marker-alt'
    }
};

// Social Media Links
const SOCIAL_LINKS = {
    linkedin: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/reddimigari-yasaswini-70b4b1336',
        icon: 'fab fa-linkedin'
    },
    github: {
        name: 'GitHub',
        url: 'https://github.com/yassu-554',
        icon: 'fab fa-github'
    },
    email: {
        name: 'Email',
        url: 'mailto:yasaswiniyasaswini57@gmail.com',
        icon: 'fas fa-envelope'
    }
};

// Animation durations (in milliseconds)
const ANIMATIONS = {
    fast: 200,
    medium: 400,
    slow: 800,
    typing: 100
};

// Theme colors
const COLORS = {
    primary: '#8b5cf6',
    secondary: '#a855f7',
    accent: '#ec4899',
    background: '#1a0f3f',
    text: '#ffffff',
    textSecondary: '#b8b8b8'
};

// Breakpoints for responsive design
const BREAKPOINTS = {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    large: 1200
};
