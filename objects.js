var playlist = {
  'dick': 'bag',
  'some': 'guy'
}


function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist
}

function removeFromPlaylist(playlist, artist){
  delete playlist[arist]
  return playlist
}
