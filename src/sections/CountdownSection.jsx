import Countdown from "react-countdown";
import { motion } from "framer-motion";

function TimeCard({ label, value }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -8,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        px-8
        py-10
        glass-card
        group
      "
    >
      {/* Glow Border */}
      <div className="absolute inset-0 rounded-3xl border border-white/10" />

      {/* Animated Gradient */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-700
          bg-gradient-to-br
          from-pink-500/20
          via-purple-500/10
          to-yellow-300/20
        "
      />

      {/* Floating Glow */}
      <div
        className="
          absolute
          -top-10
          -left-10
          w-32
          h-32
          rounded-full
          bg-pink-500/20
          blur-3xl
        "
      />

      <div className="relative z-10 text-center">

        <motion.h1
          key={value}
          initial={{
            scale: 0.7,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            text-5xl
            md:text-7xl
            font-black
            bg-gradient-to-b
            from-white
            to-pink-200
            bg-clip-text
            text-transparent
          "
        >
          {value}
        </motion.h1>

        <p className="mt-4 text-white/70 tracking-[0.3em] uppercase text-sm">
          {label}
        </p>

      </div>
    </motion.div>
  );
}

export default function CountdownSection({
  onComplete,
}) {

  // CHANGE THIS DATE
  //const birthdayDate = new Date(
    //"2026-06-01T00:00:00"
  const birthdayDate = new Date(
  Date.now() + 10000
);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* Background Aurora */}
      <div className="absolute inset-0">

        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px]" />

        <div className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[140px]" />

      </div>

      {/* Animated Stars */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:45px_45px]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">

        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 2,
              height: Math.random() * 3 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
            }}
          />
        ))}

      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
        >

          <p className="uppercase tracking-[0.5em] text-pink-300 text-sm md:text-base mb-6">
            Every Moment Matters
          </p>

          <h1
            className="
              text-4xl
              md:text-7xl
              font-black
              leading-tight
              max-w-5xl
              mx-auto
            "
          >
            Counting Every Second
            <br />

            <span className="bg-gradient-to-r from-pink-300 via-white to-yellow-200 bg-clip-text text-transparent">
              Until Your Special Day
            </span>
          </h1>

        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 0.7,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="mt-8 text-lg md:text-2xl text-white/70"
        >
          A magical celebration is getting closer ✨
        </motion.p>

        {/* Countdown */}
        <div className="mt-20">

          <Countdown
            date={birthdayDate}
            onComplete={onComplete}
            renderer={({
              days,
              hours,
              minutes,
              seconds,
            }) => (
              <div
                className="
                  grid
                  grid-cols-2
                  lg:grid-cols-4
                  gap-6
                  md:gap-10
                "
              >
                <TimeCard
                  label="Days"
                  value={days}
                />

                <TimeCard
                  label="Hours"
                  value={hours}
                />

                <TimeCard
                  label="Minutes"
                  value={minutes}
                />

                <TimeCard
                  label="Seconds"
                  value={seconds}
                />
              </div>
            )}
          />

        </div>

      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-pink-500/10 to-transparent" />

    </section>
  );
}