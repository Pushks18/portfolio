"use client";

import { useFrame, useThree } from "@react-three/fiber";

interface ScrollCameraProps {
  scrollProgress: number;
}

export function ScrollCamera({ scrollProgress }: ScrollCameraProps) {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.z = 8 + scrollProgress * 42;
    camera.position.y = scrollProgress * -2;
    camera.position.x = Math.sin(scrollProgress * Math.PI) * 3;
  });

  return null;
}
