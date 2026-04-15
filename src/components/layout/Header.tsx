import { useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export function Header() {
  const location = useLocation();
  const { currentWeek, currentPhase } = useApp();
  const isMobility = location.pathname.startsWith('/mobility');

  return (
    <header className="flex items-center justify-between px-5 pt-6 pb-2">
      <div>
        <h1 className="font-serif text-xl leading-tight text-ink">M&B</h1>
        <p className="text-[11px] text-ink-3 font-sans tracking-wide uppercase">
          Mind &amp; Body
        </p>
      </div>

      {isMobility && (
        <div className="flex items-center gap-2 bg-surf-2 px-3 py-1.5 rounded-full">
          <span className="text-brand text-xs font-semibold">{currentPhase.name}</span>
          <span className="text-ink-3 text-[11px]">Wk {currentWeek}</span>
        </div>
      )}
    </header>
  );
}
