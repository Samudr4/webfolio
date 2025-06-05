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
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

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

    const particlesArray: Particle[] = [];
    const particleCount = 80;
    const purpleColors = [
      "128,0,128",        // rgb without alpha for using dynamic alpha
      "138,43,226",
      "147,112,219",
      "186,85,211"
    ];

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * width;
      const y = Math.random() * height;
      const color = purpleColors[Math.floor(Math.random() * purpleColors.length)];
      const opacity = Math.random() * 0.5 + 0.5; // start opacity between 0.5 and 1
      const blinkSpeed = 0.0015 + Math.random() * 0.0015; // slow blinking speed
      const blinkPhase = Math.random() * Math.PI * 2; // random phase offset
      particlesArray.push({ x, y, size, baseX: x, baseY: y, color, opacity, blinkSpeed, blinkPhase });
    }

    const mouse = { x: null as number | null, y: null as number | null };

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const time = performance.now();
      particlesArray.forEach(p => {
        // Calculate new opacity based on blink
        p.opacity = 0.5 + 0.5 * Math.sin(time * p.blinkSpeed + p.blinkPhase);
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.color},${p.opacity.toFixed(2)})`;
        ctx.shadowColor = `rgba(${p.color},${p.opacity.toFixed(2)})`;
        ctx.shadowBlur = 8;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function update() {
      if (mouse.x === null || mouse.y === null) return;
      particlesArray.forEach(p => {
        const dx = mouse.x - p.baseX;
        const dy = mouse.y - p.baseY;
        p.x = p.baseX + dx * 0.05;
        p.y = p.baseY + dy * 0.05;
      });
    }

    function animate() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      update();
      draw();
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
