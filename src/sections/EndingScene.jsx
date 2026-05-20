import { motion } from "framer-motion";

import FloatingHearts from "../components/FloatingHearts";

export default function EndingScene() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">

      {/* Background */}
      <div className="absolute inset-0">

        {/* Deep Space Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#0d1025] to-black" />

        {/* Aurora Glow */}
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-[160px]" />

        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[160px]" />

      </div>

      {/* Floating Hearts */}
      <FloatingHearts />

      {/* Stars */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:45px_45px]" />
      </div>

      {/* Ambient Fog */}
      <motion.div
        animate={{
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[400px]
          bg-gradient-to-t
          from-pink-500/10
          to-transparent
          blur-[100px]
        "
      />

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-5xl">

        {/* Intro Text */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            uppercase
            tracking-[0.5em]
            text-pink-300
            text-sm
            mb-8
          "
        >
          Forever & Always
        </motion.p>

        {/* Main Emotional Message */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 2,
          }}
          className="
            text-4xl
            md:text-8xl
            font-black
            leading-tight
          "
        >
          No matter how much
          <br />

          time passes,
          <br />

          <span className="bg-gradient-to-r from-pink-300 via-white to-yellow-200 bg-clip-text text-transparent">
            you will always be
            <br />
            my little sister ❤️
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 0.75,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 1.5,
          }}
          className="
            mt-12
            text-lg
            md:text-2xl
            text-white/70
            leading-relaxed
            max-w-3xl
            mx-auto
          "
        >
          Through every smile, every memory, and every moment —
          you will always be one of the most precious parts of our lives.
        </motion.p>

        {/* Made With Love */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 2.5,
            duration: 2,
          }}
          className="mt-24"
        >

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <h2
              className="
                text-3xl
                md:text-5xl
                font-bold
                bg-gradient-to-r
                from-pink-300
                via-white
                to-yellow-200
                bg-clip-text
                text-transparent
              "
            >
              Made With Love ✨
            </h2>

          </motion.div>

        </motion.div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}