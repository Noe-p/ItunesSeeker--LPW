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
    rate: 0,
    kind: song.kind,
  };
};

export const fetchSongs = async (title: string) => {
  try {
    let res = await fetch(
      baseUrl +
        createRequest({
          term: title,
          limit: '25',
        })
    );
    const json = await res.json();
    return json.results.map(transformSong);
  } catch (e) {
    console.log(e);
    return [];
  }
};
