'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getRandomUniqueFact, getFactCount } from '@/lib/movieFacts';
import { MovieFact } from '@/types';

export default function MovieFacts() {
  const [fact, setFact] = useState<MovieFact | null>(null);
  const [isChanging, setIsChanging] = useState(false);
  const [shownIds, setShownIds] = useState<string[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const CYCLING_INTERVAL = 20000;

  useEffect(() => {
    const initialFact = getRandomUniqueFact([]);
    setFact(initialFact);
    setShownIds([initialFact.id]);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const nextFact = getRandomUniqueFact(shownIds.length < getFactCount() ? shownIds : []);
      setFact(nextFact);
      setShownIds((prev) => [...prev.slice(-9), nextFact.id]);
    }, CYCLING_INTERVAL);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [shownIds]);

  const changeFact = useCallback(() => {
    if (!fact) return;
    setIsChanging(true);
    setTimeout(() => {
      const nextFact = getRandomUniqueFact(
        shownIds.length < getFactCount() ? shownIds : []
      );
      setFact(nextFact);
      setShownIds((prev) => [...prev.slice(-9), nextFact.id]);
      setIsChanging(false);
    }, 200);
  }, [fact, shownIds]);

  if (!fact) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-2.5 text-xs text-zinc-500 text-center max-w-2xl mx-auto">
      <span className="text-zinc-400 font-mono">💡</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={fact.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: isChanging ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="leading-relaxed"
        >
          {fact.content}
          {fact.source && <span className="text-zinc-600 ml-1.5">— {fact.source}</span>}
        </motion.span>
      </AnimatePresence>
      <button
        type="button"
        onClick={changeFact}
        className="text-zinc-500 hover:text-zinc-300 transition-colors p-1"
        aria-label="Next note"
        title="Next note"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
