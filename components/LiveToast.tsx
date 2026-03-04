"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell } from "lucide-react";
import { notificationMessages } from "@/lib/notificationMessages";

const MESSAGES = notificationMessages;

const LEADING_EMOJIS = ["🔥", "✅", "🚀", "⏳", "💬", "🔔"];

function stripLeadingEmoji(text: string): string {
  let t = text.trimStart();
  let changed = true;
  while (changed) {
    changed = false;
    for (const emoji of LEADING_EMOJIS) {
      if (t.startsWith(emoji)) {
        t = t.slice(emoji.length).trimStart();
        changed = true;
        break;
      }
    }
  }
  return t || text;
}

const VISIBLE_DURATION_MS = 4500;
const MIN_INTERVAL_MS = 5000;
const MAX_INTERVAL_MS = 30000;

function getRandomDelayMs() {
  return MIN_INTERVAL_MS + Math.random() * (MAX_INTERVAL_MS - MIN_INTERVAL_MS);
}

export function LiveToast() {
  const [message, setMessage] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const usedIndicesRef = useRef<Set<number>>(new Set());
  const showTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pickNextMessage = useCallback((): string | null => {
    const used = usedIndicesRef.current;
    const available: number[] = [];
    for (let i = 0; i < MESSAGES.length; i++) {
      if (!used.has(i)) available.push(i);
    }
    if (available.length === 0) {
      used.clear();
      for (let i = 0; i < MESSAGES.length; i++) available.push(i);
    }
    const idx = available[Math.floor(Math.random() * available.length)];
    used.add(idx);
    return MESSAGES[idx];
  }, []);

  useEffect(() => {
    const scheduleNext = () => {
      const delayMs = getRandomDelayMs();
      showTimerRef.current = setTimeout(() => {
        const next = pickNextMessage();
        if (next) {
          setMessage(next);
          setVisible(true);
        }
        hideTimerRef.current = setTimeout(() => {
          setVisible(false);
          scheduleNext();
        }, VISIBLE_DURATION_MS);
      }, delayMs);
    };

    const firstDelayMs = getRandomDelayMs();
    showTimerRef.current = setTimeout(() => {
      const next = pickNextMessage();
      if (next) {
        setMessage(next);
        setVisible(true);
      }
      hideTimerRef.current = setTimeout(() => {
        setVisible(false);
        scheduleNext();
      }, VISIBLE_DURATION_MS);
    }, firstDelayMs);

    return () => {
      if (showTimerRef.current) clearTimeout(showTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [pickNextMessage]);

  return (
    <div
      className="fixed top-20 right-4 z-[100] pointer-events-none sm:top-24 sm:right-6"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait">
        {visible && message && (
          <motion.div
            key={message}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl glass border border-white/10 shadow-xl max-w-[min(340px,calc(100vw-2rem))]"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20 shrink-0">
              <Bell className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-snug break-keep">
              {stripLeadingEmoji(message)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
