import { MeditationSession } from '../types/meditation';

export const SESSIONS: MeditationSession[] = [
  {
    id: 'stressed-3-min',
    title: 'Stressed 3 Min',
    durationMinutes: 3,
    category: 'stress',
    categoryLabel: 'Stress Relief',
    audioFileId: '1PSUDBJGpg5ED6zY1tVrIg0nIChnI3_I3',
    description:
      'A quick 3-minute reset to release tension and return to calm. Use this whenever you feel overwhelmed or scattered during the day.',
  },
  {
    id: '10-min',
    title: '10 Min',
    durationMinutes: 10,
    category: 'meditation',
    categoryLabel: 'Meditation',
    audioFileId: '1GnkxM6Frced8p6MgxS16Tdl0ivV24GfI',
    description:
      'A gentle 10-minute session to settle the mind and cultivate present-moment awareness.',
  },
  {
    id: 'walking-10-min',
    title: 'Walking 10 Min',
    durationMinutes: 10,
    category: 'walking',
    categoryLabel: 'Walking',
    audioFileId: '10Pt0_vvtCHQNFfh6hpWj-w3LjeHqStQS',
    description:
      'Mindfulness in motion. A 10-minute guided walking meditation to ground your awareness in each step.',
  },
  {
    id: 'end-of-day-10-min',
    title: 'End of Day 10 Min',
    durationMinutes: 10,
    category: 'wind-down',
    categoryLabel: 'Wind Down',
    audioFileId: '1ZkPzUaHc0iiKUvFCCZRf1kgPN2nby0yQ',
    description:
      'Wind down from the day with this calming 10-minute session. Ideal before sleep to release the weight of the day.',
  },
  {
    id: 'nsdr-10-min',
    title: 'NSDR 10 Min',
    durationMinutes: 10,
    category: 'nsdr',
    categoryLabel: 'NSDR',
    audioFileId: '1HbnA2YFRiIzTc7ovgvH4G-mOZOKwdwKx',
    description:
      'Non-Sleep Deep Rest protocol. Restores mental and physical energy in just 10 minutes. Use after lunch or between intense work blocks.',
    isDailyPick: true,
  },
  {
    id: '15-min',
    title: '15 Min',
    durationMinutes: 15,
    category: 'meditation',
    categoryLabel: 'Meditation',
    audioFileId: '1Umgjax0s5xAJSAD1vWmC-aaH9FQbQPND',
    description:
      'A deeper 15-minute meditation to cultivate sustained inner stillness and quiet presence.',
  },
  {
    id: '20-min',
    title: '20 Min',
    durationMinutes: 20,
    category: 'deep-rest',
    categoryLabel: 'Deep Rest',
    audioFileId: '1k7Vd-2U6sxCIwAH1xGILVYbwzdk87V7q',
    description:
      'A full 20-minute session for deep rest and restoration. Ideal when you have more time and space.',
  },
  {
    id: '30-min',
    title: '30 Min',
    durationMinutes: 30,
    category: 'deep-rest',
    categoryLabel: 'Deep Rest',
    audioFileId: '11VUSC-lgdnK9YDNNrfgU4klr_jAJRgeV',
    description:
      'An immersive 30-minute journey into stillness and complete mental renewal.',
  },
];

export const DAILY_PICK = SESSIONS.find((s) => s.isDailyPick)!;

export const DURATION_GROUPS: { label: string; minutes: number[] }[] = [
  { label: '~3 min', minutes: [3] },
  { label: '10 min', minutes: [10] },
  { label: '15 min', minutes: [15] },
  { label: '20+ min', minutes: [20, 30] },
];

export function getAudioUrl(fileId: string): string {
  return `https://docs.google.com/uc?export=open&id=${fileId}`;
}
