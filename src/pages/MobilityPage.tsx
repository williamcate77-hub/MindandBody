import { MobilityHero } from '../modules/mobility/MobilityHero';
import { SessionTimer } from '../modules/mobility/SessionTimer';
import { RoutineStepList } from '../modules/mobility/RoutineStepList';
import { FocusSidebar } from '../modules/mobility/FocusSidebar';

export function MobilityPage() {
  return (
    <div className="pb-6">
      <MobilityHero />

      {/* Timer */}
      <div
        className="mx-5 mb-5 rounded-2xl"
        style={{
          background: 'rgba(18, 26, 21, 0.7)',
          border: '1px solid rgba(142, 207, 158, 0.08)',
        }}
      >
        <SessionTimer />
      </div>

      {/* Two-column on lg, single on mobile */}
      <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-4 lg:px-5">
        <div>
          <RoutineStepList />
        </div>
        <div className="mt-5 lg:mt-0">
          <FocusSidebar />
        </div>
      </div>
    </div>
  );
}
