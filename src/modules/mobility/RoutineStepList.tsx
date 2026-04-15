import { useMobility } from '../../context/MobilityContext';
import { StepItem } from './StepItem';

export function RoutineStepList() {
  const { exercises, currentIndex, isComplete } = useMobility();

  return (
    <div>
      <div className="px-5 mb-2">
        <h3 className="text-ink-3 text-xs font-semibold uppercase tracking-widest">
          Today's Routine
        </h3>
      </div>

      <div className="space-y-0.5 px-1">
        {exercises.map((exercise, index) => {
          const state =
            isComplete
              ? 'future'
              : index === currentIndex
                ? 'active'
                : index === currentIndex + 1
                  ? 'next'
                  : 'future';

          return (
            <StepItem
              key={exercise.id}
              exercise={exercise}
              index={index}
              state={state}
            />
          );
        })}
      </div>
    </div>
  );
}
