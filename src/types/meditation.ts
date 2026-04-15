export type MeditationCategory =
  | 'stress'
  | 'walking'
  | 'wind-down'
  | 'nsdr'
  | 'meditation'
  | 'deep-rest';

export interface MeditationSession {
  id: string;
  title: string;
  durationMinutes: number;
  category: MeditationCategory;
  categoryLabel: string;
  audioFileId: string;
  description: string;
  isDailyPick?: boolean;
}
