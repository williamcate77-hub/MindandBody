import { DailyPickHero } from '../modules/meditate/DailyPickHero';
import { SessionGrid } from '../modules/meditate/SessionGrid';
import { DAILY_PICK } from '../data/meditations';

export function MeditatePage() {
  return (
    <div className="space-y-6 pb-6">
      <DailyPickHero session={DAILY_PICK} />
      <SessionGrid />
    </div>
  );
}
