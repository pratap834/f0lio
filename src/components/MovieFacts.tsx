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
  const CYCLING_INTERVAL = 20000; // 20 seconds

  // Initial fact on mount
  useEffect(() => {
    const initialFact = getRandomUniqueFact([]);
    setFact(initialFact);
    setShownIds([initialFact.id]);
  }, []);

  // Periodic cycling
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

  // Manual refresh handler
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
    }, 300);
  }, [fact, shownIds]);

  if (!fact) {
    return null;
  }

  const iconForType = (type: string): string => {
    const iconMap: Record<string, string> = {
      dev_joke: '💻',
      programming_joke: '💻',
      ml_joke: '🤖',
      cloud_joke: '☁️',
      startup_joke: '🚀',
      business_joke: '💼',
      movie_fact: '🎬',
      behind_the_scenes: '🎥',
      easter_egg: '🥚',
      quote: '🗨️',
      ai_reference: '🤖',
      cs_reference: '💻',
      comparison: '⚖️',
      science_fact: '🔭',
    };
    return iconMap[type] || '✨';
  };

  return (
    <div className="flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={fact.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: isChanging ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="inline-flex items-center justify-center gap-2.5 text-xs text-text-muted max-w-2xl text-center flex-wrap"
        >
          <span className="opacity-70 text-sm">{iconForType(fact.type)}</span>
          <span className="text-text-secondary text-xs">
            {fact.content}
          </span>
          {fact.source && (
            <span className="text-text-muted text-xs">— {fact.source}</span>
          )}
          <button
            type="button"
            onClick={changeFact}
            className="text-text-muted hover:text-text-primary p-1 rounded hover:bg-surface-hover border border-transparent hover:border-border transition-colors"
            aria-label="Next fact"
            title="Next fact"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="23 4 23 10 17 10" />
              <polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
