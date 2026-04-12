"use client";

import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";

interface EarthProps {
  scrollProgress: number;
}

export function Earth({ scrollProgress }: EarthProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const [dayTexture, nightTexture, bumpTexture] = useLoader(TextureLoader, [
    "/textures/earth-day.jpg",
    "/textures/earth-night.jpg",
    "/textures/earth-topology.png",
  ]);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.001;
  });

  const opacity = Math.max(0, 1 - scrollProgress * 3);
  const scale = Math.max(0.3, 1 - scrollProgress * 1.5);

  return (
    <group position={[3, 0, -2]} scale={scale}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          map={dayTexture}
          bumpMap={bumpTexture}
          bumpScale={0.05}
          emissiveMap={nightTexture}
          emissive={new THREE.Color(0.3, 0.3, 0.5)}
          emissiveIntensity={1.5}
          transparent
          opacity={opacity}
        />
      </mesh>
      <mesh scale={1.05}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial
          color="#06B6D4"
          transparent
          opacity={opacity * 0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}
