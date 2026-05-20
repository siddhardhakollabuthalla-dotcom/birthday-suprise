import { motion } from "framer-motion";

import FloatingHearts from "../components/FloatingHearts";

const memories = [
  {
    title: "Your Smile",
    text:
      "Your smile has always been the light that brightens even the darkest days.",
  },

  {
    title: "Our Memories",
    text:
      "Every laugh, every little moment, every memory with you became a treasure in our hearts.",
  },

  {
    title: "Growing Up",
    text:
      "Watching you grow into such a beautiful soul has been one of life's greatest blessings.",
  },

  {
    title: "Forever Protected",
    text:
      "No matter how much time passes, you will always be the little star we protect and love forever.",
  },
];

function StoryCard({
  title,
  text,
  index,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1.3,
        delay: index * 0.2,
      }}
      className="
        relative
        overflow-hidden
        rounded-[40px]
        p-10
        md:p-16
        glass-story
      "
    >

      {/* Glow */}
      <div
        className="
          absolute
          -top-20
          -right-20
          w-60
          h-60
          rounded-full
          bg-pink-500/10
          blur-[100px]
        "
      />

      <div className="relative z-10">

        <motion.h2
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            text-3xl
            md:text-5xl
            font-black
            bg-gradient-to-r
            from-pink-300
            via-white
            to-yellow-200
            bg-clip-text
            text-transparent
          "
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 0.8,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 1,
          }}
          className="
            mt-8
            text-lg
            md:text-2xl
            leading-relaxed
            text-white/80
          "
        >
          {text}
        </motion.p>

      </div>

    </motion.div>
  );
}

export default function EmotionalStory() {
  return (
    <section className="relative py-40 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#050816] via-[#120b2f] to-[#050816]" />

        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[140px]" />

        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px]" />

      </div>

      {/* Hearts */}
      <FloatingHearts />

      {/* Stars */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:45px_45px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="text-center"
        >

          <p className="uppercase tracking-[0.5em] text-pink-300 text-sm mb-6">
            Beautiful Memories
          </p>

          <h1
            className="
              text-5xl
              md:text-8xl
              font-black
              leading-tight
            "
          >
            Every Moment
            <br />

            <span className="bg-gradient-to-r from-pink-300 via-white to-yellow-200 bg-clip-text text-transparent">
              With You Is Precious
            </span>
          </h1>

        </motion.div>

        {/* Story Cards */}
        <div className="mt-32 space-y-20">

          {memories.map((memory, index) => (
            <StoryCard
              key={index}
              title={memory.title}
              text={memory.text}
              index={index}
            />
          ))}

        </div>

      </div>

    </section>
  );
}