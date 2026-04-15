import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { type MeditationSession } from '../../types/meditation';

interface DailyPickHeroProps {
  session: MeditationSession;
}

export function DailyPickHero({ session }: DailyPickHeroProps) {
  const navigate = useNavigate();
  const { isFavourite, toggleFavourite } = useApp();
  const fav = isFavourite(session.id);

  return (
    <div
      className="mx-5 rounded-2xl overflow-hidden relative"
      style={{
        background: 'linear-gradient(135deg, #c8e6d4 0%, #e8f5ec 100%)',
        border: '1px solid rgba(45, 122, 79, 0.2)',
      }}
    >
      {/* Top badge row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-0">
        <span className="text-[10px] text-brand font-semibold uppercase tracking-widest">
          Today's Pick
        </span>
        <button
          onClick={() => toggleFavourite(session.id)}
          className="text-ink-3 hover:text-brand transition-colors"
          aria-label={fav ? 'Remove from favourites' : 'Add to favourites'}
        >
          <span
            className="material-symbols-outlined text-xl"
            style={{
              fontVariationSettings: fav
                ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20"
                : "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20",
              color: fav ? '#2d7a4f' : undefined,
            }}
          >
            favorite
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="px-5 pt-3 pb-5">
        <h2 className="font-serif text-2xl text-ink leading-tight mb-1">{session.title}</h2>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-ink-2">{session.durationMinutes} min</span>
          <span className="text-ink-3 text-xs">·</span>
          <span className="text-xs text-ink-2">{session.categoryLabel}</span>
        </div>
        <p className="text-ink-2 text-sm leading-relaxed mb-5 line-clamp-2">
          {session.description}
        </p>

        <button
          onClick={() => navigate(`/meditate/${session.id}`)}
          className="flex items-center gap-2 bg-brand text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-brand-deep transition-colors"
        >
          <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 20" }}>
            play_arrow
          </span>
          Start Session
        </button>
      </div>
    </div>
  );
}
