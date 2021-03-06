import { Handler } from '@netlify/functions';
const getSpotifyAuthURL = (clientId: string, redirectUri: string, state: string) => {
  return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURI(
    redirectUri,
  )}&scope=user-read-currently-playing%20user-top-read%20user-read-recently-played&state=${state}`;
};

export const handler: Handler = async (event, context) => {
  const username = event.path.split('/@')[1];
  if (username == null || username === '') {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Bad Request',
      }),
    };
  }
  const { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } = process.env;
  const authUrl = getSpotifyAuthURL(SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI, username);
  return {
    statusCode: 302,

    headers: {
      Location: authUrl,
    },
  };
};
