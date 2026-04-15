import { useParams, useNavigate } from 'react-router-dom';
import { ALL_EXERCISES, formatDuration } from '../data/exercises';
import { useApp } from '../context/AppContext';
import { Badge } from '../components/shared/Badge';

export function ExerciseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { currentPhase, currentWeek } = useApp();

  const exercise = ALL_EXERCISES.find((e) => String(e.id) === id);

  if (!exercise) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <p className="text-ink-2">Exercise not found.</p>
        <button onClick={() => navigate('/mobility')} className="text-brand text-sm">
          ← Back to Mobility
        </button>
      </div>
    );
  }

  const isAdvanced = currentWeek >= 5;

  return (
    <div className="px-5 pb-8">
      {/* Back */}
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-ink-3 hover:text-ink transition-colors"
        >
          <span className="material-symbols-outlined text-xl">arrow_back</span>
          <span className="text-sm">Back</span>
        </button>
      </div>

      {/* Exercise number + name */}
      <div className="mb-1">
        <span className="text-ink-3 text-xs font-semibold uppercase tracking-widest">
          Exercise {exercise.id <= 10 ? exercise.id : '11'}
        </span>
      </div>
      <h1 className="font-serif text-3xl text-ink leading-tight mb-3">{exercise.name}</h1>

      {/* Meta */}
      <div className="flex items-center gap-2 mb-6">
        <Badge label={formatDuration(exercise.duration)} variant="muted" size="md" />
        <Badge label={currentPhase.name} variant="brand" size="md" />
      </div>

      {/* Description */}
      <p className="text-ink-2 leading-relaxed mb-6">{exercise.description}</p>

      {/* Coaching cues */}
      <div
        className="rounded-2xl p-5 mb-5"
        style={{
          background: '#ffffff',
          border: '1px solid rgba(45, 122, 79, 0.15)',
          boxShadow: '0 1px 4px rgba(21, 34, 25, 0.06)',
        }}
      >
        <p className="text-ink-3 text-[10px] font-semibold uppercase tracking-widest mb-3">
          Coaching Cues
        </p>
        <ul className="space-y-3">
          {exercise.cues.map((cue, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-brand font-bold text-sm flex-shrink-0 mt-0.5">·</span>
              <span className="text-ink-2 text-sm leading-relaxed">{cue}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Phase guidance */}
      <div
        className="rounded-2xl p-5"
        style={{
          background: '#ffffff',
          border: '1px solid rgba(45, 122, 79, 0.15)',
          boxShadow: '0 1px 4px rgba(21, 34, 25, 0.06)',
        }}
      >
        <p className="text-ink-3 text-[10px] font-semibold uppercase tracking-widest mb-3">
          Week {currentWeek} · {currentPhase.name} Phase
        </p>
        <p className="text-ink-2 text-sm leading-relaxed mb-4">{currentPhase.description}</p>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-surf-2 rounded-xl p-3 text-center">
            <p className="text-ink-3 text-[10px] mb-1">Tension</p>
            <p className="text-brand text-sm font-semibold">{currentPhase.tension}</p>
          </div>
          <div className="bg-surf-2 rounded-xl p-3 text-center">
            <p className="text-ink-3 text-[10px] mb-1">Hold</p>
            <p className="text-brand text-sm font-semibold">{currentPhase.hold}</p>
          </div>
          <div className="bg-surf-2 rounded-xl p-3 text-center">
            <p className="text-ink-3 text-[10px] mb-1">PNF</p>
            <p className="text-brand text-sm font-semibold">{currentPhase.pnf}</p>
          </div>
        </div>

        {isAdvanced && (
          <div className="mt-3 bg-brand/10 rounded-xl p-3">
            <p className="text-brand text-xs font-semibold mb-1">Contract-Relax Active</p>
            <p className="text-ink-3 text-xs leading-relaxed">
              At end-range, push against resistance for 5 seconds at {currentPhase.pnf} effort, then relax and move deeper.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
