import { useEffect, useRef } from "react";

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const colors = {
    head: "#0e191d",
    body: "rgba(59, 130, 246, ",
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 20;
    const columns = Math.floor(window.innerWidth / fontSize);
    const drops: number[] = Array(columns)
      .fill(0)
      .map(() => Math.random() * -100);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );

        ctx.fillStyle = colors.head;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        for (let j = 1; j < 15; j++) {
          const opacity = 1 - j * 0.07;
          if (opacity > 0) {
            ctx.fillStyle = `${colors.body}${opacity * 0.4})`;
            ctx.fillText(text, i * fontSize, (drops[i] - j) * fontSize);
          }
        }

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [colors.body, colors.head]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full rounded-full"
        style={{
          opacity: 0.9,
        }}
      />

      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: `
      radial-gradient(
        circle at center, 
        rgba(14, 25, 29, 0) 0%, 
        rgba(14, 25, 29, 0) 40%, 
        #0e191d 95%
      ),
      linear-gradient(
        to bottom, 
        #0e191d 0%, 
        rgba(14, 25, 29, 0.5) 8%, 
        rgba(14, 25, 29, 0) 18%, 
        rgba(14, 25, 29, 0) 82%, 
        rgba(14, 25, 29, 0.5) 92%, 
        #0e191d 100%
      )
    `,
        }}
      />
    </div>
  );
};

export default MatrixRain;
