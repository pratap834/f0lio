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
    <AnimatePresence mode="wait">
      <motion.div
        key={fact.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: isChanging ? 0 : 1, y: isChanging ? -4 : 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="flex items-center justify-center gap-3 flex-wrap text-center"
      >
        <span className="text-accent text-base">{iconForType(fact.type)}</span>
        <span className="text-text-secondary text-sm max-w-2xl">
          {fact.content}
        </span>
        {fact.source && (
          <span className="text-text-secondary text-sm">— {fact.source}</span>
        )}
        <motion.button
          type="button"
          onClick={changeFact}
          className="text-accent hover:text-accent/70 transition-colors p-1 rounded"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next fact"
          title="Next fact"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="11 17 16 12 11 7" />
            <line x1="18" y1="12" x2="6" y2="12" />
          </svg>
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
