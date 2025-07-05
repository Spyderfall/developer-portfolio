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
        // ✅ Dark theme: same vivid two blobs
        const colors = ['#6366F1', '#8B5CF6'];

        const r1 = 250;
        const r2 = 250;

        const x1 = canvas.width * 0.3 + (targetX - 0.5) * 20;
        const y1 = canvas.height * 0.4 + (targetY - 0.5) * 20;

        const gradient1 = ctx.createRadialGradient(x1, y1, 0, x1, y1, r1);
        gradient1.addColorStop(0, `${colors[0]}AA`);
        gradient1.addColorStop(0.5, `${colors[0]}55`);
        gradient1.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient1;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const x2 = canvas.width * 0.7 - (targetX - 0.5) * 20;
        const y2 = canvas.height * 0.6 - (targetY - 0.5) * 20;

        const gradient2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, r2);
        gradient2.addColorStop(0, `${colors[1]}AA`);
        gradient2.addColorStop(0.5, `${colors[1]}55`);
        gradient2.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient2;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

      } else {
        // ✅ Light theme: subtle smooth glow tracking the cursor
        const glowColor = '#93C5FD';

        // Smooth follow: gradually ease the glowX/glowY to target
        glowX += (targetX - glowX) * 0.05; // smaller factor = smoother
        glowY += (targetY - glowY) * 0.05;

        const x = glowX * canvas.width * 0.5; // limit offset to 50% of width
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
