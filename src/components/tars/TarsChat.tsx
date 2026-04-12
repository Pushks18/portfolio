"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { TarsMessage } from "./TarsMessage";
import { TarsSettings } from "./TarsSettings";
import { matchResponse } from "./tars-responses";

interface Message {
  text: string;
  sender: "tars" | "user";
  id: number;
}

const QUICK_ACTIONS = [
  { label: "Resume", message: "resume", variant: "amber" as const },
  { label: "Projects", message: "projects", variant: "amber" as const },
  { label: "Experience", message: "experience", variant: "amber" as const },
  { label: "Skills", message: "skills", variant: "amber" as const },
  { label: "Contact", message: "contact", variant: "amber" as const },
  { label: "Who is this?", message: "who is pushkaraj", variant: "cyan" as const },
];

interface TarsChatProps {
  onClose: () => void;
}

export function TarsChat({ onClose }: TarsChatProps) {
  const [honesty, setHonesty] = useState(() => {
    if (typeof window === "undefined") return 90;
    const saved = localStorage.getItem("tars-honesty");
    return saved ? Number(saved) : 90;
  });
  const [humor, setHumor] = useState(() => {
    if (typeof window === "undefined") return 75;
    const saved = localStorage.getItem("tars-humor");
    return saved ? Number(saved) : 75;
  });
  const [showSettings, setShowSettings] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: `Welcome aboard. I'm TARS. I can help you navigate Pushkaraj's portfolio. Honesty setting is currently at ${honesty}%. What would you like to know?`,
      sender: "tars",
      id: 0,
    },
  ]);
  const [input, setInput] = useState("");
  const [nextId, setNextId] = useState(1);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function updateHonesty(value: number) {
    setHonesty(value);
    localStorage.setItem("tars-honesty", String(value));
  }

  function updateHumor(value: number) {
    setHumor(value);
    localStorage.setItem("tars-humor", String(value));
  }

  function sendMessage(text: string) {
    const userMsg: Message = { text, sender: "user", id: nextId };
    const response = matchResponse(text, honesty, humor);
    const tarsMsg: Message = { text: response.text, sender: "tars", id: nextId + 1 };

    setMessages((prev) => [...prev, userMsg, tarsMsg]);
    setNextId((prev) => prev + 2);
    setInput("");

    if (response.scrollTo) {
      setTimeout(() => {
        document.getElementById(response.scrollTo!)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input.trim());
  }

  return (
    <div className="fixed bottom-[48px] right-5 z-50 w-[380px] bg-space-panel/95 border border-amber-primary/20 rounded-xl overflow-hidden backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] animate-[fadeIn_0.2s_ease-out]">
      {/* Header */}
      <div className="px-4 py-3 border-b border-amber-primary/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-8 bg-gradient-to-b from-space-console to-space-panel border border-amber-primary/30 rounded-sm flex items-center justify-center">
            <div className="w-3 h-[2px] bg-amber-primary rounded-full shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
          </div>
          <div>
            <div className="font-mono text-[11px] text-amber-primary tracking-[1px]">TARS</div>
            <div className="text-[9px] text-text-dim">CASE Unit // Marine Corps</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="w-6 h-6 border border-white/10 rounded flex items-center justify-center text-text-dim hover:text-text-light transition-colors text-xs"
          >
            ⚙
          </button>
          <button
            onClick={onClose}
            className="w-6 h-6 border border-white/10 rounded flex items-center justify-center text-text-dim hover:text-text-light transition-colors text-xs"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Settings panel */}
      {showSettings && (
        <TarsSettings
          honesty={honesty}
          humor={humor}
          onHonestyChange={updateHonesty}
          onHumorChange={updateHumor}
        />
      )}

      {/* Chat messages */}
      <div ref={chatRef} className="px-4 py-4 h-[280px] overflow-y-auto flex flex-col gap-3">
        {messages.map((msg) => (
          <TarsMessage
            key={msg.id}
            text={msg.text}
            sender={msg.sender}
            animate={msg.sender === "tars" && msg.id === messages[messages.length - 1]?.id}
          />
        ))}
      </div>

      {/* Quick actions + input */}
      <div className="px-4 py-3 border-t border-white/5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {QUICK_ACTIONS.map((action) => (
            <button
              key={action.label}
              onClick={() => sendMessage(action.message)}
              className={`px-2.5 py-1 rounded-full font-mono text-[10px] cursor-pointer transition-colors ${
                action.variant === "cyan"
                  ? "bg-cyan-accent/8 border border-cyan-accent/15 text-cyan-accent hover:bg-cyan-accent/15"
                  : "bg-amber-primary/8 border border-amber-primary/15 text-amber-primary hover:bg-amber-primary/15"
              }`}
            >
              {action.label}
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-space-console/50 border border-white/10 rounded-md px-3 py-2 font-mono text-[11px] text-text-light placeholder-text-dim focus:border-amber-primary/50 focus:outline-none transition-colors"
            placeholder="> Ask TARS anything..."
          />
          <button
            type="submit"
            className="px-3 py-2 bg-amber-primary rounded-md font-mono text-[10px] text-space-deep font-bold hover:bg-amber-primary/90 transition-colors"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}
