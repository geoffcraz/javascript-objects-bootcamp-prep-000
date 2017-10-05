var playlist = {artistName: 'songTitle'}

function updatePlaylist(playlist, artistName, songTitle) {
  var updatedPlaylist = playlist[artistName] = songTitle
  return updatedPlaylist

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist
}

