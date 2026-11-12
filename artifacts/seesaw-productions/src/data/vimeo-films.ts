import catalog from './vimeo-catalog.json';

export interface VimeoFilm {
  id: string;
  title: string;
  thumbnail: string;
  duration?: string;
}

// Keep the user's portfolio exclusions separate from the source catalog so
// refreshing Vimeo metadata does not restore films they chose to remove.
const excludedFilmIds = new Set([
  '1202089482', // Final
  '1202083853', // novo nordisk reel
  '1202079654', // Olpers Eid
  '1151181043', // Olivia Hair Color
  '1151180565', // olivia Hair Colour
  '1151178786', // Olivia Hair Colour
  '1135517577', // Centrum digital
  '1135514675', // Olivia Hair Colour New Pack
  '1121322775', // Meezan Taste of Pakistan
  '1109351165', // Mezan Taste of Pakistan
  '1080871635', // Oreo Brookie
  '1080868941', // No Bake Cheesecake
  '1068673016', // OREO Cookie Rookie - Oreo Fruite Squares
  '1068671823', // OREO Cookie Rookie - Oreo Trifle
  '1064885838', // OREO Cookie Rookie - Oreo Shake
  '1064874174', // vinto jet
  '1043183318', // Dr Flu
  '1026080409', // Bake Parlor Ketchup and chilli garlic
  '1011842513', // Meezan Bank - Visa TAP n Go
  '1011839464', // WeCover UAE
  '1011837297', // Kanas classic mayo 15sec
  '1011837258', // Jazz Business - Quantica - Frequency Builder
  '1011836908', // Jazz Business - Frequency Builder 9
  '1011836895', // Jazz Business - Frequency Builder 08
  '1011836882', // Jazz Business - Frequency Builder 07
  '1011836848', // Jazz Business - Frequency Builder 06
  '1011836813', // Jazz Business - Frequency Builder 4
  '1011836774', // Jazz Business - Frequency Builder
  '1011836220', // Jazz Business - Quantica Frequency Builder
  '1011834324', // PSO Corporate Documentary
  '1005746257', // Shangrila Sauces - HOT Sriracha
  '1005746221', // Shangrila Sauces - THAI Sweet Chilli
  '1005746190', // Shangrila Sauces - Smoky BBQ
  '1005746150', // Shangrila Sauces - Yellow MUSTARD
  '1005746101', // Shangrila Sauces - Achari MANGO
  '1005746068', // Shangrila Sauces - IMLI Ginger
  '1005746037', // Shangrila Sauces - GREEN Chilli
  '1005742488', // Islamabad Tea - Functional
  '924412418', // Jazz Business - Quantica
  '885940511', // Brito Fineliner
  '885939381', // Brito Fineliner
  '885937534', // Bettani Tea
  '885936613', // Bettani Tea
  '885933014', // Bettani Tea
  '885825979', // CBL Corporate Video
  '885824105', // HerbActive
  '885823862', // HerbActive
  '885820985', // HerbActive
  '885819699', // HerbActive
  '885817613', // NBP digital app
  '867870495', // DUREX - Helping Hand
  '867869640', // DUREX - Band Baja Barat
  '867867491', // Dabur Red Toothpaste
  '867866299', // Dabur Red Toothpaste
  '867864617', // Dabur Red Toothpaste
  '867863156', // Dabur red Toothpaste
  '867857636', // Kidzchup
  '867854200', // Olivia Hair Colour
  '857678629', // NBP Aur Pakistan - Independence Day
  '834196424', // Toyota Yaris Aero Kit
  '670619018', // Olivia Hair Colour
  '644530491', // Olivia Hair Colour
]);

export const vimeoFilms: VimeoFilm[] = catalog.filter(
  (film) => !excludedFilmIds.has(film.id),
);
