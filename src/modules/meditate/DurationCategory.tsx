import { SessionCard } from './SessionCard';
import { type MeditationSession } from '../../types/meditation';

interface DurationCategoryProps {
  label: string;
  sessions: MeditationSession[];
}

export function DurationCategory({ label, sessions }: DurationCategoryProps) {
  if (sessions.length === 0) return null;

  return (
    <div>
      <h3 className="text-ink-3 text-xs font-semibold uppercase tracking-widest px-5 mb-3">
        {label}
      </h3>
      <div className="flex gap-3 px-5 overflow-x-auto pb-1 scrollbar-hide">
        {sessions.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </div>
    </div>
  );
}
