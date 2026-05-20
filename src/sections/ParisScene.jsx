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

  const towerRef = useRef();

  useFrame(({ clock }) => {

    if (towerRef.current) {
      towerRef.current.rotation.y =
        Math.sin(clock.elapsedTime * 0.2) * 0.08;
    }

  });

  return (
    <group ref={towerRef}>

      <mesh position={[0, -2, 0]}>
        <cylinderGeometry args={[1.8, 2.8, 1.5, 4]} />

        <meshStandardMaterial
          color="#8f6b29"
          emissive="#ffd700"
          emissiveIntensity={0.2}
        />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.1, 1.8, 3, 4]} />

        <meshStandardMaterial
          color="#9d7425"
          emissive="#ffcc66"
          emissiveIntensity={0.2}
        />
      </mesh>

      <mesh position={[0, 2.7, 0]}>
        <cylinderGeometry args={[0.2, 1, 2.5, 4]} />

        <meshStandardMaterial
          color="#ffd700"
          emissive="#ffd700"
          emissiveIntensity={0.8}
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

      <fog attach="fog" args={["#050816", 8, 25]} />

      <ambientLight intensity={0.5} />

      <directionalLight
        position={[4, 10, 4]}
        intensity={1.5}
      />

      <pointLight
        position={[0, 5, 0]}
        intensity={3}
        color="#ffd700"
      />

      <Stars
        radius={120}
        depth={50}
        count={isMobile ? 2000 : 7000}
        factor={5}
        fade
      />

      <EiffelTower />

      <FloatingLantern position={[-3, 1, 2]} />
      <FloatingLantern position={[3, 2, 1]} />
      <FloatingLantern position={[-2, 3, -2]} />

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -3, 0]}
      >
        <planeGeometry args={[50, 50]} />

        <meshStandardMaterial color="#0a0f1f" />
      </mesh>

      <EffectComposer>
        <Bloom
          luminanceThreshold={0}
          intensity={1.2}
        />
      </EffectComposer>

      <OrbitControls
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
      />

    </>
  );
}

export default function ParisScene() {

  const isMobile =
    window.innerWidth < 768;

  return (
    <section className="relative min-h-screen overflow-hidden">

      <Canvas
        camera={{
          position: [0, 1, 10],
          fov: 50,
        }}
        style={{
          touchAction: "pan-y",
        }}
      >

        <SceneContent
          isMobile={isMobile}
        />

      </Canvas>

      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-[#050816]/30 pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

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
          className="text-center px-6"
        >

          <p className="uppercase tracking-[0.5em] text-pink-300 text-sm md:text-base mb-6">
            Paris Night Experience
          </p>

          <h1
            className="
              text-4xl
              md:text-8xl
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

    </section>
  );
}