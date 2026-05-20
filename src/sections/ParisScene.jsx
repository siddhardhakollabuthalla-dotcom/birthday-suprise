import { Canvas, useFrame } from "@react-three/fiber";

import {
  OrbitControls,
  Stars,
  Float,
} from "@react-three/drei";

import {
  Bloom,
  EffectComposer,
} from "@react-three/postprocessing";

import { motion } from "framer-motion";

import { useRef } from "react";

function EiffelTower() {

  return (
    <group position={[0, -1.5, 0]}>

      {/* Bottom */}
      <mesh position={[0, -2, 0]}>
        <cylinderGeometry args={[1.8, 2.8, 1.5, 4]} />

        <meshStandardMaterial
          color="#8f6b29"
          emissive="#ffd700"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Middle */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.1, 1.8, 3, 4]} />

        <meshStandardMaterial
          color="#9d7425"
          emissive="#ffcc66"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Top */}
      <mesh position={[0, 2.7, 0]}>
        <cylinderGeometry args={[0.2, 1, 2.5, 4]} />

        <meshStandardMaterial
          color="#ffd700"
          emissive="#ffd700"
          emissiveIntensity={0.9}
        />
      </mesh>

    </group>
  );
}

function FloatingLantern({ position }) {

  const ref = useRef();

  useFrame(({ clock }) => {

    if (ref.current) {

      ref.current.position.y =
        position[1] +
        Math.sin(clock.elapsedTime) * 0.2;

    }

  });

  return (
    <Float speed={2}>

      <mesh ref={ref} position={position}>

        <sphereGeometry args={[0.12, 16, 16]} />

        <meshBasicMaterial color="#ffbb66" />

      </mesh>

    </Float>
  );
}

function SceneContent({ isMobile }) {

  return (
    <>

      {/* Atmosphere */}
      <fog attach="fog" args={["#050816", 8, 30]} />

      {/* Lights */}
      <ambientLight intensity={0.6} />

      <directionalLight
        position={[4, 10, 4]}
        intensity={1.6}
      />

      <pointLight
        position={[0, 5, 0]}
        intensity={3}
        color="#ffd700"
      />

      {/* Stars */}
      <Stars
        radius={120}
        depth={50}
        count={isMobile ? 2000 : 7000}
        factor={5}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Moon */}
      <mesh position={[5, 6, -10]}>

        <sphereGeometry args={[1, 32, 32]} />

        <meshBasicMaterial color="#ffffff" />

      </mesh>

      {/* Eiffel Tower */}
      <EiffelTower />

      {/* Floating Lanterns */}
      <FloatingLantern position={[-3, 1, 2]} />
      <FloatingLantern position={[3, 2, 1]} />
      <FloatingLantern position={[-2, 3, -2]} />
      <FloatingLantern position={[2, 4, -1]} />

      {/* Ground */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -4.5, 0]}
      >

        <planeGeometry args={[50, 50]} />

        <meshStandardMaterial
          color="#090d18"
        />

      </mesh>

      {/* Post Processing */}
      <EffectComposer>

        <Bloom
          luminanceThreshold={0}
          intensity={1.3}
        />

      </EffectComposer>

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
      />

    </>
  );
}

export default function ParisScene() {

  const isMobile =
    window.innerWidth < 768;

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Canvas */}
      <Canvas
        className="absolute inset-0"
        camera={{
          position: [0, 2, 12],
          fov: 45,
        }}
        style={{
          touchAction: "pan-y",
        }}
      >

        <SceneContent
          isMobile={isMobile}
        />

      </Canvas>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-[#050816]/30 pointer-events-none z-10" />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">

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
            duration: 2,
          }}
          className="text-center px-6 mt-32 md:mt-40"
        >

          <p
            className="
              uppercase
              tracking-[0.5em]
              text-pink-300
              text-sm
              md:text-base
              mb-6
            "
          >
            PARIS NIGHT EXPERIENCE
          </p>

          <h1
            className="
              text-5xl
              md:text-8xl
              lg:text-[120px]
              font-black
              leading-tight
              bg-gradient-to-r
              from-pink-300
              via-white
              to-yellow-200
              bg-clip-text
              text-transparent
            "
          >
            HAPPY BIRTHDAY
            <br />
            MY DEAR LITTLE SISTER ❤️
          </h1>

        </motion.div>

      </div>

      {/* Bottom Shadow Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050816] to-transparent z-20" />

    </section>
  );
}