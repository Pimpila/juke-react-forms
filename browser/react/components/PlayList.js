import React from 'react';

export default function PlayList(props) {

  function findPlayList(arr, id) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        return arr[i];
      }
    }
  }
  const playList = findPlayList(props.playLists, props.routeParams.playlistId)
  console.log(playList)
  return (
    <div>
      <h3>{ playList && playList.name }</h3>
      <Songs songs={ playList && playList.songs} /> {/** Hooray for reusability! */}
      { playList.songs && !playList.songs.length && <small>No songs.</small> }
      <hr />
    </div>
  )

}
