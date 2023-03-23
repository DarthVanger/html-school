import { Player, resumeMusic } from '../Player/Player.js';

const playlist = [
  {
    path:  'crazy-necross.mp3',
    title: 'Crazy Necross',
  },
  {
    path: 'death-theme.mp3',
    title: 'Death Theme',
  },
  {
    path: 'fostral-2000.mp3',
    title: 'Fostral 2000',
  },
  {
    path: 'fostral.mp3',
    title: 'Fostral',
  },
  {
    path: 'glorx-theme.mp3',
    title: 'Glorx Theme',
  },
  {
    path: 'infernals.mp3',
    title: 'Infernals',
  },
  {
    path: 'main-theme.mp3',
    title: 'Infernals',
  },
  {
    path: 'necross-theme.mp3',
    title: 'Necross Theme',
  },
  {
    path: 'secret-theme.mp3',
    title: 'Secret Worlds Theme',
  },
  {
    path: 'vanger-forever.mp3',
    title: 'Vangers forever',
  },
  {
    path: 'xplo-theme.mp3',
    title: 'Xplo Theme',
  },
].map(i => ({ ...i, path: '/video/vangers/music/' + i.path}));

export const VangersPlayer = () => Player({ playlist });
export { resumeMusic };
