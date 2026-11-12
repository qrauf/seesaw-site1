import catalog from './vimeo-catalog.json';

export interface VimeoFilm {
  id: string;
  title: string;
  thumbnail: string;
  duration?: string;
}

// Curated film selection, in display order.
const selectedFilms = [
  { id: '1098500396', duration: '00:32' },
  { id: '1028334236', duration: '00:30' },
  { id: '1151181043', duration: '00:30' },
  { id: '1121319274', duration: '00:45' },
  { id: '924410948', duration: '01:35' },
  { id: '998204993', duration: '00:25' },
  { id: '948776541', duration: '00:35' },
  { id: '944068930', duration: '00:25' },
  { id: '885815218', duration: '00:53' },
  { id: '924408538', duration: '01:24' },
  { id: '695451240', duration: '00:30' },
];

export const vimeoFilms: VimeoFilm[] = selectedFilms.map((selection) => {
  const film = catalog.find((item) => item.id === selection.id);
  if (!film) throw new Error(`Missing selected Vimeo film: ${selection.id}`);
  return { ...film, duration: selection.duration };
});
