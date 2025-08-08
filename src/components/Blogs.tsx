const blogs = [
    {
        title:
            "Instead of blaming the system, let’s push for real change — industry awareness, hackathons & practical learning.",
        date: "April 4, 2025",
        link: "https://initeshjain.medium.com/is-the-education-sinstead-of-blaming-the-system-lets-push-for-real-change-industry-awareness-396b8230f8cb",
        image:
            "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Vy6znySNZaLqYjrUMBCKMg.png",
    },
    {
        title: "NodeJs Trick! Boost Performance With Clustering 🚀",
        date: "January 12, 2025",
        link: "https://initeshjain.medium.com/-55385ec2c8be",
        image:
            "https://lh3.googleusercontent.com/csXm00pBuJvmhsXcI1XauxFGrE66sHBbWI9QyKY0lt2h55a1VaKl6F5TrlH0wBC_aijloKw9lh8a=e14-rw-lo-sc0xffffff-w2540",
    },
    {
        title: "A JavaScript Trick Most Developers Miss",
        date: "January 2, 2025",
        link: "https://initeshjain.medium.com/a-javascript-trick-most-developers-miss-1614935aa37f",
        image:
            "https://cdn.sanity.io/images/3do82whm/next/a69e3ba2441d35dd1a7945e826064708f30c10a9-1000x667.jpg",
    },
    {
        title:
            "Build Real-Time Dashboards with Server-Sent Events (SSE) in Go (Golang) — Step-by-Step Guide",
        date: "October 29, 2024",
        link: "https://initeshjain.medium.com/build-real-time-dashboards-with-server-sent-events-sse-in-go-golang-step-by-step-guide-05be5b4c076b",
        image:
            "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*1IDY-voeERLpcsF-9-0eWA.png",
    },
    {
        title: "🚀 How Golang and Goroutines Supercharged My Server Performance!",
        date: "June 11, 2023",
        link: "https://initeshjain.medium.com/how-golang-and-goroutines-supercharged-my-server-performance-4c2265095ffb",
        image:
            "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-9LXFLgs3J1RuFRbYo7CVg.png",
    },
];

export default function Blogs() {
    return (
        <div className="min-h-screen px-4 py-12">
            <header className="max-w-5xl mx-auto mb-10 text-center">
                <h1 className="text-3xl font-bold">📚 Blog Posts</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Deep dives, guides, and notes from my engineering journey.
                </p>
            </header>

            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                    <a
                        key={index}
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col"
                    >
                        <div className="relative w-full h-48 bg-gray-100">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                            <span className="inline-block text-xs text-gray-500 border px-2 py-0.5 rounded-full mb-3 self-start">
                                {blog.date}
                            </span>
                            <h2 className="text-base font-semibold text-gray-800 leading-snug flex-1">
                                {blog.title}
                            </h2>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
