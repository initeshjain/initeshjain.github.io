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
        tags: ["Career", "Dream Job"],
        price: "Get Now",
        link: "https://rzp.io/rzp/OJfHmp3r"
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
        id: "ai-agent-development",
        title: "Custom AI Agent Development (LangChain/LangGraph)",
        description: "Build intelligent AI agents using LangChain and LangGraph for task automation, decision-making, and multi-step workflows tailored to your business.",
        category: "Services",
        tags: ["AI", "LangChain", "LangGraph", "Agents", "GenAI"],
        price: "Custom",
        link: "mailto:nitesh.exe@gmail.com?subject=AI%20Agent%20Development%20Request&body=Hi%20Nitesh%2C%0A%0AI%20am%20interested%20in%20building%20a%20custom%20AI%20agent%20for%20my%20business.%20Could%20you%20share%20details%20about%20your%20approach%2C%20tech%20stack%2C%20and%20pricing%3F%0A%0AThanks%2C%0A%5BYour%20Name%5D"
    },
    {
        id: "voice-agent-development",
        title: "AI Voice Agent (GPT-4 Realtime / WebSockets)",
        description: "Build production-ready voice agents using OpenAI GPT-4 Realtime API with WebSockets for customer outreach, support, or data collection.",
        category: "Services",
        tags: ["AI", "Voice Agent", "OpenAI", "WebSockets", "Realtime"],
        price: "Custom",
        link: "mailto:nitesh.exe@gmail.com?subject=Voice%20Agent%20Development%20Request&body=Hi%20Nitesh%2C%0A%0AI%20am%20interested%20in%20building%20a%20voice%20agent%20for%20my%20business.%20Please%20share%20details%20on%20capabilities%20and%20pricing.%0A%0AThanks%2C%0A%5BYour%20Name%5D"
    },
    {
        id: "custom-chatbot",
        title: "Custom AI Chatbot (RAG + LLM)",
        description: "Build a chatbot that answers questions from your documents, databases, or knowledge base using RAG, vector search, and LLMs.",
        category: "Gigs",
        tags: ["AI", "Chatbot", "RAG", "LLM", "Vector DB"],
        price: "Custom",
        link: "mailto:nitesh.exe@gmail.com?subject=Custom%20Chatbot%20Request&body=Hi%20Nitesh%2C%0A%0AI%20need%20a%20custom%20AI%20chatbot%20built%20on%20my%20data.%20Please%20share%20details%20on%20how%20we%20can%20get%20started.%0A%0AThanks%2C%0A%5BYour%20Name%5D"
    },
    {
        id: "llm-integration",
        title: "LLM API Integration & Prompt Engineering",
        description: "Integrate OpenAI GPT-4/5, Claude, or open-source LLMs into your app with optimized prompts, caching, and LangFuse observability.",
        category: "Services",
        tags: ["LLM", "OpenAI", "Prompt Engineering", "LangFuse", "API"],
        price: "Custom",
        link: "mailto:nitesh.exe@gmail.com?subject=LLM%20Integration%20Request&body=Hi%20Nitesh%2C%0A%0AI%20want%20to%20integrate%20LLMs%20into%20my%20application.%20Could%20you%20help%20with%20API%20integration%20and%20prompt%20optimization%3F%0A%0AThanks%2C%0A%5BYour%20Name%5D"
    },
    {
        id: "ai-workflow-automation",
        title: "AI Workflow Automation",
        description: "Automate repetitive business workflows using AI agents, from data extraction and summarization to email drafting and report generation.",
        category: "Services",
        tags: ["AI", "Automation", "Agents", "Productivity"],
        price: "Custom",
        link: "mailto:nitesh.exe@gmail.com?subject=AI%20Workflow%20Automation%20Request&body=Hi%20Nitesh%2C%0A%0AI%20want%20to%20automate%20some%20business%20workflows%20using%20AI.%20Please%20let%20me%20know%20how%20we%20can%20discuss%20this.%0A%0AThanks%2C%0A%5BYour%20Name%5D"
    },
    {
        id: "mcp-server-development",
        title: "MCP Server Development (Cursor / Claude)",
        description: "Build custom MCP servers to connect AI assistants like Cursor and Claude Code to your internal tools, APIs, and databases.",
        category: "Gigs",
        tags: ["MCP", "Cursor", "Claude", "AI", "Tooling"],
        price: "Custom",
        link: "mailto:nitesh.exe@gmail.com?subject=MCP%20Server%20Development%20Request&body=Hi%20Nitesh%2C%0A%0AI%20want%20a%20custom%20MCP%20server%20built%20to%20connect%20my%20tools%20to%20AI%20assistants.%20Please%20share%20details.%0A%0AThanks%2C%0A%5BYour%20Name%5D"
    },
    {
        id: "golang-microservice",
        title: "Golang Microservice Development",
        description: "Design and build high-performance microservices in Go with REST/gRPC APIs, database integration, and containerized deployment.",
        category: "Services",
        tags: ["Golang", "Microservices", "Backend", "API", "Docker"],
        price: "Custom",
        link: "mailto:nitesh.exe@gmail.com?subject=Golang%20Microservice%20Request&body=Hi%20Nitesh%2C%0A%0AI%20need%20a%20microservice%20built%20in%20Golang.%20Could%20you%20share%20your%20approach%20and%20pricing%3F%0A%0AThanks%2C%0A%5BYour%20Name%5D"
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
