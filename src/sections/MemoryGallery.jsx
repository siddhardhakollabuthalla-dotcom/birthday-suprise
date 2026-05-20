import { motion } from "framer-motion";

import Tilt from "react-parallax-tilt";

import {
  PhotoProvider,
  PhotoView,
} from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";

const images = [
  "/images/sister1.jpg",
  "/images/sister2.jpg",
  "/images/sister3.jpg",
  "/images/sister4.jpg",
  "/images/sister5.jpg",
  "/images/sister6.jpg",
];

function GalleryCard({
  src,
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
        duration: 1,
        delay: index * 0.1,
      }}
    >

      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        perspective={1200}
        transitionSpeed={1500}
        scale={1.03}
      >

        <PhotoView src={src}>

          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="
              relative
              overflow-hidden
              rounded-[30px]
              group
              cursor-pointer
            "
          >

            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-pink-500/20
                via-transparent
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-700
                z-10
              "
            />

            {/* Border Glow */}
            <div
              className="
                absolute
                inset-0
                rounded-[30px]
                border
                border-white/10
                group-hover:border-pink-300/40
                transition-all
                duration-700
                z-20
              "
            />

            {/* Image */}
            <img
              src={src}
              alt="memory"
              loading="lazy"
              className="
                w-full
                h-full
                object-cover
                transition-all
                duration-[2000ms]
                group-hover:scale-110
              "
            />

          </motion.div>

        </PhotoView>

      </Tilt>

    </motion.div>
  );
}

export default function MemoryGallery() {
  return (
    <section className="relative py-40 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#130b30] to-[#050816]" />

        <div className="absolute top-[20%] left-[5%] w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-[140px]" />

        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[140px]" />

      </div>

      {/* Stars */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:45px_45px]" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6">

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
            Forever Beautiful
          </p>

          <h1
            className="
              text-5xl
              md:text-8xl
              font-black
              leading-tight
            "
          >
            Beautiful Memories
            <br />

            <span className="bg-gradient-to-r from-pink-300 via-white to-yellow-200 bg-clip-text text-transparent">
              Forever
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-2xl text-white/70 max-w-3xl mx-auto">
            Every picture holds a story, every memory holds a heartbeat.
          </p>

        </motion.div>

        {/* Gallery */}
        <PhotoProvider>

          <div
            className="
              mt-24
              columns-1
              md:columns-2
              xl:columns-3
              gap-6
              space-y-6
            "
          >

            {images.map((image, index) => (
              <GalleryCard
                key={index}
                src={image}
                index={index}
              />
            ))}

          </div>

        </PhotoProvider>

      </div>

    </section>
  );
}