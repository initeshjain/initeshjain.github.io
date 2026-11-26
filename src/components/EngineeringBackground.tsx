import React, { useEffect, useRef } from "react";

export const EngineeringBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Glowing Single-Color Cyan/Cobalt Pulses along Grid Lines
    interface GridPulse {
      x: number;
      y: number;
      length: number;
      speed: number;
      horizontal: boolean;
      alpha: number;
    }

    const pulses: GridPulse[] = [];
    const gridSize = 36;

    for (let i = 0; i < 22; i++) {
      pulses.push({
        x: Math.floor(Math.random() * (width / gridSize)) * gridSize,
        y: Math.floor(Math.random() * (height / gridSize)) * gridSize,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 2 + 1.2,
        horizontal: Math.random() > 0.5,
        alpha: Math.random() * 0.4 + 0.3
      });
    }

    // Drifting Engineering Measurement Ticks and Geometric Coordinates
    interface Crosshair {
      x: number;
      y: number;
      size: number;
      alpha: number;
      label?: string;
    }

    const crosshairs: Crosshair[] = [];
    const labels = ["0x2A", "SYS.CLK", "PORT:8080", "12ms", "DIAG.OK", "ACK:SYN", "BUS:32"];
    for (let i = 0; i < 16; i++) {
      crosshairs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 7,
        alpha: Math.random() * 0.25 + 0.15,
        label: labels[i % labels.length]
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle physical cutting mat grid & markings in the background
      ctx.strokeStyle = "rgba(203, 213, 225, 0.4)";
      ctx.lineWidth = 0.75;

      // Vertical grid lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal grid lines
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Animate glowing single-color (Cobalt/Cyan `#2563EB`) signal currents traveling along grid lines
      pulses.forEach((p) => {
        ctx.save();
        ctx.strokeStyle = "#2563EB";
        ctx.shadowColor = "#3B82F6";
        ctx.shadowBlur = 8;
        ctx.lineWidth = 2;
        ctx.globalAlpha = p.alpha;

        ctx.beginPath();
        if (p.horizontal) {
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.length, p.y);
          p.x += p.speed;
          if (p.x > width) {
            p.x = -p.length;
            p.y = Math.floor(Math.random() * (height / gridSize)) * gridSize;
          }
        } else {
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x, p.y + p.length);
          p.y += p.speed;
          if (p.y > height) {
            p.y = -p.length;
            p.x = Math.floor(Math.random() * (width / gridSize)) * gridSize;
          }
        }
        ctx.stroke();

        // Glowing head of pulse
        ctx.beginPath();
        ctx.arc(
          p.horizontal ? p.x + p.length : p.x,
          p.horizontal ? p.y : p.y + p.length,
          2.5,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = "#60A5FA";
        ctx.fill();
        ctx.restore();
      });

      // 3. Draw drafting crosshairs, caliper ticks and technical labels
      crosshairs.forEach((c) => {
        ctx.save();
        ctx.strokeStyle = "rgba(100, 116, 139, 0.35)";
        ctx.lineWidth = 1;

        // Crosshair (+)
        ctx.beginPath();
        ctx.moveTo(c.x - c.size, c.y);
        ctx.lineTo(c.x + c.size, c.y);
        ctx.moveTo(c.x, c.y - c.size);
        ctx.lineTo(c.x, c.y + c.size);
        ctx.stroke();

        // Technical coordinate text
        if (c.label) {
          ctx.font = "9px ui-monospace, SFMono-Regular, Menlo, monospace";
          ctx.fillStyle = "rgba(100, 116, 139, 0.45)";
          ctx.fillText(c.label, c.x + 6, c.y - 4);
        }
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};
