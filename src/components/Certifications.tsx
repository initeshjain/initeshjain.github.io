import React from "react";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

interface Cert {
  title: string;
  issuer: string;
  id?: string;
  url: string;
  date: string;
  badge: string;
}

const verifiedCerts: Cert[] = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    id: "37313EA71A5B791F",
    url: "https://learn.microsoft.com/en-us/users/niteshkumarjain-6975/credentials/37313ea71a5b791f",
    date: "Jun 2024",
    badge: "AI & ML"
  },
  {
    title: "Go Language Professional Certification",
    issuer: "Vskills — India's Largest Certification Body",
    id: "67008",
    url: "https://www.vskills.in/certification/105191-go-language-professional-nitesh-kumar-jain",
    date: "Feb 2023",
    badge: "GOLANG"
  },
  {
    title: "AWS Fundamentals: Going Cloud-Native",
    issuer: "Amazon Web Services (AWS)",
    id: "Z8F7EDVWGT28",
    url: "https://drive.google.com/file/d/1tkxeXQCy5sgh2Gz5iq1QARe5xK1Ekj3c/view",
    date: "May 2019",
    badge: "CLOUD"
  },
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    id: "H855-9280",
    url: "https://drive.google.com/file/d/1ocnuzTAHTVPcYy2juyfGppyeEi9saC3O/view",
    date: "Jun 2021",
    badge: "AZURE"
  },
  {
    title: "Machine Learning for All",
    issuer: "Coursera",
    id: "RJLJEB65AJG2",
    url: "https://www.coursera.org/verify/RJLJEB65AJG2",
    date: "Oct 2020",
    badge: "ML"
  },
  {
    title: "Computer Vision — OpenCV and Python",
    issuer: "Coursera",
    id: "TEJ334BZJ5S6",
    url: "https://www.coursera.org/verify/TEJ334BZJ5S6",
    date: "May 2020",
    badge: "VISION"
  }
];

const Certifications: React.FC = () => {
  return (
    <section className="py-16 bg-[#F6F4EE]">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#1E40AF] uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E40AF]" />
            CREDENTIALS // VERIFIED CERTIFICATIONS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#12131C]">
            Licenses &amp; Professional Certifications
          </h2>
          <p className="text-[#575969] text-sm mt-1 max-w-xl">
            Selected certifications across cloud infrastructure, artificial intelligence, and systems programming.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {verifiedCerts.map((cert, idx) => (
            <a
              key={idx}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-xl border border-[#CBD5E1] bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#94A3B8]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="rounded px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0]">
                    {cert.badge}
                  </span>
                  <span className="font-mono text-[11px] text-[#94A3B8]">
                    {cert.date}
                  </span>
                </div>

                <h3 className="font-display text-sm font-bold text-[#12131C] group-hover:text-[#1E40AF] transition-colors leading-snug mb-2">
                  {cert.title}
                </h3>
                <p className="font-mono text-xs text-[#64748B] mb-2">
                  {cert.issuer}
                </p>
                {cert.id && (
                  <p className="font-mono text-[10px] text-[#94A3B8]">
                    ID: {cert.id}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-[#F8FAFC] flex items-center justify-between font-mono text-xs font-semibold text-[#1E40AF]">
                <span>Verify Credential</span>
                <FaExternalLinkAlt size={10} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
