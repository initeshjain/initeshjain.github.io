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
    link: string;     // external URL or mailto
    price?: string;   // optional
    image?: string;   // optional custom image (uses icon by default)
};

export const items: Item[] = [
    {
        id: "svc-ci-cd",
        title: "End-to-end CI/CD setup (GitHub Actions/TeamCity)",
        description: "Pipelines with caching, test gates, and multi-env promotion.",
        category: "Services",
        tags: ["DevOps", "Automation", "Kubernetes"],
        price: "Custom",
        link: "mailto:nitesh.exe@gmail.com"
    },
    {
        id: "gig-video",
        title: "Tech explainer video editing",
        description: "Motion graphics, captions, brand kit, and upload-ready output.",
        category: "Gigs",
        tags: ["Video", "YouTube"],
        link: "#"
    },
    {
        id: "prod-admin-template",
        title: "React Admin Shell (Vite + Tailwind)",
        description: "Auth shell, protected routes, layout, dark mode.",
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
        price: "₹499",
        link: "#"
    },
    {
        id: "resume-ats",
        title: "ATS-friendly Resume Template",
        description: "Clean, modern, recruiter-tested template with examples.",
        category: "Resume Templates",
        tags: ["Career"],
        price: "₹299",
        link: "#"
    }
];
