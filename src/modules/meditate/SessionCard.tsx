import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { type MeditationSession } from '../../types/meditation';
import { Badge } from '../../components/shared/Badge';

interface SessionCardProps {
  session: MeditationSession;
}

export function SessionCard({ session }: SessionCardProps) {
  const navigate = useNavigate();
  const { isFavourite, toggleFavourite } = useApp();
  const fav = isFavourite(session.id);

  return (
    <div
      onClick={() => navigate(`/meditate/${session.id}`)}
      className="relative flex-shrink-0 w-44 bg-surf rounded-xl p-4 cursor-pointer select-none"
      style={{ border: '1px solid rgba(45, 122, 79, 0.15)', boxShadow: '0 1px 4px rgba(21, 34, 25, 0.06)' }}
    >
      {/* Favourite */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavourite(session.id);
        }}
        className="absolute top-3 right-3 text-ink-3 hover:text-brand transition-colors"
        aria-label={fav ? 'Remove from favourites' : 'Add to favourites'}
      >
        <span
          className="material-symbols-outlined text-[18px]"
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

      <div className="mb-3">
        <span className="material-symbols-outlined text-brand text-2xl">self_improvement</span>
      </div>

      <p className="text-ink text-sm font-semibold leading-snug mb-2 pr-5">{session.title}</p>

      <div className="flex flex-wrap gap-1.5">
        <Badge label={`${session.durationMinutes} min`} variant="muted" />
        <Badge label={session.categoryLabel} variant="brand" />
      </div>
    </div>
  );
}
