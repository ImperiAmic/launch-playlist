export const isTitleEmpty = (songTitle: string): boolean => {
  let isEmpty: boolean;

  isEmpty = !songTitle;

  return isEmpty;
};

export const doesTitleExist = (
  songTitle: string,
  songTitles: string[]
): boolean => {
  let doesExist: boolean;

  doesExist = songTitles.includes(songTitle);

  return doesExist;
};

export const isTitleShort = (songTitle: string): boolean => {
  let isShort: boolean;

  isShort = songTitle.length < 3;

  return isShort;
};

export const isPlaylistFull = (songTitles: string[]): boolean => {
  let isFull: boolean;

  isFull = songTitles.length >= 5;

  return isFull;
};

export const addSong = (songTitle: string, songTitles: string[]): void => {
  songTitles.push(songTitle);
};

export const sortSongs = (songTitles: string[]): void => {
  songTitles.sort();
};

export const getSongsCount = (songTitles: string[]): number => {
  let songsCount: number;

  songsCount = songTitles.length;

  return songsCount;
};

export const removeSongByPosition = (
  songTitles: string[],
  position: number
): void => {
  songTitles.splice(position - 1, 1);
};

export const getErrorMessage = (errorCode: string): string => {
  let errorMessage: string;

  // A la variable anterior le tendrás que asignar un mensaje de error
  // dependiendo del código de error recibido
  // Si el código de error no es válido, asígnale un mensaje genérico
  // Éstos son los códigos de error y sus mensajes correspondientes:
  // - "required": "No has introducido ningún título"
  // - "exists": "La canción ya existe"
  // - "too-short": "El título es demasiado corto"
  // - "limit": "La playlist está llena"

  errorMessage = ""; // Cambia esta línea por tu código

  return errorMessage;
};
