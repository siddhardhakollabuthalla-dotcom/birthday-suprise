import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

export default function ScrollProgress() {

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
      }}
      className="
        fixed
        top-0
        left-0
        right-0
        h-[4px]
        origin-left
        z-[9999]
        bg-gradient-to-r
        from-pink-400
        via-yellow-300
        to-purple-400
      "
    />
  );
}