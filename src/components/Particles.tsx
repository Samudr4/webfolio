'use client';

import React, { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    type Particle = {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      color: string;
      opacity: number;
      blinkSpeed: number;
      blinkPhase: number;
    };

    // Reduced particle count to improve performance
    const particleCount = 50;
    const purpleColors = [
      "128,0,128",
      "138,43,226",
      "147,112,219",
      "186,85,211"
    ];

    const particlesArray: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 2 + 1; // Slightly smaller particles
      const x = Math.random() * width;
      const y = Math.random() * height;
      const color = purpleColors[Math.floor(Math.random() * purpleColors.length)];
      const opacity = Math.random() * 0.5 + 0.5;
      const blinkSpeed = 0.001 + Math.random() * 0.001; // Slower blinking speed range
      const blinkPhase = Math.random() * Math.PI * 2;
      particlesArray.push({ x, y, size, baseX: x, baseY: y, color, opacity, blinkSpeed, blinkPhase });
    }

    const mouse = { x: null as number | null, y: null as number | null };

    // Throttle mouse move updates for performance
    let lastMouseUpdate = 0;
    const MOUSE_UPDATE_INTERVAL = 50; // milliseconds

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const time = performance.now();

      particlesArray.forEach(p => {
        p.opacity = 0.5 + 0.5 * Math.sin(time * p.blinkSpeed + p.blinkPhase);
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.color},${p.opacity.toFixed(2)})`;
        ctx.shadowColor = `rgba(${p.color},${p.opacity.toFixed(2)})`;
        ctx.shadowBlur = 4; // Reduced shadow for performance
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw lines between particles with distance threshold
      const maxDistance = 90;
      ctx.lineWidth = 0.3;
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const p1 = particlesArray[i];
          const p2 = particlesArray[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = dx * dx + dy * dy;
          if (dist < maxDistance * maxDistance) {
            const distance = Math.sqrt(dist);
            const alpha = 1 - distance / maxDistance;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${p1.color},${(alpha * p1.opacity).toFixed(2)})`;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    }

    function update() {
      if (mouse.x === null || mouse.y === null) return;

      const now = Date.now();
      if (now - lastMouseUpdate < MOUSE_UPDATE_INTERVAL) {
        return; // Throttle update frequency
      }
      lastMouseUpdate = now;

      // Limit max influence radius for better performance & UX
      const INFLUENCE_RADIUS = 150;
      particlesArray.forEach(p => {
        const dx = mouse.x! - p.baseX;
        const dy = mouse.y! - p.baseY;
        const dist = dx * dx + dy * dy;
        if (dist < INFLUENCE_RADIUS * INFLUENCE_RADIUS) {
          // Move particle slightly towards mouse
          p.x = p.baseX + dx * 0.05;
          p.y = p.baseY + dy * 0.05;
        } else {
          // Reset to base position if outside influence
          p.x += (p.baseX - p.x) * 0.05;
          p.y += (p.baseY - p.y) * 0.05;
        }
      });
    }

    function animate() {
      draw();
      update();
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    window.addEventListener("mousemove", handleMouseMove);

    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particlesArray.forEach(p => {
        p.baseX = Math.random() * width;
        p.baseY = Math.random() * height;
        p.x = p.baseX;
        p.y = p.baseY;
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      style={{ backgroundColor: "transparent", display: "block" }}
    />
  );
}

