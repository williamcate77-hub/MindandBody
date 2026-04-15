import { useMobility } from '../../context/MobilityContext';

export function CurrentExerciseCues() {
  const { exercises, currentIndex, isComplete } = useMobility();

  if (isComplete) {
    return (
      <div
        className="mx-5 mb-5 rounded-2xl p-5 text-center"
        style={{
          background: 'rgba(30, 42, 32, 0.5)',
          border: '1px solid rgba(142, 207, 158, 0.1)',
        }}
      >
        <span
          className="material-symbols-outlined text-brand text-4xl mb-2 block"
          style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 40" }}
        >
          check_circle
        </span>
        <p className="text-ink font-semibold">Routine complete</p>
        <p className="text-ink-3 text-sm mt-1">Great work. See you tomorrow.</p>
      </div>
    );
  }

  const exercise = exercises[currentIndex];
  if (!exercise) return null;

  return (
    <div
      className="mx-5 mb-5 rounded-2xl p-5"
      style={{
        background: 'rgba(30, 42, 32, 0.5)',
        border: '1px solid rgba(142, 207, 158, 0.1)',
      }}
    >
      {/* Exercise name + number */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-ink-3 text-[10px] font-semibold uppercase tracking-widest mb-0.5">
            Exercise {currentIndex + 1} of {exercises.length}
          </p>
          <p className="text-ink font-semibold text-base leading-snug">{exercise.name}</p>
        </div>
        <span
          className="material-symbols-outlined text-brand text-xl flex-shrink-0 mt-0.5"
          style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
        >
          fitness_center
        </span>
      </div>

      {/* Description */}
      <p className="text-ink-3 text-sm leading-relaxed mb-4">{exercise.description}</p>

      {/* Cues */}
      <ul className="space-y-2.5">
        {exercise.cues.map((cue, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="text-brand font-bold text-base flex-shrink-0 leading-snug">·</span>
            <span className="text-ink-2 text-sm leading-relaxed">{cue}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
