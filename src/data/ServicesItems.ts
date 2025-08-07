export type Category =
    | "Services"
    | "Gigs"
    | "Products"
    | "Notion Templates"
    | "Resume Templates";

export type Item = {
    id: string;
    title: string;
    description: string;
    category: Category;
    tags?: string[];
    link: string;
    price?: string;
    image?: string;
};

export const items: Item[] = [
    {
        id: "rag-custom-pipeline",
        title: "RAG Custom Pipeline Implementation",
        description: "Custom Retrieval-Augmented Generation (RAG) pipelines with vector DBs, embeddings, and API integration.",
        category: "Gigs",
        tags: ["LLM", "RAG", "AI", "Embeddings", "LangChain"],
        price: "Custom",
        link: "mailto:nitesh.exe@gmail.com?subject=Request%20for%20RAG%20Pipeline%20Implementation&body=Hi%20Nitesh%2C%0A%0AI%20am%20interested%20in%20your%20RAG%20pipeline%20implementation%20gig.%20Could%20you%20please%20share%20details%20about%20the%20architecture%2C%20tech%20stack%20used%2C%20and%20pricing%20for%20a%20custom%20solution%20involving%20vector%20database%2C%20embeddings%2C%20document%20loaders%2C%20and%20API%20integration%3F%0A%0AThanks%2C%0A%5BYour%20Name%5D"
    },
    {
        id: "svc-ci-cd",
        title: "End-to-end CI/CD setup (GitHub Actions/TeamCity)",
        description: "Pipelines with caching, test gates, and multi-env promotion.",
        category: "Services",
        tags: ["DevOps", "Automation", "Kubernetes"],
        price: "Custom",
        link: "mailto:nitesh.exe@gmail.com?subject=Request%20for%20CI/CD%20Setup%20Service&body=Hi%20Nitesh%2C%0A%0AI%20am%20interested%20in%20your%20CI/CD%20setup%20service%20using%20GitHub%20Actions%20or%20TeamCity.%20I%20would%20like%20to%20know%20more%20about%20the%20custom%20pricing%20and%20how%20we%20can%20integrate%20it%20into%20our%20workflow%2C%20including%20test%20gates%2C%20caching%2C%20and%20multi-environment%20deployment.%0A%0AThanks%2C%0A%5BYour%20Name%5D"
    },
    // {
    //     id: "gig-video",
    //     title: "Tech explainer video editing",
    //     description: "Motion graphics, captions, brand kit, and upload-ready output.",
    //     category: "Gigs",
    //     tags: ["Video", "YouTube"],
    //     link: "#"
    // },
    {
        id: "prod-admin-template",
        title: "React Admin Panel (Vite + Tailwind)",
        description: "Authentication, protected routes, layout, dark mode.",
        category: "Products",
        tags: ["React", "Tailwind"],
        price: "₹999",
        link: "#"
    },
    {
        id: "notion-os",
        title: "Notion Project OS",
        description: "Projects, tasks, sprints, and retros in one Notion workspace.",
        category: "Notion Templates",
        tags: ["Productivity", "PM"],
        price: "Coming Soon",
        link: "#"
    },
    {
        id: "resume-ats",
        title: "ATS-friendly Resume Template",
        description: "Clean, modern, recruiter-tested template with examples.",
        category: "Resume Templates",
        tags: ["Career"],
        price: "Coming Soon",
        link: "#"
    },
    {
        id: "690-ai-prompts-for-success",
        title: "690 AI-Prompts for Success in Every Role",
        description: "Unlock Your Creativity and Productivity with 690 AI-Powered Prompts for Every Professional Scenario!",
        category: "Products",
        tags: ["Productivity", "Career", "Growth"],
        price: "",
        link: "https://rzp.io/l/690-aipowered-prompts"
    },
    {
        id: "100-ways-to-try-chatgpt-today",
        title: "100 Ways to Try ChatGPT Today",
        description: "This collection of hand-curated prompts will help you get the most out of ChatGPT, whether you're a beginner or a seasoned user.",
        category: "Products",
        tags: ["Productivity", "Growth"],
        price: "",
        link: "https://rzp.io/l/100-ways-to-try-chatgpt-today"
    },
    {
        id: "bug-fix-service",
        title: "Bug Fixing in Web Applications",
        description: "Fix critical bugs, runtime errors, or UI glitches in your React, Node.js, or Express apps.",
        category: "Services",
        tags: ["Bug Fix", "JavaScript", "React", "Node.js"],
        price: "Starting ₹499",
        link: "mailto:nitesh.exe@gmail.com?subject=Bug%20Fix%20Request&body=Hi%20Nitesh%2C%0A%0AI%20have%20a%20bug%20in%20my%20application%20that%20needs%20urgent%20fixing.%20Please%20let%20me%20know%20if%20you%27re%20available%20and%20what%20details%20you%20need.%0A%0AThanks%2C%0A%5BYour%20Name%5D"
    },
    {
        id: "vulnerability-fix",
        title: "Security Vulnerability Fix",
        description: "Audit and fix XSS, CSRF, injection attacks, and other security flaws.",
        category: "Services",
        tags: ["Security", "Vulnerability", "Audit", "OWASP"],
        price: "Custom",
        link: "mailto:nitesh.exe@gmail.com?subject=Security%20Fix%20Request&body=Hi%20Nitesh%2C%0A%0AI%20would%20like%20you%20to%20check%20and%20fix%20potential%20security%20vulnerabilities%20in%20my%20application.%0A%0AThanks%2C%0A%5BYour%20Name%5D"
    },
    {
        id: "perf-optimization",
        title: "Performance Optimization (Frontend/Backend)",
        description: "Improve load time, Core Web Vitals, database indexing, and memory usage.",
        category: "Services",
        tags: ["Performance", "Optimization", "Database", "React", "Node.js"],
        price: "Custom",
        link: "mailto:nitesh.exe@gmail.com?subject=Performance%20Optimization%20Service&body=Hi%20Nitesh%2C%0A%0AI%27m%20interested%20in%20performance%20optimization%20for%20my%20web%20application.%20Let%20me%20know%20how%20to%20proceed.%0A%0AThanks%2C%0A%5BYour%20Name%5D"
    },
    {
        id: "dockerize-app",
        title: "Dockerize Your App",
        description: "Containerize your app with Docker, create Dockerfiles, docker-compose, and optimize image size.",
        category: "Gigs",
        tags: ["DevOps", "Docker", "Containers"],
        price: "Starting ₹499",
        link: "mailto:nitesh.exe@gmail.com?subject=Dockerization%20Service%20Request&body=Hi%20Nitesh%2C%0A%0AI%20want%20to%20containerize%20my%20application%20using%20Docker.%20Please%20help%20me%20set%20this%20up.%0A%0AThanks%2C%0A%5BYour%20Name%5D"
    },
    {
        id: "api-dev-docs",
        title: "REST API Development + Documentation",
        description: "Build secure REST APIs with Express/NestJS + OpenAPI documentation.",
        category: "Services",
        tags: ["API", "Express", "NestJS", "Swagger"],
        price: "Custom",
        link: "mailto:nitesh.exe@gmail.com?subject=API%20Development%20Request&body=Hi%20Nitesh%2C%0A%0AI%20need%20a%20REST%20API%20built%20and%20documented.%20Please%20share%20next%20steps%20to%20get%20started.%0A%0AThanks%2C%0A%5BYour%20Name%5D"
    },
    {
        id: "nextjs-starter",
        title: "Next.js Starter Template (SEO + Auth + Tailwind)",
        description: "Clean boilerplate with SEO, Auth (NextAuth), Tailwind, dark mode, and API routes.",
        category: "Products",
        tags: ["Next.js", "Tailwind", "Fullstack"],
        price: "Coming Soon",
        link: "#"
    },
    {
        id: "resume-review",
        title: "Resume Review",
        description: "Get Your Resume Reviewed To Get Job You Want.",
        category: "Services",
        tags: ["Job", "Resume", "Career"],
        price: "₹99",
        link: "mailto:nitesh.exe@gmail.com?subject=Resume%20Review%20Request&body=Hi%20Nitesh%2C%0A%0AI%20would%20like%20to%20get%20my%20resume%20reviewed.%20Here%20are%20some%20details%3A%0A%0A-%20My%20current%20role%3A%20%0A-%20Years%20of%20experience%3A%20%0A-%20Target%20roles%3A%20%0A%0AThanks%2C%0A%5BYour%20Name%5D"
    }
];
