'use client';

import { useEffect, useRef } from 'react';

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let targetX = 0.0;
    let targetY = 0.0;
    let glowX = 0.0;
    let glowY = 0.0;

    const handleMouse = (e: MouseEvent) => {
      targetX = e.clientX / window.innerWidth;
      targetY = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', handleMouse);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains('dark');

      if (isDark) {
        // ✅ Dark theme: test same subtle smooth glow like light theme
        const glowColor = '#6366F1'; // Indigo shade for dark

        // Smooth follow: same as light theme
        glowX += (targetX - glowX) * 0.05;
        glowY += (targetY - glowY) * 0.05;

        const x = glowX * canvas.width * 0.5;
        const y = glowY * canvas.height * 0.5;

        const r = Math.max(canvas.width, canvas.height) * 0.7;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
        gradient.addColorStop(0, `${glowColor}66`);
        gradient.addColorStop(0.4, `${glowColor}33`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

      } else {
        // ✅ Light theme: same subtle smooth glow tracking the cursor
        const glowColor = '#93C5FD';

        glowX += (targetX - glowX) * 0.05;
        glowY += (targetY - glowY) * 0.05;

        const x = glowX * canvas.width * 0.5;
        const y = glowY * canvas.height * 0.5;

        const r = Math.max(canvas.width, canvas.height) * 0.7;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
        gradient.addColorStop(0, `${glowColor}66`);
        gradient.addColorStop(0.4, `${glowColor}33`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </>
  );
}
