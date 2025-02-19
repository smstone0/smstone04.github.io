const projects = [
    {
        title: "UK Travel Visualiser",
        date: "2025 - PRESENT",
        description: `An interactive map to visualise travel within the UK. Click areas and select whether you have lived, stayed, visited, stopped, passed, or never been there. The area is filled with the corresponding colour and the UK 'level' is updated.

Concept inspired by https://lab.magiconch.com/china-ex/ and https://tenpages.github.io/us-level/eu.html.`,
        pageUrl: "smstone0.github.io/#/uk-map",
        codeUrl: "https://github.com/smstone0/smstone0.github.io",
        thumbnail: "assets/MapChart_Map.svg",
        languages: ["React", "JavaScript", "HTML", "CSS"],
    },
    {
        title: "Caloric",
        date: "2023 - PRESENT",
        description: `A cross-platform calorie counting app designed for minimalism and simplicity. Provides a beginner-friendly method to track nutrition by focusing on the essentials, eliminating detail such as macros and meal times. I started this project to learn mobile development and interface design.`,
        designUrl: "https://www.figma.com/design/ojnG7Z2LYuzCuDM0TMUUiA/Caloric?node-id=0-1&node-type=canvas&t=lJdGKqTurMDbI7DR-0",
        codeUrl: "https://github.com/smstone0/Caloric",
        thumbnail: "assets/caloric/caloric.png",
        moreImages: [],
        languages: ["Flutter", "SQLite", "Figma"]
    },
    {
        title: "Software Engineering Group Project",
        date: "2023 - 2024",
        description: `Led an 8-person team of computer science students in a year-long university group project, developing a mobile app free of charge for industry partner, Lots For Tots - an organisation which as of 2024 distributes to 26,000 families. The app connects parents with nearby children's events and has integrated accessibility, offering visual comfort options and filtering events by SEN and wheelchair access.
        
We created interactive prototypes and iteratively gathered requirements and user feedback to guide app design. Using Scrumban, paired programming and code reviews, we maintained high code quality. We showcased our work to academics, industry leaders and peers.`,
        designUrl: "https://www.figma.com/design/pBlTcItDic1lt4CA2VA81k/Prototyping?t=Jc90sSWYw35fi01r-0",
        thumbnail: "assets/lots-for-tots/lots-for-tots.png",
        moreImages: ['assets/lots-for-tots/login.jpeg', 'assets/lots-for-tots/event-page.jpeg', 'assets/lots-for-tots/forgot-password.jpeg', 'assets/lots-for-tots/settings.jpeg', 'assets/lots-for-tots/sign-up.jpeg', 'assets/lots-for-tots/subscribed.jpeg', 'assets/lots-for-tots/map.png', 'assets/lots-for-tots/prototypes.png'],
        languages: ["Flutter", "Firebase", "Figma"]
    },
    {
        title: "Operating Systems and Concurrency",
        date: "2023 - 2024",
        description: `Developed a multi-threaded process simulator in C using the POSIX API on Linux, incorporating key operating system principles such as process scheduling, concurrency control, and resource management. The simulator manages process creation, execution, and termination using a process table, priority-based scheduling, and linked-list-based queues for ready, I/O, and terminated processes. It supports both preemptive and non-preemptive scheduling, with processes running in a round-robin or FCFS fashion depending on priority. Semaphores and mutexes are used for synchronisation.

To simulate real-world execution, the system includes an I/O daemon to handle blocked processes, a booster daemon to prevent starvation, and a load balancer to distribute workloads across multiple CPUs. I achieved 96%, 12.6% higher than the average score among students who completed all coursework components.`,
        thumbnail: "assets/osc/architecture.png",
        languages: ["C"],
        moreImages: ['assets/osc/output.png']
    },
    {
        title: "Reversi",
        date: "2023",
        description: `Developed the Reversi board game in Java using the MVC design pattern. The game features an AI opponent which greedily chooses the best available move.`,
        languages: ["Java"],
        thumbnail: "assets/nottingham.svg",
    },
    {
        title: "Fundamentals of Artificial Intelligence",
        date: "2023",
        description: `University project to build a neural network to classify whether a patient has heart disease.`,
        languages: ["Python"],
        thumbnail: "assets/nottingham.svg",
    }
]

export default projects;