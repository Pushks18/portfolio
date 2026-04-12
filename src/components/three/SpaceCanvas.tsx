"use client";

import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "./Stars";
import { Earth } from "./Earth";
import { ScrollCamera } from "./ScrollCamera";
import { AmbientParticles } from "./AmbientParticles";

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}

export function SpaceCanvas() {
  const scrollProgress = useScrollProgress();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-0 bg-space-deep">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(6,182,212,0.08)_0%,transparent_60%)]" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight position={[-5, 3, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          <Stars />
          <Earth scrollProgress={scrollProgress} />
          <AmbientParticles />
        </Suspense>
        <ScrollCamera scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
