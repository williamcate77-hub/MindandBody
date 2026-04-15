import { useApp } from '../../context/AppContext';

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

function getDateString(): string {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}

export function MobilityHero() {
  const { currentPhase } = useApp();

  return (
    <div className="px-5 py-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-ink-3 text-sm mb-0.5">{getDateString()}</p>
          <h2 className="font-serif text-2xl text-ink">{getGreeting()}</h2>
          <p className="text-ink-2 text-sm mt-1">Ready to move?</p>
        </div>
        <div
          className="rounded-xl px-3 py-2 text-center"
          style={{ background: 'rgba(74, 124, 89, 0.2)', border: '1px solid rgba(142, 207, 158, 0.15)' }}
        >
          <p className="text-brand text-xs font-semibold">{currentPhase.name}</p>
          <p className="text-ink-3 text-[10px] mt-0.5">{currentPhase.tension} tension</p>
        </div>
      </div>
    </div>
  );
}
