// Starting content, taken from Umang's resume (September 2026).
// `npm run db:seed` loads it. Edit it later from the admin panel, not here.

export const profile = {
  name: "Umang Sutarsandhiya",
  role: "Software Tester & Web Developer",
  headline: "I test software until it breaks, then make sure it doesn't.",
  intro:
    "Computer Engineering graduate from Gujarat Technological University, working in ERP software testing and maintenance. I test web applications, validate data with SQL and build responsive websites for clients.",
  about:
    "I finished my B.E. in Computer Engineering at Gujarat Technological University in 2026 and now work on ERP software at Kranti Forging, where I do manual and functional testing, report defects, verify business workflows and help keep the system running smoothly.\n\nBefore that I spent a month at IBM SkillsBuild analysing data with Excel and SQL. I have also built and tested web applications of my own, from a portfolio site to an e-commerce store and a food ordering app, and I take on freelance web projects, most recently a website with online repair booking for a motor repair business. I am exploring automation testing next, and I am detail-oriented, proactive and always looking to sharpen my technical and analytical skills.",
  location: "Jepar, Ta. Chuda, Dist. Surendranagar, Gujarat",
  email: "umangsutariya5839@gmail.com",
  phone: "+91 94296 84634",
  github: "https://github.com/umangsutariya5839-spec",
  linkedin: "",
  resume_url: "/resume.pdf",
  photo_url: "",
  available: true,
  stats: [
    { label: "CGPA", value: "7.93" },
    { label: "Projects built", value: "4" },
    { label: "Graduated", value: "2026" },
    { label: "Softball", value: "National" },
  ],
  beyond_title: "Softball, national level",
  beyond_body:
    "I played softball for Gujarat Technological University and earned a national level certificate. The game taught me the basics first, then strategy, and above all teamwork and sportsmanship. The same habits carry into how I work on a project.",
};

export const projects = [
  {
    slug: "motor-repair-website",
    title: "Motor Repair & Electrical Services",
    category: "Freelance · Client website",
    summary:
      "A responsive business website for a client in the electric motor repair and rewinding industry, with online repair booking and WhatsApp integration.",
    points: [
      "Developed a responsive business website for a customer in the electric motor repair and rewinding industry.",
      "Implemented service, gallery, light decoration, reviews, FAQ, contact and repair booking sections with WhatsApp integration.",
      "Created a modern, mobile-friendly interface that presents the business's services, products and customer information professionally.",
    ],
    stack: ["Responsive design", "WhatsApp integration", "Netlify"],
    live_url: "https://motor-repair12.netlify.app/",
    code_url: "",
    image_url: "",
    year: "2026",
    featured: true,
  },
  {
    slug: "quickbite",
    title: "QuickBite",
    category: "Web app · Testing",
    summary:
      "An online food ordering web application with restaurant browsing, cart, checkout and order tracking, which I both built and tested.",
    points: [
      "Built a responsive food ordering app with HTML5, CSS3, JavaScript and MySQL, covering restaurant browsing, cart, checkout and order tracking.",
      "Performed functional, UI, responsive and regression testing, wrote test cases and logged the defects I found.",
      "Validated database data with MySQL queries and re-tested every bug fix to confirm the app behaved reliably.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "MySQL", "Manual testing"],
    live_url: "",
    code_url: "",
    image_url: "",
    year: "2026",
    featured: true,
  },
  {
    slug: "ecommerce",
    title: "E-commerce website",
    category: "Web app",
    summary:
      "A responsive online store where users browse products by category, search, fill a cart and place orders against a MySQL database.",
    points: [
      "Developed the store with HTML, CSS, JavaScript and MySQL so users can browse and shop efficiently.",
      "Implemented product categories, search, cart management and order processing.",
      "Focused on responsive design, product filtering, secure database integration and simple navigation.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "MySQL"],
    live_url: "",
    code_url: "",
    image_url: "",
    year: "2025",
    featured: true,
  },
  {
    slug: "portfolio",
    title: "Personal portfolio website",
    category: "Website",
    summary:
      "A responsive personal site that shows my skills, projects, education and contact details to recruiters.",
    points: [
      "Built with HTML, CSS and JavaScript, with About, Projects, Skills, Resume and Contact sections and easy navigation.",
      "Mobile-friendly layout that works on any screen size.",
      "Linked GitHub, LinkedIn and a resume download so recruiters can check my work directly.",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    live_url: "https://umangsutariya.vercel.app",
    code_url: "",
    image_url: "",
    year: "2025",
    featured: false,
  },
];

export const experience = [
  {
    role: "ERP Software Testing & Maintenance Trainee",
    org: "Kranti Forging",
    period: "July 2026 – Present",
    current: true,
    points: [
      "Perform manual and functional testing on the company's ERP software.",
      "Identify, document and report defects, then verify the fixes.",
      "Verify business workflows end to end and help maintain the software so daily operations run smoothly.",
    ],
  },
  {
    role: "Freelance Web Developer",
    org: "Self-employed",
    period: "2026",
    current: true,
    points: [
      "Built and delivered a responsive business website for a motor repair and electrical services client.",
      "Added repair booking, reviews, FAQ, gallery and WhatsApp contact so customers can reach the business in one tap.",
    ],
  },
  {
    role: "Data Analysis Intern",
    org: "IBM SkillsBuild",
    period: "July 2025",
    current: false,
    points: [
      "Analysed and validated datasets in Excel.",
      "Wrote SQL queries to explore, check and summarise data.",
    ],
  },
];

export const education = [
  {
    qualification: "Bachelor of Engineering, Computer Engineering",
    institute: "Gujarat Technological University",
    period: "2022 – 2026",
    result: "CGPA 7.93 / 10.00",
    note: "",
  },
  {
    qualification: "Class XII, Science",
    institute: "Pramukh Swami Vidyalaya, Salangpur",
    period: "2021 – 2022",
    result: "55.50% · Grade C1",
    note: "",
  },
  {
    qualification: "Class X",
    institute: "Pramukh Swami Vidyalaya, Salangpur",
    period: "2019 – 2020",
    result: "65.83% · Grade B2",
    note: "",
  },
];

export const skillGroups = [
  { name: "Testing", items: ["Manual testing", "Functional testing", "Regression testing", "Defect reporting", "Automation testing (learning)"] },
  { name: "Languages", items: ["HTML", "CSS", "JavaScript", "Python (basic)"] },
  { name: "Databases", items: ["MySQL", "Oracle Database"] },
  { name: "Tools", items: ["VS Code", "IntelliJ IDEA", "Jira", "Excel"] },
  { name: "Other", items: ["APIs", "AWS (basic)", "Linux (basic)"] },
];
