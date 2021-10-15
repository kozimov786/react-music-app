import React from "react";
import LibrarySong from "./LibrarySong";


const Library = ({ libraryStatus, audioRef, setSongs, isPlaying, songs, setCurrentSong }) => {
  return (
    <div className={`library ${libraryStatus ? "library-active" : ''}`}>
      <h2 className="library__heading">Library</h2>
      <div className="library__songs">
        {songs.map(song =>
          <LibrarySong
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        )}
      </div>
    </div>
  )
}
export default Library;
