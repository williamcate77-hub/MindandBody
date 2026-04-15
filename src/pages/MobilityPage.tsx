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
          background: 'rgba(18, 26, 21, 0.7)',
          border: '1px solid rgba(142, 207, 158, 0.08)',
        }}
      >
        <SessionTimer />
      </div>

      {/* Current exercise instructions — always visible during workout */}
      <CurrentExerciseCues />

      {/* Full step list */}
      <RoutineStepList />
    </div>
  );
}
