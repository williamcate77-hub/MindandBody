import { Exercise, Phase } from '../types/mobility';

export const ALL_EXERCISES: Exercise[] = [
  {
    id: 1,
    name: 'Cervical CARs',
    duration: 45,
    description:
      'Stand tall with fists clenched at sides. Create full-body tension. Draw the largest possible circle with your nose, moving through full cervical range of motion. Each circle takes 8–10 seconds.',
    cues: [
      'Create full-body irradiation tension — fists clenched, core braced',
      'Chin to chest → ear to shoulder → head back → ear to other side → return',
      'Each circle takes 8–10 seconds',
      'Perform 2 circles clockwise, 2 counterclockwise',
    ],
  },
  {
    id: 2,
    name: 'Shoulder CARs',
    duration: 75,
    description:
      'Stand tall. Make a fist, lock the elbow straight, and trace the largest possible circle with your arm. Clench your opposite fist and brace your core throughout. Perform 3 circles forward and 3 backward per arm.',
    cues: [
      'Keep the elbow fully locked — no bend',
      'Forward → overhead → behind body → back to start',
      'Each circle takes ~8 seconds',
      '3 circles forward, 3 backward per arm',
      'Clench opposite fist and brace core throughout',
    ],
  },
  {
    id: 3,
    name: 'Wrist CARs',
    duration: 30,
    description:
      'Extend both arms in front of you, make fists, and perform slow maximal circles at the wrists. Both wrists move simultaneously.',
    cues: [
      'Arms straight out in front, fists clenched',
      'Move through the full end-range — dorsiflexion, inversion, plantarflexion, eversion',
      '5 circles clockwise, 5 counterclockwise',
      'Both wrists move simultaneously',
    ],
  },
  {
    id: 4,
    name: 'Quadruped Thoracic CARs',
    duration: 75,
    description:
      'On hands and knees. Perform slow cat-cow cycles, then isolate movement to the thoracic spine, then finish with thoracic rotations (thread the needle).',
    cues: [
      'Hands under shoulders, knees under hips — neutral tabletop',
      '4 slow cat-cow cycles: curl from tailbone upward (cat), extend vertebra by vertebra (cow)',
      '4 additional cycles isolating the thoracic spine — lock lumbar, move upper back only',
      '3 thread-the-needle rotations per side: hand behind head, rotate chest to ceiling',
    ],
  },
  {
    id: 5,
    name: 'Standing Hip CARs',
    duration: 90,
    description:
      'Stand on one leg with a hand on the wall for balance. Draw the largest possible circle with your knee, moving through full hip range of motion. Pelvis stays completely still.',
    cues: [
      'Hand on wall, clench opposite fist, brace entire core',
      'Lift knee to hip height — externally rotate → extend leg behind → sweep forward',
      'Each circle takes ~7 seconds',
      '3 circles forward, 3 backward per leg',
      'Pelvis must stay completely still — motion from hip only',
    ],
  },
  {
    id: 6,
    name: 'Ankle CARs',
    duration: 30,
    description:
      'Stand on one leg or sit. Draw maximal circles with your foot, moving through full ankle range of motion. 5 circles each direction per ankle.',
    cues: [
      'Lift foot slightly off the ground',
      'Move slowly through dorsiflexion → inversion → plantarflexion → eversion',
      '5 circles each direction per ankle',
    ],
  },
  {
    id: 7,
    name: "World's Greatest Stretch",
    duration: 150,
    description:
      'A four-step multi-joint mobility sequence in a deep lunge. Works hip flexors, thoracic rotation, and hamstrings. Perform 5 reps per side.',
    cues: [
      'Step 1 — Deep lunge, both hands inside front foot. Hold 3s.',
      'Step 2 — Drive inside elbow toward the arch of your front foot. Hold 3s.',
      'Step 3 — Rotate torso and reach inside arm to ceiling. Follow with eyes. Hold 3s.',
      'Step 4 — Straighten front leg and fold forward for hamstring stretch. Hold 2s.',
      '5 complete reps per side',
    ],
  },
  {
    id: 8,
    name: '90/90 Hip Transitions',
    duration: 60,
    description:
      'Sit with both knees at 90°. Transition by sweeping both knees to the opposite side in one fluid motion. Pause 3 seconds in each position. Perform 8–10 total transitions.',
    cues: [
      'Front leg externally rotated (knee out), back leg internally rotated (knee in)',
      'Sweep both knees to opposite side in one fluid motion — windshield wiper',
      'Pause 3 seconds in each 90/90 position',
      '8–10 total transitions',
      'Keep torso upright — do not collapse into lower back',
    ],
  },
  {
    id: 9,
    name: 'Half-Kneeling Ankle Dorsiflexion',
    duration: 120,
    description:
      'Half-kneeling ankle dorsiflexion mobilisation. Drive the knee forward over the toes while keeping the heel completely flat. 60 seconds per side.',
    cues: [
      'Half-kneeling: rear knee down, front foot flat at 90°',
      'Drive knee forward over toes — heel must stay flat on the ground',
      'Feel the stretch at the front of the ankle',
      'Hold 60 seconds per side',
      'Weeks 5+: Push ball of foot into ground for 5s at 20% effort, then relax and drive deeper',
    ],
  },
  {
    id: 10,
    name: 'Open Book Thoracic Rotation',
    duration: 120,
    description:
      'Lie on your side with knees stacked at 90° (hip lock). Reach the top arm overhead and behind, opening your chest to the ceiling. Hold 60 seconds per side.',
    cues: [
      'Lie on your side, knees stacked and bent to 90°',
      'Bottom knee stays pressed into top knee — this locks the lumbar spine',
      'Reach top arm forward, then rotate it overhead and behind you',
      'Follow your hand with your eyes',
      'Hold the fully open position 60 seconds per side',
      'Weeks 5+: Press top hand into floor for 5s, relax and rotate deeper',
    ],
  },
  {
    id: 11,
    name: 'Couch Stretch',
    duration: 150,
    description:
      'Kneel facing away from a wall or couch. Place the top of your rear foot on the surface behind you, front foot flat at 90°. Squeeze the glute and drive hips forward. 75 seconds per side.',
    cues: [
      'Kneel facing away from wall, rear foot top resting on wall/couch',
      'Front shin vertical, front knee at 90°',
      'Squeeze the trailing glute hard and tuck pelvis posteriorly',
      'Drive hips forward — feel the stretch at the front of the hip',
      'Hold 75 seconds per side',
      'Weeks 5+: Push rear knee into wall for 5s at 30–50% effort, relax and sink deeper',
    ],
    alternateDay: 'couch',
  },
  {
    id: 12,
    name: 'Supine Figure-4',
    duration: 150,
    description:
      'Lie on your back. Cross one ankle over the opposite knee (figure-4 shape). Pull the bottom leg toward your chest. 75 seconds per side.',
    cues: [
      'Lie on your back, cross ankle over opposite knee',
      'Flex the crossed foot to protect the knee joint',
      'Pull the bottom knee toward your chest',
      'Feel a deep stretch in the glute/hip of the crossed leg',
      'Hold 75 seconds per side',
      'Weeks 5+: Push crossed knee away for 5s, relax and pull deeper toward chest',
    ],
    alternateDay: 'figure4',
  },
];

