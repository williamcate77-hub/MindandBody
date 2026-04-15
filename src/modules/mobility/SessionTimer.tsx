import { useMobility } from '../../context/MobilityContext';

const RADIUS = 72;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

export function SessionTimer() {
  const {
    exercises,
    currentIndex,
    timeRemaining,
    totalElapsed,
    totalDuration,
    isRunning,
    isComplete,
    start,
    pause,
    reset,
    skipNext,
  } = useMobility();

  const currentExercise = exercises[currentIndex];
  const exerciseDuration = currentExercise?.duration ?? 1;
  const progress = timeRemaining / exerciseDuration;
  const strokeDashoffset = CIRCUMFERENCE * (1 - progress);
  const overallProgress = totalDuration > 0 ? totalElapsed / totalDuration : 0;

  return (
    <div className="flex flex-col items-center px-5 py-2">
      {/* Circular timer */}
      <div className="relative" style={{ width: 180, height: 180 }}>
        <svg
          width={180}
          height={180}
          viewBox="0 0 180 180"
          style={{ transform: 'rotate(-90deg)' }}
        >
          {/* Background track */}
          <circle
            cx={90}
            cy={90}
            r={RADIUS}
            fill="none"
            stroke="#1e2a20"
            strokeWidth={7}
          />
          {/* Progress arc */}
          <circle
            cx={90}
            cy={90}
            r={RADIUS}
            fill="none"
            stroke={isComplete ? '#4a7c59' : '#8ecf9e'}
            strokeWidth={7}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={isComplete ? 0 : strokeDashoffset}
            style={{ transition: 'stroke-dashoffset 0.9s linear' }}
          />
        </svg>

        {/* Center text — not rotated */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {isComplete ? (
            <>
              <span
                className="material-symbols-outlined text-brand text-4xl"
                style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 40" }}
              >
                check_circle
              </span>
              <span className="text-ink-2 text-xs mt-1">Complete!</span>
            </>
          ) : (
            <>
              <span className="text-ink text-3xl font-bold tabular-nums font-sans">
                {formatTime(timeRemaining)}
              </span>
              <span className="text-ink-3 text-[11px] text-center px-6 mt-0.5 leading-tight">
                {currentExercise?.name}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Exercise counter */}
      <p className="text-ink-3 text-xs mt-2 mb-3">
        {isComplete
          ? 'All exercises complete'
          : `Exercise ${currentIndex + 1} of ${exercises.length}`}
      </p>

      {/* Overall progress bar */}
      <div className="w-full max-w-xs mb-4">
        <div className="h-1 bg-surf-2 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand rounded-full"
            style={{
              width: `${overallProgress * 100}%`,
              transition: 'width 1s linear',
            }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[10px] text-ink-3">{formatTime(totalElapsed)}</span>
          <span className="text-[10px] text-ink-3">{formatTime(totalDuration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-8">
        <button
          onClick={reset}
          className="text-ink-3 hover:text-ink transition-colors p-2"
          aria-label="Reset session"
        >
          <span className="material-symbols-outlined text-2xl">replay</span>
        </button>

        <button
          onClick={isRunning ? pause : start}
          disabled={isComplete}
          className="w-[60px] h-[60px] rounded-full bg-brand flex items-center justify-center hover:bg-brand/90 transition-colors disabled:opacity-40"
          aria-label={isRunning ? 'Pause' : 'Play'}
        >
          <span
            className="material-symbols-outlined text-deep text-[30px]"
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 24" }}
          >
            {isRunning ? 'pause' : 'play_arrow'}
          </span>
        </button>

        <button
          onClick={skipNext}
          disabled={isComplete}
          className="text-ink-3 hover:text-ink transition-colors p-2 disabled:opacity-40"
          aria-label="Skip to next exercise"
        >
          <span className="material-symbols-outlined text-2xl">skip_next</span>
        </button>
      </div>
    </div>
  );
}
