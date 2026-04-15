import { useMobility } from '../../context/MobilityContext';
import { useApp } from '../../context/AppContext';

export function FocusSidebar() {
  const { exercises, currentIndex, isComplete } = useMobility();
  const { currentWeek, setCurrentWeek, currentPhase } = useApp();

  const currentExercise = isComplete ? null : exercises[currentIndex];

  return (
    <div className="px-5 space-y-4">
      {/* Current exercise cues */}
      {currentExercise && (
        <div
          className="rounded-xl p-4"
          style={{ background: '#ffffff', border: '1px solid rgba(45, 122, 79, 0.15)', boxShadow: '0 1px 4px rgba(21, 34, 25, 0.06)' }}
        >
          <p className="text-ink-3 text-[10px] font-semibold uppercase tracking-widest mb-2">
            Coaching Cues
          </p>
          <p className="text-ink text-sm font-medium mb-3">{currentExercise.name}</p>
          <ul className="space-y-2">
            {currentExercise.cues.map((cue, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-brand text-xs mt-0.5 flex-shrink-0">·</span>
                <span className="text-ink-2 text-xs leading-relaxed">{cue}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Phase card */}
      <div
        className="rounded-xl p-4"
        style={{ background: '#ffffff', border: '1px solid rgba(45, 122, 79, 0.15)', boxShadow: '0 1px 4px rgba(21, 34, 25, 0.06)' }}
      >
        <p className="text-ink-3 text-[10px] font-semibold uppercase tracking-widest mb-2">
          12-Week Phase
        </p>
        <div className="flex items-center justify-between mb-2">
          <span className="text-brand text-sm font-semibold">{currentPhase.name}</span>
          <span className="text-ink-3 text-xs">Wks {currentPhase.weeks[0]}–{currentPhase.weeks[1]}</span>
        </div>
        <p className="text-ink-3 text-xs leading-relaxed mb-3">{currentPhase.description}</p>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-surf-2 rounded-lg p-2">
            <p className="text-ink-3 text-[10px] mb-0.5">Tension</p>
            <p className="text-ink-2 font-medium">{currentPhase.tension}</p>
          </div>
          <div className="bg-surf-2 rounded-lg p-2">
            <p className="text-ink-3 text-[10px] mb-0.5">Hold</p>
            <p className="text-ink-2 font-medium">{currentPhase.hold}</p>
          </div>
          <div className="bg-surf-2 rounded-lg p-2 col-span-2">
            <p className="text-ink-3 text-[10px] mb-0.5">PNF / Contract-Relax</p>
            <p className="text-ink-2 font-medium">{currentPhase.pnf}</p>
          </div>
        </div>
      </div>

      {/* Week selector */}
      <div
        className="rounded-xl p-4"
        style={{ border: '1px solid rgba(45, 122, 79, 0.15)' }}
      >
        <p className="text-ink-3 text-[10px] font-semibold uppercase tracking-widest mb-3">
          Current Week
        </p>
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentWeek(currentWeek - 1)}
            disabled={currentWeek <= 1}
            className="w-8 h-8 rounded-full bg-surf-2 flex items-center justify-center text-ink-2 hover:bg-surf-3 transition-colors disabled:opacity-30"
            aria-label="Previous week"
          >
            <span className="material-symbols-outlined text-base">remove</span>
          </button>

          <div className="text-center">
            <span className="text-ink text-xl font-bold">Wk {currentWeek}</span>
            <p className="text-ink-3 text-[10px] mt-0.5">of 12</p>
          </div>

          <button
            onClick={() => setCurrentWeek(currentWeek + 1)}
            disabled={currentWeek >= 12}
            className="w-8 h-8 rounded-full bg-surf-2 flex items-center justify-center text-ink-2 hover:bg-surf-3 transition-colors disabled:opacity-30"
            aria-label="Next week"
          >
            <span className="material-symbols-outlined text-base">add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