export const PHASES: Phase[] = [
  {
    name: 'Foundation',
    weeks: [1, 4],
    tension: '50%',
    hold: '2 × 30s',
    pnf: 'None',
    description:
      'Learn the movements at comfortable tension. Static holds 2 × 30 seconds. No contract-relax.',
  },
  {
    name: 'Development',
    weeks: [5, 8],
    tension: '70–80%',
    hold: '2 × 45s',
    pnf: '30–50%',
    description:
      'Increase tension to 70–80%. Static holds 2 × 45 seconds. Introduce contract-relax: push 5s at 30–50% effort, relax and deepen.',
  },
  {
    name: 'Advancement',
    weeks: [9, 12],
    tension: '90–100%',
    hold: '2 × 60s',
    pnf: '50–75%',
    description:
      'Maximum tension 90–100%. Static holds 2 × 60 seconds. Full contract-relax at 50–75% effort.',
  },
];

/** Returns today's 11 exercises (resolves the exercise 11 alternate). */
export function getTodaysExercises(): Exercise[] {
  // Monday=1, Wednesday=3, Friday=5 → Couch Stretch
  // Tuesday=2, Thursday=4, Saturday=6, Sunday=0 → Figure-4
  const dayOfWeek = new Date().getDay();
  const isCouchDay = dayOfWeek % 2 === 1;

  return ALL_EXERCISES.filter((e) => {
    if (!e.alternateDay) return true;
    return isCouchDay ? e.alternateDay === 'couch' : e.alternateDay === 'figure4';
  });
}

export function getCurrentPhase(week: number): Phase {
  return PHASES.find((p) => week >= p.weeks[0] && week <= p.weeks[1]) ?? PHASES[0];
}

export function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m === 0) return `${s}s`;
  if (s === 0) return `${m}m`;
  return `${m}m ${s}s`;
}
