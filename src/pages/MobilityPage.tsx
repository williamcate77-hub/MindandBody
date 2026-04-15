import { MobilityHero } from '../modules/mobility/MobilityHero';
import { SessionTimer } from '../modules/mobility/SessionTimer';
import { CurrentExerciseCues } from '../modules/mobility/CurrentExerciseCues';
import { RoutineStepList } from '../modules/mobility/RoutineStepList';

export function MobilityPage() {
  return (
    <div className="pb-6">
      <MobilityHero />

      {/* Timer */}
      <div
        className="mx-5 mb-5 rounded-2xl"
        style={{
          background: '#ffffff',
          border: '1px solid rgba(45, 122, 79, 0.15)',
          boxShadow: '0 1px 4px rgba(21, 34, 25, 0.06)',
        }}
      >
        <SessionTimer />
      </div>

      {/* Current exercise instructions */}
      <CurrentExerciseCues />

      {/* Full step list */}
      <RoutineStepList />
    </div>
  );
}
