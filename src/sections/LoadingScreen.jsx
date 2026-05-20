import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <section className="fixed inset-0 z-50 overflow-hidden bg-[#050816] flex items-center justify-center">

      {/* Aurora Background */}
      <div className="absolute inset-0">

        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600 blur-[160px] opacity-30 animate-pulse" />

        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-pink-500 blur-[160px] opacity-20 animate-pulse" />

      </div>

      {/* Star Layer */}
      <div className="absolute inset-0 opacity-25">
        <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:45px_45px]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">

        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      </div>

      {/* Main Content */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-20 text-center px-6"
      >

        {/* Small Intro Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="uppercase tracking-[0.5em] text-sm md:text-base text-pink-300 mb-6"
        >
          A Magical Experience
        </motion.p>

        {/* Main Title */}
        <motion.h1
          animate={{
            textShadow: [
              "0 0 20px rgba(255,255,255,0.4)",
              "0 0 40px rgba(255,105,180,0.8)",
              "0 0 20px rgba(255,255,255,0.4)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="text-5xl md:text-8xl font-black leading-tight"
        >
          A Special
          <br />

          <span className="bg-gradient-to-r from-pink-300 via-white to-yellow-200 bg-clip-text text-transparent">
            Surprise
          </span>

          <br />

          Is Waiting…
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 0.7,
            y: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 1,
          }}
          className="mt-8 text-lg md:text-2xl text-white/70"
        >
          Crafted with love, memories, and magic ✨
        </motion.p>

      </motion.div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-pink-500/10 to-transparent" />

    </section>
  );
}