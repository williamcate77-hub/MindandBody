export type AlternateDay = 'couch' | 'figure4';

export interface Exercise {
  id: number;
  name: string;
  duration: number; // seconds
  description: string;
  cues: string[];
  alternateDay?: AlternateDay;
}

export type PhaseName = 'Foundation' | 'Development' | 'Advancement';

export interface Phase {
  name: PhaseName;
  weeks: [number, number];
  tension: string;
  hold: string;
  pnf: string;
  description: string;
}
