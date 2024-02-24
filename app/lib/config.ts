import { StarterKit } from '@tiptap/starter-kit';
// import StarterKit from '@tiptap/starter-kit';
// import dayjs from 'dayjs';

type HeaderConfig = {
  title: string;
  description?: string;
  keywords?: string;
  href: string;
};

export const headerConfig: HeaderConfig[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Generate WOD',
    href: '/wod',
  }
];
export const extensionsEditor = [
  StarterKit.configure({
    heading: {
      HTMLAttributes: {
        class: "tiptap-typography",
      },
      levels: [1, 2, 3],
    },
  }),
];
// export const defaultContentWod = (today = true) =>`
// <h1 id="crossfit-daily-workout-routine">${today ? 'Routine ' + dayjs().format('DD/MM/YYYY') : "CrossFit Routine"}</h1>
// <h2 id="warm-up">Warm-up</h2>
// <p>Description of the warm-up section</p>
// <h2 id="strength-training">Strength Training</h2>
// <h3 id="1-back-squats">1. Back Squats</h3>
// <p>Describe the exercise</p>
// <h3 id="2-push-press">2. Push Press</h3>
// <ul>
// <li><strong>Sets:</strong> 3</li>
// <li><strong>Reps:</strong> 10-12</li>
// <li><strong>Rest:</strong> 1-2 minutes between sets</li>
// </ul>
// <h2 id="metcon-metabolic-conditioning-">Metcon (Metabolic Conditioning)</h2>
// <p id="1-amrap-as-many-rounds-as-possible-in-12-minutes">1. AMRAP (As Many Rounds As Possible) in 12 minutes</p>
// <ul>
// <li>10 Box Jumps</li>
// <li>15 Kettlebell Swings</li>
// <li>20 Air Squats</li>
// </ul>
// <h2 id="cool-down">Cool Down</h2>
// <p>Describe the cool-down exercise</p>
// <h2 id="notes">Notes</h2>
// <p>Describe the necessary notes.</p>
// `;
