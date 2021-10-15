import React from "react";

const LibrarySong = ({ song, setSongs, isPlaying, songs, setCurrentSong, audioRef, id }) => {
  const selectedSongHandler = async () => {

    const selectedSong = songs.filter((state) => state.id === id)
    await setCurrentSong(selectedSong[0])
    const newSong = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        }
      } else {
        return {
          ...song,
          active: false
        }
      }
    })
    setSongs(newSong);
    if (isPlaying) audioRef.current.play()
  }

  return (
    <div onClick={selectedSongHandler} className={`library-song ${song.active ? "selected" : ""}`}>
      <img src={song.cover} alt={song.name} />
      <div className="library-song__info">
        <h2>{song.name}</h2>
        <h3>{song.artist}</h3>
      </div>

    </div>
  )
}
export default LibrarySong;