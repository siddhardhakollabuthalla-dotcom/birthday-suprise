import { motion } from "framer-motion";

export default function FloatingHearts() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: [0, 0.7, 0],
            y: -900,
            x: [
              0,
              Math.random() * 100 - 50,
              Math.random() * 200 - 100,
            ],
          }}
          transition={{
            duration: Math.random() * 10 + 12,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
          className="absolute text-pink-400 text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "-50px",
          }}
        >
          ❤️
        </motion.div>
      ))}

    </div>
  );
}