import { useLocation, useNavigate } from 'react-router-dom';

const TABS = [
  { path: '/meditate', icon: 'self_improvement', label: 'Meditate' },
  { path: '/mobility', icon: 'fitness_center', label: 'Mobility' },
] as const;

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(18, 26, 21, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(142, 207, 158, 0.08)',
      }}
    >
      <div className="flex items-center justify-around px-8 py-3 pb-safe-bottom">
        {TABS.map((tab) => {
          const isActive = location.pathname.startsWith(tab.path);
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center gap-1 min-w-[64px]"
              aria-label={tab.label}
            >
              <span
                className={`material-symbols-outlined text-[26px] transition-colors duration-200 ${
                  isActive ? 'text-brand' : 'text-ink-3'
                }`}
                style={{
                  fontVariationSettings: isActive
                    ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                    : "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24",
                }}
              >
                {tab.icon}
              </span>
              <span
                className={`text-[10px] font-medium tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-brand' : 'text-ink-3'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
