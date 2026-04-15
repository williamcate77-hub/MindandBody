import { useNavigate } from 'react-router-dom';
import { type Exercise } from '../../types/mobility';
import { formatDuration } from '../../data/exercises';

export type StepState = 'active' | 'next' | 'done' | 'future';

interface StepItemProps {
  exercise: Exercise;
  index: number;
  state: StepState;
}

export function StepItem({ exercise, index, state }: StepItemProps) {
  const navigate = useNavigate();

  const isActive = state === 'active';
  const isNext = state === 'next';
  const isDone = state === 'done';

  return (
    <button
      onClick={() => navigate(`/mobility/${exercise.id}`)}
      className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl transition-all"
      style={{
        background: isActive
          ? 'rgba(45, 122, 79, 0.08)'
          : isNext
            ? 'rgba(234, 242, 237, 0.8)'
            : 'transparent',
        borderLeft: isActive ? '2px solid #2d7a4f' : '2px solid transparent',
        opacity: state === 'future' ? 0.45 : 1,
      }}
    >
      {/* Status indicator */}
      <div className="flex-shrink-0 w-7 flex items-center justify-center">
        {isActive ? (
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand" />
          </span>
        ) : isDone ? (
          <span
            className="material-symbols-outlined text-brand text-[18px]"
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}
          >
            task_alt
          </span>
        ) : (
          <span className={`text-xs font-semibold ${isNext ? 'text-ink-2' : 'text-ink-3'}`}>
            {index + 1}
          </span>
        )}
      </div>

      {/* Name + duration */}
      <div className="flex-1 min-w-0">
        <p
          className={`text-sm font-medium leading-tight truncate ${
            isActive ? 'text-ink' : isDone ? 'text-ink-2' : isNext ? 'text-ink-2' : 'text-ink-3'
          }`}
        >
          {exercise.name}
        </p>
        <p className={`text-[11px] mt-0.5 ${isActive ? 'text-ink-2' : 'text-ink-3'}`}>
          {formatDuration(exercise.duration)}
        </p>
      </div>

      {/* Chevron */}
      {(isActive || isNext) && (
        <span className="material-symbols-outlined text-ink-3 text-base flex-shrink-0">
          chevron_right
        </span>
      )}
    </button>
  );
}
