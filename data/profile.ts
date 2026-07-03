export const profile = {
site: {
url: process.env.NEXT_PUBLIC_SITE_URL || "https://sunny-gupta.dev",
language: "en",
locale: "en_IN",
themeColor: "#F8F8F8",
description:
"Sunny Gupta is a B.Tech CSE student and full-stack developer building Java, Spring Boot, React, Redis, and database-driven web applications.",
keywords: [
"Sunny Gupta",
"Full-Stack Developer",
"Java Developer",
"Spring Boot Developer",
"React Developer",
"Next.js Developer",
"Competitive Programmer",
"B.Tech CSE",
],
copyright:
"A collection of projects, experiences, and continuous learning.",
backToTop: "Back to top",
menuOpen: "Open navigation",
menuClose: "Close navigation",
primaryNav: "Primary navigation",
footerNav: "Footer navigation",
socialNav: "Social links",
skipLink: "Skip to content",
projectImageAlt: "Visual preview for",
},

personal: {
name: "Sunny Gupta",
shortName: "SG",
greeting: "Hi, I'm",
title: "Full-Stack Developer & B.Tech CSE Student",
subtitle:
"I build full-stack web applications using Java, Spring Boot, React, Redis, and modern web technologies.",
headline:
"Computer Science student building full-stack applications with a strong focus on backend engineering, REST APIs, databases, and problem solving.",
bio:
"B.Tech CSE student with hands-on experience in full-stack web development using Java, Spring Boot, React.js, MySQL, Redis, Docker, JSP, Servlets, and JDBC. I enjoy building REST APIs, authentication systems, role-based workflows, database-driven applications, and clean user experiences.",
location: "Noida, Uttar Pradesh",
email: "[sunnygupta9968@gmail.com](mailto:sunnygupta9968@gmail.com)",
phone: "+91 8510099151",
image: "/avatar.svg",
resume: "/resume.pdf",
availability: "Open to internships and full-stack opportunities",
currentStatus: "B.Tech CSE student",
graduationYear: "2027",
degree: "B.Tech - Computer Science and Engineering",
},

socials: {
github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/sunnygupta9968",
linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/sunny-gupta-9968s/",
twitter: "",
website: "",
instagram: "",
codeforces: "https://codeforces.com/profile/Sunnybiet",
leetcode: "https://leetcode.com/u/sunny9968/",
codolio: "https://codolio.com/profile/Sunny23/",
},

navigation: [
{ label: "About", href: "#about" },
{ label: "Journey", href: "#journey" },
{ label: "Skills", href: "#skills" },
{ label: "Projects", href: "#projects" },
{ label: "Contact", href: "#contact" },
],

actions: {
explore: "Explore projects",
contact: "Contact me",
resume: "View resume",
email: "Send an email",
call: "Call me",
},

sections: {
about: {
label: "Personal story",
title: "About.",
subtitle:
"I enjoy building software that is reliable, easy to use, and solves real problems.",
},
recruiter: {
label: "Recruiter quick view",
title: "Fast facts.",
subtitle:
"A quick overview of my background, projects, and technical skills.",
},
journey: {
label: "Journey",
title: "Journey.",
subtitle:
"My academic journey, projects, and achievements so far.",
},
skills: {
label: "Interactive skills galaxy",
title: "Skills.",
subtitle:
"Technologies and concepts I use in my projects.",
},
education: {
label: "Where I study",
title: "Education.",
subtitle:
"Computer Science foundations with consistent project-based learning.",
},
projects: {
label: "Dynamic project spotlight",
title: "Projects.",
subtitle:
"Projects that helped me learn backend engineering, databases, authentication, and full-stack development.",
featuredLabel: "Featured project",
otherLabel: "Other builds",
},
achievements: {
label: "Collectible badges",
title: "Achievements.",
subtitle:
"Academic, competitive programming, and hackathon achievements.",
},
statistics: {
label: "Coding statistics",
title: "By the numbers.",
subtitle:
"Numbers that reflect my projects, coding practice, and achievements.",
},
highlights: {
label: "Resume highlights",
title: "Why Sunny.",
subtitle:
"Key strengths and experiences.",
},
contact: {
label: "Reach out",
title: "Let's build something useful.",
subtitle:
"If you'd like to discuss opportunities, projects, or collaborations, feel free to reach out.",
},
},

roleSwitcher: [
"Full-Stack Developer",
"Java + Spring Boot Builder",
"React / Next.js Developer",
"Competitive Programmer",
],

stats: [
{ label: "Projects built", value: "3+" },
{ label: "Problems solved", value: "700+" },
{ label: "GATE CS/IT rank", value: "5159" },
{ label: "Competition wins", value: "3" },
],

codingStats: [
{
label: "Projects Built",
value: "3+",
detail: "Full-stack and database-driven apps from the resume",
icon: "Rocket",
},
{
label: "Technologies Used",
value: "25+",
detail: "Languages, frameworks, databases, and developer tools",
icon: "Layers",
},
{
label: "Competitions Won",
value: "3",
detail: "Hackathon plus two competitive coding wins",
icon: "Trophy",
},
{
label: "Problems Solved",
value: "700+",
detail: "Across LeetCode, GeeksforGeeks, Codeforces, and other platforms",
icon: "Code2",
},
{
label: "AIR Rank",
value: "5159",
detail: "GATE Computer Science / IT 2026",
icon: "Medal",
},
],

about: {
description:
"I am a Computer Science student at BIET Jhansi who likes building products where the backend, database, and user workflow are designed carefully. My projects focus on REST APIs, authentication, role-based access, JDBC, relational databases, Redis-based temporary metadata storage, deployment, and practical user experience.",
highlight:
"I enjoy building software from idea to working product, with a focus on backend systems, databases, authentication, and user experience.",
interests: [
"Full-stack systems",
"Java and Spring Boot",
"Problem solving",
"Authentication flows",
"Database design",
"Clean UI",
],
values: {
title: "How I like to build",
items: [
"Ship useful features",
"Keep user flows simple",
"Design clean APIs",
"Learn through projects and practice",
],
},
storyCards: [
{
title: "Who I am",
body: "A B.Tech CSE student from Noida, currently studying at Bundelkhand Institute of Engineering and Technology, Jhansi.",
},
{
title: "What I build",
body: "Full-stack web applications with REST APIs, role-based access, relational databases, Redis-backed temporary metadata, and deployed frontends.",
},
{
title: "What motivates me",
body: "Clear problem solving: from competitive programming practice to systems that help users share files, manage alumni workflows, or handle hospital appointments.",
},
],
},

recruiterQuickView: [
{ label: "Current Status", value: "B.Tech CSE student" },
{ label: "Degree", value: "B.Tech - Computer Science and Engineering" },
{ label: "Graduation", value: "2027" },
{ label: "Core Stack", value: "Java, Spring Boot, React, MySQL, Redis" },
{ label: "Open To", value: "Internships, full-stack roles, Java backend roles" },
{ label: "Location", value: "Noida / Jhansi, India" },
],

skills: [
{
category: "Languages",
color: "#F9C74F",
skills: ["Java", "JavaScript", "Python", "C"],
},
{
category: "Frontend",
color: "#69D2FF",
skills: ["React.js", "Next.js", "HTML5", "CSS3", "TailwindCSS", "Bootstrap", "Vite"],
},
{
category: "Backend",
color: "#1DD1A1",
skills: ["Spring Boot", "Node.js", "Express.js", "Java Servlets", "JSP"],
},
{
category: "Databases",
color: "#A78BFA",
skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
},
{
category: "Developer Tools",
color: "#5B8CFF",
skills: ["Git", "GitHub", "Docker", "VS Code", "IntelliJ IDEA", "Eclipse", "Postman"],
},
{
category: "Core Concepts",
color: "#F9C74F",
skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems", "REST APIs", "MVC Architecture", "JDBC", "Authentication", "Authorization", "RBAC", "SDLC"],
},
{
category: "Cloud & Deployment",
color: "#69D2FF",
skills: ["Render", "Vercel", "Docker", "Cloud deployment basics"],
},
{
category: "Competitive Programming",
color: "#1DD1A1",
skills: ["LeetCode", "GeeksforGeeks", "Codeforces", "700+ problems"],
},
{
category: "AI / ML",
color: "#A78BFA",
skills: ["Supervised ML", "Regression", "Classification", "Gradient Descent", "Feature Engineering"],
},
],

journey: [
{
type: "Education",
title: "Started B.Tech CSE",
date: "2023",
description:
"Joined Bundelkhand Institute of Engineering and Technology, Jhansi for Computer Science and Engineering.",
color: "#69D2FF",
icon: "GraduationCap",
technologies: ["CSE", "DSA", "OOP"],
},
{
type: "Project",
title: "Hospital Management System",
date: "Dec 2024",
description:
"Built Admin, Doctor, and User modules with appointment, specialist, patient, and doctor management workflows.",
color: "#A78BFA",
icon: "HeartPulse",
technologies: ["JSP", "Servlets", "MySQL", "JDBC"],
},
{
type: "Project",
title: "Alumni Connect",
date: "Apr 2025",
description:
"Created Admin and Alumni dashboards with verification, job posting, referral, event, and gallery workflows.",
color: "#F9C74F",
icon: "Users",
technologies: ["Servlets", "BCrypt", "JDBC"],
},
{
type: "Achievement",
title: "Hackathon Winner",
date: "2025",
description:
"Won 1st place at IIC Hackathon, BIET Jhansi by building an alumni management system in 48 hours.",
color: "#1DD1A1",
icon: "Trophy",
technologies: ["48 hours", "1st place", "Teamwork"],
},
{
type: "Project",
title: "DropIt File Sharing",
date: "May 2026",
description:
"Built a temporary file-sharing platform using Spring Boot, React, Redis, Docker, Render, and Vercel.",
color: "#5B8CFF",
icon: "Send",
technologies: ["Spring Boot", "React", "Redis"],
},
{
type: "Achievement",
title: "GATE CS/IT AIR 5159",
date: "2026",
description:
"Earned All India Rank 5159 in GATE CS/IT while continuing project and competitive programming work.",
color: "#F9C74F",
icon: "Medal",
technologies: ["AIR 5159", "GATE 2026"],
},
{
type: "Career Growth",
title: "Graduation Track",
date: "2027",
description:
"Preparing for full-stack, backend, and product-engineering opportunities after B.Tech CSE.",
color: "#69D2FF",
icon: "Rocket",
technologies: ["Full-stack", "Backend", "Product"],
},
],

education: [
{
institution: "Bundelkhand Institute of Engineering and Technology, Jhansi",
degree: "B.Tech - Computer Science and Engineering",
duration: "2023 - 2027",
description:
"CGPA: 8.0 Focused on software engineering, data structures and algorithms, object-oriented programming, database systems, operating systems, and full-stack development.",
location: "Jhansi, Uttar Pradesh",
score: "CGPA 8.0"
},
],

projects: [
{
title: "DropIt",
category: "Featured",
description:
"A full-stack temporary file-sharing platform that allows users to upload files and share them using short six-digit access codes.",
image: "/project-dropit.svg",
github: "https://github.com/sunnygupta9968/dropit",
live: "https://dropit-blush.vercel.app/",
featured: true,
technologies: ["Spring Boot", "React.js", "Redis", "Docker", "Render", "Vercel"],
highlights: [
"Six-digit share-code access",
"Spring Boot REST APIs",
"Redis metadata expiry",
"Scheduled expired-file cleanup",
],
},
{
title: "Alumni Management System",
category: "Featured",
description:
"A JSP and Servlet-based alumni management platform with Admin and Alumni dashboards, secure authentication, verification workflows, job referrals, events, and gallery management.",
image: "/project-alumni.svg",
github: "https://github.com/sunnygupta9968/alumni_connect",
live: "",
featured: true,
technologies: ["JSP", "Servlets", "MySQL", "BCrypt", "JDBC"],
highlights: [
"Built in 48-hour hackathon",
"Admin and Alumni dashboards",
"Job posting and referral workflows",
"Verification and event management",
],
},
{
title: "Hospital Management System",
category: "Operations System",
description:
"A JSP and Servlet-based hospital management system for Admin, Doctor, and User modules with appointment, specialist, doctor, patient, and record management workflows.",
image: "/project-hospital.svg",
github: "https://github.com/sunnygupta9968/Hospital-management-system",
live: "",
featured: false,
technologies: ["JSP", "Servlets", "MySQL", "JDBC", "Bootstrap"],
highlights: [
"Admin, Doctor, and User modules",
"Appointment workflows",
"Doctor and specialist management",
"JDBC-based DAO layers",
],
},
],

achievements: [
{
title: "GATE CS/IT 2026",
description: "Secured AIR 5159 in GATE Computer Science / IT.",
icon: "Medal",
value: "AIR 5159",
},
{
title: "Hackathon Winner",
description:
"Won 1st place at IIC Hackathon, BIET Jhansi by building an alumni management system in 48 hours.",
icon: "Trophy",
value: "1st Place",
},
{
title: "CodersCup Winner",
description:
"Secured 1st place twice in CodersCup Competitive Coding Competition organized by CoSSCo Club, BIET Jhansi.",
icon: "Crown",
value: "2x Winner",
},
{
title: "Competitive Programming",
description:
"Solved 700+ problems across LeetCode, GeeksforGeeks, Codeforces, and other platforms.",
icon: "Code2",
value: "700+",
},
],

certifications: [
{
title: "Supervised Machine Learning: Regression and Classification",
issuer: "Coursera - Andrew Ng, DeepLearning.AI",
description:
"Covered linear regression, logistic regression, gradient descent, feature engineering, regression, and classification fundamentals.",
url: "https://www.coursera.org/account/accomplishments/verify/E5UHUOWW6Q77?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
},
],

resumeHighlights: [
"Strong Java + Spring Boot full-stack foundation with React.js frontend experience.",
"Built authentication and role-based workflows using BCrypt, sessions, JDBC, and relational databases.",
"Comfortable with MySQL, PostgreSQL, MongoDB, Redis, Docker, Render, Vercel, and Postman.",
"700+ DSA problems solved with competition wins and GATE CS/IT AIR 5159.",
],

} as const;

export type Profile = typeof profile;
