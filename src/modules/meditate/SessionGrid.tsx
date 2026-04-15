import { SESSIONS, DURATION_GROUPS } from '../../data/meditations';
import { DurationCategory } from './DurationCategory';

export function SessionGrid() {
  return (
    <div className="space-y-6">
      <div className="px-5">
        <h2 className="text-ink font-semibold text-lg">Meditations</h2>
      </div>

      {DURATION_GROUPS.map((group) => {
        const sessions = SESSIONS.filter((s) =>
          group.minutes.includes(s.durationMinutes),
        );
        return (
          <DurationCategory key={group.label} label={group.label} sessions={sessions} />
        );
      })}
    </div>
  );
}
