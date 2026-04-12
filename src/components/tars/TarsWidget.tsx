"use client";

import { useState } from "react";
import { TarsMonolith } from "./TarsMonolith";
import { TarsChat } from "./TarsChat";

export function TarsWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <TarsChat onClose={() => setIsOpen(false)} />
      ) : (
        <TarsMonolith onClick={() => setIsOpen(true)} />
      )}
    </>
  );
}
