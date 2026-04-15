import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react';
import { type Phase } from '../types/mobility';
import { getCurrentPhase } from '../data/exercises';

interface AppContextValue {
  currentWeek: number;
  setCurrentWeek: (week: number) => void;
  currentPhase: Phase;
  favouriteIds: string[];
  toggleFavourite: (id: string) => void;
  isFavourite: (id: string) => boolean;
}

const AppContext = createContext<AppContextValue | null>(null);

const WEEK_KEY = 'mb_current_week';
const FAVS_KEY = 'mb_favourite_ids';

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentWeek, setCurrentWeekState] = useState<number>(() => {
    const stored = localStorage.getItem(WEEK_KEY);
    const parsed = stored ? parseInt(stored, 10) : 1;
    return isNaN(parsed) || parsed < 1 || parsed > 12 ? 1 : parsed;
  });

  const [favouriteIds, setFavouriteIds] = useState<string[]>(() => {
    const stored = localStorage.getItem(FAVS_KEY);
    try {
      return stored ? (JSON.parse(stored) as string[]) : [];
    } catch {
      return [];
    }
  });

  const setCurrentWeek = useCallback((week: number) => {
    const clamped = Math.max(1, Math.min(12, week));
    setCurrentWeekState(clamped);
    localStorage.setItem(WEEK_KEY, String(clamped));
  }, []);

  const toggleFavourite = useCallback((id: string) => {
    setFavouriteIds((prev) => {
      const next = prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id];
      localStorage.setItem(FAVS_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const isFavourite = useCallback(
    (id: string) => favouriteIds.includes(id),
    [favouriteIds],
  );

  const currentPhase = useMemo(() => getCurrentPhase(currentWeek), [currentWeek]);

  return (
    <AppContext.Provider
      value={{ currentWeek, setCurrentWeek, currentPhase, favouriteIds, toggleFavourite, isFavourite }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
