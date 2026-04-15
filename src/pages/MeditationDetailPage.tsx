import { useParams, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { SESSIONS, getAudioUrl } from '../data/meditations';
import { useApp } from '../context/AppContext';
import { Badge } from '../components/shared/Badge';
import { type MeditationSession } from '../types/meditation';

function AudioPlayer({ session }: { session: MeditationSession }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const audioUrl = getAudioUrl(session.audioFileId);

  const formatTime = (s: number) => {
    if (!isFinite(s) || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      setError(false);
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const t = Number(e.target.value);
    audio.currentTime = t;
    setCurrentTime(t);
  };

  const progress = duration > 0 ? currentTime / duration : 0;

  return (
    <div
      className="rounded-2xl p-5 space-y-4"
      style={{ background: 'rgba(30, 42, 32, 0.6)', border: '1px solid rgba(142, 207, 158, 0.1)' }}
    >
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime ?? 0)}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration ?? 0)}
        onEnded={() => setIsPlaying(false)}
        onError={() => { setError(true); setIsLoading(false); setIsPlaying(false); }}
        preload="metadata"
      />

      {/* Progress bar */}
      <div className="space-y-1.5">
        <div className="relative h-1 bg-surf-3 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-brand rounded-full transition-all"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <input
          type="range"
          min={0}
          max={duration || 1}
          step={0.1}
          value={currentTime}
          onChange={handleSeek}
          className="w-full opacity-0 absolute"
          style={{ height: '4px', marginTop: '-18px', cursor: 'pointer' }}
        />
        <div className="flex justify-between text-xs text-ink-3">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration || session.durationMinutes * 60)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.currentTime = Math.max(0, currentTime - 15);
            }
          }}
          className="text-ink-3 hover:text-ink transition-colors"
          aria-label="Rewind 15 seconds"
        >
          <span className="material-symbols-outlined text-2xl">replay_15</span>
        </button>

        <button
          onClick={togglePlay}
          className="w-16 h-16 rounded-full bg-brand flex items-center justify-center hover:bg-brand/90 transition-colors"
          aria-label={isPlaying ? 'Pause' : 'Play'}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="material-symbols-outlined text-deep text-2xl animate-spin">refresh</span>
          ) : (
            <span
              className="material-symbols-outlined text-deep text-3xl"
              style={{ fontVariationSettings: "'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 24" }}
            >
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          )}
        </button>

        <button
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.currentTime = Math.min(
                audioRef.current.duration || 9999,
                currentTime + 30,
              );
            }
          }}
          className="text-ink-3 hover:text-ink transition-colors"
          aria-label="Forward 30 seconds"
        >
          <span className="material-symbols-outlined text-2xl">forward_30</span>
        </button>
      </div>

      {error && (
        <p className="text-xs text-center text-ink-3">
          Unable to load audio. Ensure the file is publicly shared on Google Drive.
        </p>
      )}
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
