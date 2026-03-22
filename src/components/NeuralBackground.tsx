"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 250;

function Particles() {
  const meshRef = useRef<THREE.Points>(null);

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const velocities = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      velocities[i * 3]     = (Math.random() - 0.5) * 0.004;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.004;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
    }
    return { positions, velocities };
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const posAttr = meshRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 3]     += velocities[i * 3];
      arr[i * 3 + 1] += velocities[i * 3 + 1];
      arr[i * 3 + 2] += velocities[i * 3 + 2];

      if (Math.abs(arr[i * 3])     > 10) velocities[i * 3]     *= -1;
      if (Math.abs(arr[i * 3 + 1]) > 10) velocities[i * 3 + 1] *= -1;
      if (Math.abs(arr[i * 3 + 2]) > 5)  velocities[i * 3 + 2] *= -1;
    }
    posAttr.needsUpdate = true;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.015;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={PARTICLE_COUNT}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#0ea5e9"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function CSSFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full animate-pulse-glow"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 70%)",
          animationDelay: "1.2s",
        }}
      />
      <div
        className="absolute top-2/3 left-1/4 w-40 h-40 rounded-full animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          animationDelay: "0.6s",
        }}
      />
    </div>
  );
}

export default function NeuralBackground() {
  const [useThreeJS, setUseThreeJS] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setUseThreeJS(!mobile && !reduced);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 neural-fade z-10 pointer-events-none" />
      {useThreeJS ? (
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          dpr={[1, 1]}
          style={{ background: "transparent" }}
          gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        >
          <Particles />
        </Canvas>
      ) : (
        <CSSFallback />
      )}
    </div>
  );
}
