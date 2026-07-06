import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react';

interface AppContextValue {
  favouriteIds: string[];
  toggleFavourite: (id: string) => void;
  isFavourite: (id: string) => boolean;
}

const AppContext = createContext<AppContextValue | null>(null);

const FAVS_KEY = 'mb_favourite_ids';

export function AppProvider({ children }: { children: ReactNode }) {
  const [favouriteIds, setFavouriteIds] = useState<string[]>(() => {
    const stored = localStorage.getItem(FAVS_KEY);
    try {
      return stored ? (JSON.parse(stored) as string[]) : [];
    } catch {
      return [];
    }
  });

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

  return (
    <AppContext.Provider value={{ favouriteIds, toggleFavourite, isFavourite }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
