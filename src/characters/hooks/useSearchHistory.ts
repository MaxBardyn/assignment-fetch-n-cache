import { useState, useCallback } from "react";

const STORAGE_KEY = "character-search-history";

function readHistory(): string[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

function writeHistory(history: string[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export function useSearchHistory() {
  const [history, setHistory] = useState<string[]>(readHistory);

  const addToHistory = useCallback((id: string) => {
    setHistory((prev) => {
      if (prev.includes(id)) return prev;
      const next = [id, ...prev];
      writeHistory(next);
      return next;
    });
  }, []);

  const removeFromHistory = useCallback((id: string) => {
    setHistory((prev) => {
      const next = prev.filter((item) => item !== id);
      writeHistory(next);
      return next;
    });
  }, []);

  const clearHistory = useCallback(() => {
    writeHistory([]);
    setHistory([]);
  }, []);

  return { history, addToHistory, removeFromHistory, clearHistory };
}
