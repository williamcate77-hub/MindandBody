import { useParams, useNavigate } from 'react-router-dom';
import { SESSIONS, getEmbedUrl } from '../data/meditations';
import { useApp } from '../context/AppContext';
import { Badge } from '../components/shared/Badge';
import { type MeditationSession } from '../types/meditation';

function AudioPlayer({ session }: { session: MeditationSession }) {
  const embedUrl = getEmbedUrl(session.audioFileId);

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ background: 'rgba(30, 42, 32, 0.6)', border: '1px solid rgba(142, 207, 158, 0.1)' }}
    >
      {/* Label row */}
      <div className="flex items-center gap-2 px-5 pt-4 pb-3">
        <span
          className="material-symbols-outlined text-brand text-xl"
          style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
        >
          self_improvement
        </span>
        <span className="text-ink-2 text-sm font-medium">{session.title}</span>
        <span className="ml-auto text-ink-3 text-xs">{session.durationMinutes} min</span>
      </div>

      {/* Google Drive audio player iframe */}
      <iframe
        src={embedUrl}
        allow="autoplay"
        title={session.title}
        style={{
          width: '100%',
          height: '80px',
          border: 'none',
          display: 'block',
        }}
      />

      <p className="text-ink-3 text-[11px] text-center px-5 py-3 leading-relaxed">
        Make sure the Google Drive files are shared as{' '}
        <span className="text-ink-2">Anyone with the link</span> for audio to play.
      </p>
    </div>
  );
}

export function MeditationDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isFavourite, toggleFavourite } = useApp();

  const session = SESSIONS.find((s) => s.id === id);

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <p className="text-ink-2">Session not found.</p>
        <button onClick={() => navigate('/meditate')} className="text-brand text-sm">
          ← Back to Meditate
        </button>
      </div>
    );
  }

  const fav = isFavourite(session.id);

  return (
    <div className="px-5 pb-8">
      {/* Back + Actions */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-ink-3 hover:text-ink transition-colors"
        >
          <span className="material-symbols-outlined text-xl">arrow_back</span>
          <span className="text-sm">Back</span>
        </button>
        <button
          onClick={() => toggleFavourite(session.id)}
          className="text-ink-3 hover:text-brand transition-colors"
          aria-label={fav ? 'Remove from favourites' : 'Add to favourites'}
        >
          <span
            className="material-symbols-outlined text-2xl"
            style={{
              fontVariationSettings: fav
                ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                : "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24",
              color: fav ? '#8ecf9e' : undefined,
            }}
          >
            favorite
          </span>
        </button>
      </div>

      {/* Title */}
      <h1 className="font-serif text-3xl text-ink leading-tight mb-3">{session.title}</h1>

      {/* Meta */}
      <div className="flex items-center gap-2 mb-6">
        <Badge label={`${session.durationMinutes} min`} variant="muted" size="md" />
        <Badge label={session.categoryLabel} variant="brand" size="md" />
      </div>

      {/* Description */}
      <p className="text-ink-2 leading-relaxed mb-6">{session.description}</p>

      {/* Audio Player */}
      <AudioPlayer session={session} />
    </div>
  );
}
