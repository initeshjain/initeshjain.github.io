import React, { useState } from "react";
import { FaRobot, FaMicrophone, FaFilePdf, FaServer } from "react-icons/fa";

interface NodeItem {
  id: string;
  name: string;
  sub: string;
  x: number;
  y: number;
  icon: React.ReactNode;
  color: string;
  signalTag: string;
}

export const LiveTransitMap: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>("agent");

  const nodes: NodeItem[] = [
    {
      id: "agent",
      name: "Healthcare Multi-Agent",
      sub: "Bedrock · CMR Automation",
      x: 60,
      y: 50,
      icon: <FaRobot />,
      color: "#1E40AF",
      signalTag: "AWS Bedrock · Orchestrator"
    },
    {
      id: "voice",
      name: "Realtime Voice Agents",
      sub: "WebSockets · GPT-4",
      x: 230,
      y: 140,
      icon: <FaMicrophone />,
      color: "#059669",
      signalTag: "Dues & Pharmacy Outreach"
    },
    {
      id: "rag",
      name: "Super Memory / RAG",
      sub: "LangChain · Qdrant",
      x: 400,
      y: 45,
      icon: <FaFilePdf />,
      color: "#D97706",
      signalTag: "Vector Similarity Engine"
    },
    {
      id: "systems",
      name: "Hawk Eye & Go Services",
      sub: "10M+ Daily · Kafka",
      x: 570,
      y: 135,
      icon: <FaServer />,
      color: "#7C3AED",
      signalTag: "17+ Platforms Monitored"
    }
  ];

  return (
    <div className="relative rounded-2xl border border-[#CBD5E1] bg-white p-5 sm:p-7 shadow-md overflow-hidden">
      {/* Blueprint Grid Watermark */}
      <div className="absolute inset-0 bg-grid-drafting opacity-60 pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-[#F1F5F9] pb-4">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[#1E40AF]">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-ping" />
            LIVE SIGNAL TRANSIT // ACTIVE TELEMETRY
          </div>
          <h3 className="font-display text-lg font-bold text-[#12131C] mt-0.5">
            Architecture Nodes &amp; Data Pathways
          </h3>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-[#059669] bg-[#DCFCE7] px-3 py-1 rounded-full border border-[#BBF7D0]">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span>4 NODES SYNCHRONIZED</span>
        </div>
      </div>

      {/* SVG Canvas with Animated Transit Pulse Lines */}
      <div className="relative z-10 w-full overflow-x-auto scrollbar-none py-2">
        <div className="min-w-[680px] h-[210px] relative select-none">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 210">
            {/* Background static gray transit lines */}
            <path d="M 120 70 C 180 70, 190 145, 270 145" fill="none" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />
            <path d="M 330 145 C 380 145, 380 65, 450 65" fill="none" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />
            <path d="M 510 65 C 560 65, 570 145, 620 145" fill="none" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />

            {/* Glowing active signal dashes traveling between nodes */}
            <path
              d="M 120 70 C 180 70, 190 145, 270 145"
              fill="none"
              stroke="#2563EB"
              strokeWidth="4"
              strokeLinecap="round"
              className="active-signal-line"
            />
            <path
              d="M 330 145 C 380 145, 380 65, 450 65"
              fill="none"
              stroke="#059669"
              strokeWidth="4"
              strokeLinecap="round"
              className="active-signal-line"
              style={{ animationDelay: "0.8s" }}
            />
            <path
              d="M 510 65 C 560 65, 570 145, 620 145"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="4"
              strokeLinecap="round"
              className="active-signal-line"
              style={{ animationDelay: "1.6s" }}
            />
          </svg>

          {/* Interactive Node Cards */}
          {nodes.map((node) => {
            const isSelected = activeNode === node.id;
            return (
              <div
                key={node.id}
                onClick={() => setActiveNode(node.id)}
                style={{ left: `${node.x}px`, top: `${node.y}px` }}
                className={`absolute cursor-pointer rounded-xl border px-4 py-3 transition-all duration-200 shadow-sm hover:scale-105 ${
                  isSelected
                    ? "bg-[#12131C] text-white border-[#12131C] shadow-lg -translate-y-1"
                    : "bg-white text-[#12131C] border-[#CBD5E1] hover:border-[#1E40AF]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs"
                    style={{
                      backgroundColor: isSelected ? "rgba(255,255,255,0.15)" : `${node.color}15`,
                      color: isSelected ? "#FEF08A" : node.color
                    }}
                  >
                    {node.icon}
                  </div>
                  <div>
                    <div className="font-display text-xs font-bold leading-tight">
                      {node.name}
                    </div>
                    <div className={`font-mono text-[10px] mt-0.5 ${isSelected ? "text-[#94A3B8]" : "text-[#64748B]"}`}>
                      {node.sub}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Node Telemetry Bar */}
      <div className="relative z-10 mt-3 pt-3 border-t border-[#F1F5F9] flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
        <div className="text-[#64748B]">
          ACTIVE TELEMETRY HOOK:{" "}
          <span className="font-bold text-[#1E40AF]">
            {nodes.find((n) => n.id === activeNode)?.signalTag}
          </span>
        </div>
        <div className="text-[11px] text-[#94A3B8]">
          CLICK ANY NODE TO INSPECT SUBSYSTEM
        </div>
      </div>
    </div>
  );
};
