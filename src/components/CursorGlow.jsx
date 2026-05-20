import { useEffect, useRef } from "react";

export default function CursorGlow() {

  const glowRef = useRef();

  useEffect(() => {

    const glow = glowRef.current;

    const move = (e) => {

      glow.animate(
        {
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
        },
        {
          duration: 400,
          fill: "forwards",
        }
      );
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };

  }, []);

  return (
    <div
      ref={glowRef}
      className="
        fixed
        w-[300px]
        h-[300px]
        rounded-full
        pointer-events-none
        z-[999]
        blur-[100px]
        opacity-20
        bg-pink-500
        mix-blend-screen
        -translate-x-1/2
        -translate-y-1/2
      "
    />
  );
}