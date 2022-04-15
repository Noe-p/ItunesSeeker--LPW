const baseUrl = 'https://itunes.apple.com/search?';

const createRequest = (obj: any) => {
  return Object.keys(obj)
    .map((k) => k + '=' + obj[k].toLowerCase().replace(' ', '+'))
    .join('&');
};

const transformSong = (song: any) => {
  return {
    id: song.trackId,
    title: song.trackName,
    artist: song.artistName,
    album: song.collectionName,
    cover: song.artworkUrl100,
    rate: 3,
  };
};

export const fetchSongs = async (title: string) => {
  try {
    let res = await fetch(
      baseUrl +
        createRequest({
          term: title,
          media: 'music',
          limit: '25',
        })
    );
    const json = await res.json();
    if (title != '') return json.results.map(transformSong);
    else return [];
  } catch (e) {}
};
