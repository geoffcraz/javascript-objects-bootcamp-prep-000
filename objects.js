/*var playlist = {
  'dick': 'bag',
  'some': 'guy'
}
*/

function updatePlaylist(playlist, artistName, songTitle) {
      playlist[artistName] = songTitle


function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist
}

var playlist = {
   'Foo Fighters': 'Everlong',
   Prince: 'Purple Rain'
 }