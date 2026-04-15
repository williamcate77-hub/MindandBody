import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react';
import { type Exercise } from '../types/mobility';
import { getTodaysExercises } from '../data/exercises';

interface MobilityContextValue {
  exercises: Exercise[];
  currentIndex: number;
  timeRemaining: number;
  totalElapsed: number;
  isRunning: boolean;
  isComplete: boolean;
  totalDuration: number;
  start: () => void;
  pause: () => void;
  reset: () => void;
  skipNext: () => void;
}

const MobilityContext = createContext<MobilityContextValue | null>(null);

export function MobilityProvider({ children }: { children: ReactNode }) {
  const [exercises] = useState<Exercise[]>(getTodaysExercises);
  const totalDuration = useMemo(
    () => exercises.reduce((s, e) => s + e.duration, 0),
    [exercises],
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(() => exercises[0]?.duration ?? 0);
  const [totalElapsed, setTotalElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Refs for reading current values inside setInterval without stale closures
  const currentIndexRef = useRef(currentIndex);
  const timeRemainingRef = useRef(timeRemaining);
  const totalElapsedRef = useRef(totalElapsed);
  const isCompleteRef = useRef(isComplete);
  const exercisesRef = useRef(exercises);

  currentIndexRef.current = currentIndex;
  timeRemainingRef.current = timeRemaining;
  totalElapsedRef.current = totalElapsed;
  isCompleteRef.current = isComplete;
  exercisesRef.current = exercises;

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopInterval = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isRunning || isComplete) {
      stopInterval();
      return;
    }

    intervalRef.current = setInterval(() => {
      const tr = timeRemainingRef.current;
      const te = totalElapsedRef.current;
      const ci = currentIndexRef.current;
      const exs = exercisesRef.current;
      const newElapsed = te + 1;

      if (tr > 1) {
        setTimeRemaining(tr - 1);
        setTotalElapsed(newElapsed);
      } else {
        const nextIndex = ci + 1;
        setTotalElapsed(newElapsed);
        if (nextIndex >= exs.length) {
          setIsComplete(true);
          setIsRunning(false);
          setTimeRemaining(0);
          stopInterval();
        } else {
          setCurrentIndex(nextIndex);
          setTimeRemaining(exs[nextIndex].duration);
        }
      }
    }, 1000);

    return stopInterval;
  }, [isRunning, isComplete, stopInterval]);

  const start = useCallback(() => {
    if (!isCompleteRef.current) setIsRunning(true);
  }, []);

  const pause = useCallback(() => setIsRunning(false), []);

  const reset = useCallback(() => {
    stopInterval();
    setIsRunning(false);
    setCurrentIndex(0);
    setTimeRemaining(exercisesRef.current[0]?.duration ?? 0);
    setTotalElapsed(0);
    setIsComplete(false);
  }, [stopInterval]);

  const skipNext = useCallback(() => {
    const ci = currentIndexRef.current;
    const exs = exercisesRef.current;
    const nextIndex = ci + 1;

    if (nextIndex >= exs.length) {
      stopInterval();
      setIsRunning(false);
      setIsComplete(true);
      setTimeRemaining(0);
    } else {
      const elapsed = exs.slice(0, nextIndex).reduce((s, e) => s + e.duration, 0);
      setCurrentIndex(nextIndex);
      setTimeRemaining(exs[nextIndex].duration);
      setTotalElapsed(elapsed);
    }
  }, [stopInterval]);

  return (
    <MobilityContext.Provider
      value={{
        exercises,
        currentIndex,
        timeRemaining,
        totalElapsed,
        isRunning,
        isComplete,
        totalDuration,
        start,
        pause,
        reset,
        skipNext,
      }}
    >
      {children}
    </MobilityContext.Provider>
  );
}

export function useMobility() {
  const ctx = useContext(MobilityContext);
  if (!ctx) throw new Error('useMobility must be used inside MobilityProvider');
  return ctx;
}
