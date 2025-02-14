export const isTitleEmpty = (songTitle: string): boolean => {
  const isEmpty = !songTitle;

  return isEmpty;
};

export const doesTitleExist = (
  songTitle: string,
  songTitles: string[]
): boolean => {
  const doesExist = songTitles.includes(songTitle);

  return doesExist;
};

export const isTitleShort = (songTitle: string): boolean => {
  const minimumSongTitleLength = 3;
  const isShort = songTitle.length < minimumSongTitleLength;

  return isShort;
};

export const isPlaylistFull = (songTitles: string[]): boolean => {
  const maximumSongListLength = 5;
  const isFull = songTitles.length >= maximumSongListLength;

  return isFull;
};

export const addSong = (songTitle: string, songTitles: string[]): void => {
  songTitles.push(songTitle);
};

export const sortSongs = (songTitles: string[]): void => {
  songTitles.sort();
};

export const getSongsCount = (songTitles: string[]): number => {
  const songsCount = songTitles.length;

  return songsCount;
};

export const removeSongByPosition = (
  songTitles: string[],
  position: number
): void => {
  songTitles.splice(position, 1);
};

export const getErrorMessage = (errorCode: string): string => {
  let errorMessage: string;

  if (errorCode === "required") {
    errorMessage = "No has introducido ningún título";
  } else if (errorCode === "too-short") {
    errorMessage = "El título es demasiado corto";
  } else if (errorCode === "exists") {
    errorMessage = "La canción ya existe";
  } else if (errorCode === "limit") {
    errorMessage = "La playlist está llena";
  } else errorMessage = "";
  return errorMessage;
};
