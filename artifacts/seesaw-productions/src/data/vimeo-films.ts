import catalog from './vimeo-catalog.json';

export interface VimeoFilm {
  id: string;
  title: string;
  thumbnail: string;
  duration?: string;
}

// Snapshot of every publicly listed film across SeeSaw's 14 Vimeo pages.
export const vimeoFilms: VimeoFilm[] = catalog;
