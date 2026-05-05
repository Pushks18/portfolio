"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type HomeItem = {
  title: string;
  meta: string;
  href: string;
  external?: boolean;
  image?: string;
  fit?: "cover" | "contain";
};

interface Props {
  items: HomeItem[];
  startDelay: number;
  step: number;
}

export function HomeList({ items, startDelay, step }: Props) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [cursorY, setCursorY] = useState(0);
  const targetY = useRef(0);
  const currentY = useRef(0);
  const rafId = useRef<number | null>(null);

  // Smoothly ease the preview's vertical position toward the cursor.
  useEffect(() => {
    const tick = () => {
      const next = currentY.current + (targetY.current - currentY.current) * 0.12;
      currentY.current = next;
      setCursorY(next);
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);
    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  // Preload images so hover swaps are instant.
  useEffect(() => {
    items.forEach((it) => {
      if (it.image) {
        const img = new window.Image();
        img.src = it.image;
      }
    });
  }, [items]);

  const handleMove = (e: React.MouseEvent) => {
    targetY.current = e.clientY;
  };

  const activeImage =
    hovered !== null && items[hovered]?.image ? items[hovered].image : null;

  return (
    <>
      <section className="mt-16 space-y-8" onMouseMove={handleMove}>
        {items.map((item, i) => {
          const delay = startDelay + i * step;
          const inner = (
            <>
              <div className="text-[17px] font-medium leading-tight text-black transition-opacity duration-200">
                {item.title}
              </div>
              <div className="mt-1 text-[17px] leading-tight text-[#9b9b9b]">
                {item.meta}
              </div>
            </>
          );
          return (
            <div
              key={`${item.title}-${i}`}
              className="fade-in"
              style={{ animationDelay: `${delay}ms` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
            >
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {inner}
                </a>
              ) : (
                <Link href={item.href} className="block">
                  {inner}
                </Link>
              )}
            </div>
          );
        })}
      </section>

      {/* Hover preview — desktop only, fluidly follows the cursor */}
      <div
        aria-hidden
        className="pointer-events-none fixed top-0 hidden lg:block"
        style={{
          left: "calc(50% + 22rem)",
          transform: `translate3d(0, ${cursorY - 210}px, 0)`,
          willChange: "transform",
        }}
      >
        <div
          className="relative h-[420px] w-[320px] overflow-hidden rounded-md bg-[#f4f4f4] shadow-[0_12px_40px_rgba(0,0,0,0.10)] transition-all duration-500 ease-out"
          style={{
            opacity: activeImage ? 1 : 0,
            transform: activeImage ? "scale(1)" : "scale(0.96)",
          }}
        >
          {items.map((it, i) =>
            it.image ? (
              <Image
                key={it.image}
                src={it.image}
                alt=""
                fill
                sizes="320px"
                className={`${it.fit === "contain" ? "object-contain p-4" : "object-cover"} transition-opacity duration-400 ease-out`}
                style={{
                  opacity: hovered === i ? 1 : 0,
                }}
                priority={i < 3}
              />
            ) : null
          )}
        </div>
      </div>
    </>
  );
}
