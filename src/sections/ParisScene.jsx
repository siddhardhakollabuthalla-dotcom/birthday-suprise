import { Canvas, useFrame } from "@react-three/fiber";
import FireworksEngine from "../components/FireworksEngine";

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

import * as THREE from "three";

function EiffelTower() {

  const towerRef = useRef();

  useFrame(({ clock }) => {

    towerRef.current.rotation.y =
      Math.sin(clock.elapsedTime * 0.2) * 0.08;

  });

  return (
    <group ref={towerRef}>

      {/* Bottom */}
      <mesh position={[0, -2, 0]}>
        <cylinderGeometry args={[1.8, 2.8, 1.5, 4]} />

        <meshStandardMaterial
          color="#8f6b29"
          emissive="#ffd700"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Middle */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.1, 1.8, 3, 4]} />

        <meshStandardMaterial
          color="#9d7425"
          emissive="#ffcc66"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Top */}
      <mesh position={[0, 2.7, 0]}>
        <cylinderGeometry args={[0.2, 1, 2.5, 4]} />

        <meshStandardMaterial
          color="#ffd700"
          emissive="#ffd700"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Light Beacon */}
      <mesh position={[0, 4.3, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />

        <meshBasicMaterial color="#fff5cc" />
      </mesh>

    </group>
  );
}

function Moon() {
  return (
    <mesh position={[6, 5, -5]}>

      <sphereGeometry args={[1, 64, 64]} />

      <meshStandardMaterial
        color="#f5f3ce"
        emissive="#fff8cc"
        emissiveIntensity={0.3}
      />

    </mesh>
  );
}

function FloatingLantern({
  position,
}) {

  const ref = useRef();

  useFrame(({ clock }) => {

    ref.current.position.y =
      position[1] +
      Math.sin(clock.elapsedTime) * 0.3;

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

function SceneContent() {
  return (
    <>

      {/* Fog */}
      <fog attach="fog" args={["#050816", 8, 25]} />

      {/* Camera Lights */}
      <ambientLight intensity={0.35} />

      <directionalLight
        position={[4, 10, 4]}
        intensity={1.8}
        color="#fff0cc"
      />

      <pointLight
        position={[0, 5, 0]}
        intensity={4}
        color="#ffd700"
      />

      {/* Stars */}
      <Stars
        radius={120}
        depth={50}
        count={7000}
        factor={5}
        fade
      />

      {/* Moon */}
      <Moon />

      {/* Tower */}
      <EiffelTower />

      {/* Floating Lanterns */}
      <FloatingLantern position={[-3, 1, 2]} />
      <FloatingLantern position={[3, 2, 1]} />
      <FloatingLantern position={[-2, 3, -2]} />
      <FloatingLantern position={[2, 1, -1]} />

      {/* Ground */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -3, 0]}
      >
        <planeGeometry args={[50, 50]} />

        <meshStandardMaterial
          color="#0a0f1f"
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>

      {/* Bloom */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0}
          intensity={1.5}
          mipmapBlur
        />
      </EffectComposer>

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.3}
      />

    </>
  );
}

export default function ParisScene() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 1, 10], fov: 50 }}>

        <SceneContent />

      </Canvas>
      <FireworksEngine />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-[#050816]/30 pointer-events-none" />

      {/* Center Reveal Text */}
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
            delay: 1,
          }}
          className="text-center px-6"
        >

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="uppercase tracking-[0.5em] text-pink-300 text-sm md:text-base mb-6"
          >
            Paris Night Experience
          </motion.p>

          <motion.h1
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.4)",
                "0 0 60px rgba(255,215,0,0.9)",
                "0 0 20px rgba(255,255,255,0.4)",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
              text-4xl
              md:text-8xl
              font-black
              leading-tight
            "
          >
            HAPPY BIRTHDAY
            <br />

            <span className="bg-gradient-to-r from-pink-300 via-white to-yellow-200 bg-clip-text text-transparent">
              MY DEAR LITTLE SISTER ❤️
            </span>
          </motion.h1>

        </motion.div>

      </div>

    </section>
  );
}