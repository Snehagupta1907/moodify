import random
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

client_id = '40058f3d1557477cb3176fb9c2a7dd6e'
client_secret = '4fa92785b1f44c1f8be34676eb7d0f05'

    # Authenticate with Spotify API
client_credentials_manager = SpotifyClientCredentials(client_id, client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)


def get_playlist_id_for_mood(mood,sp):
    # Search for playlists with mood keyword in title, description, or tags
    query = f"(mood:{mood})"
    results = sp.search(q=query, type='playlist')

    # Extract playlist ID from first result
    # playlist_id = results['playlists']['items'][0]['id']
    # playlist_ids = [playlist['id'] for playlist in results['playlists']['items']]

    # return random.choice(playlist_ids)
    # playlist_id = random.choice(results['playlists']['items'])['id']

    # return playlist_id
    if results['playlists']['total'] > 0:
        playlist = random.choice(results['playlists']['items'])
        playlist_id = playlist['id']
    else:
        playlist_id = None

    return playlist_id