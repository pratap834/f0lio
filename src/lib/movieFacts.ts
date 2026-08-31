import movieFactsData from '@/data/movieFacts.json';
import { MovieFact } from '@/types';

const facts = (movieFactsData as { facts: MovieFact[] }).facts;

/**
 * Returns the total number of facts available.
 */
export function getFactCount(): number {
  return facts.length;
}

/**
 * Returns all available content types.
 */
export function getAllTypes(): string[] {
  return Array.from(new Set(facts.map((f) => f.type))).sort();
}

/**
 * Returns all available categories.
 */
export function getAllCategories(): string[] {
  return Array.from(new Set(facts.map((f) => f.category))).sort();
}

/**
 * Returns all facts, optionally filtered by type.
 */
export function getFactsByType(type?: string): MovieFact[] {
  if (!type) return facts;
  return facts.filter((f) => f.type === type);
}

/**
 * Returns all facts, optionally filtered by category.
 */
export function getFactsByCategory(category?: string): MovieFact[] {
  if (!category) return facts;
  return facts.filter((f) => f.category === category);
}

/**
 * Returns all facts, optionally filtered by both type and category.
 */
export function getFacts(type?: string, category?: string): MovieFact[] {
  return facts.filter((f) => {
    return (!type || f.type === type) && (!category || f.category === category);
  });
}

/**
 * Returns a random element from an array using crypto-safe random.
 */
function randomFromArray<T>(array: T[]): T {
  if (array.length === 0) {
    throw new Error('Cannot select from an empty array');
  }
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    const randomIndex = crypto.getRandomValues(new Uint32Array(1))[0] % array.length;
    return array[randomIndex];
  }
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Returns a single random fact from all facts.
 */
export function getRandomFact(): MovieFact {
  return randomFromArray(facts);
}

/**
 * Returns a single random fact of a specific type.
 */
export function getRandomFactByType(type: string): MovieFact {
  const filtered = getFactsByType(type);
  if (filtered.length === 0) return getRandomFact();
  return randomFromArray(filtered);
}

/**
 * Returns a single random fact from a specific category.
 */
export function getRandomFactByCategory(category: string): MovieFact {
  const filtered = getFactsByCategory(category);
  if (filtered.length === 0) return getRandomFact();
  return randomFromArray(filtered);
}

/**
 * Returns a single random fact excluding ones already shown.
 */
export function getRandomUniqueFact(excludeIds?: string[]): MovieFact {
  const available = facts.filter((f) => !excludeIds?.includes(f.id));
  if (available.length === 0) return randomFromArray(facts);
  return randomFromArray(available);
}
