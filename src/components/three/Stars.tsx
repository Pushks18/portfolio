"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Stars() {
  const ref = useRef<THREE.Points>(null);
  const count = typeof navigator !== "undefined"
    ? Math.min(5000, (navigator.hardwareConcurrency || 4) * 800)
    : 3000;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 200;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 200;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 200;
    }
    return arr;
  }, [count]);

  const sizes = useMemo(() => {
    const arr = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      arr[i] = Math.random() * 1.5 + 0.5;
    }
    return arr;
  }, [count]);

  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.005;
    ref.current.rotation.x = pointer.y * 0.02;
    ref.current.rotation.z = pointer.x * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#ffffff"
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
