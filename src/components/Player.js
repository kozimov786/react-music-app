import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, setCurrentSong, setSongs, songs, audioRef, isPlaying, setIsPlaying }) => {

  //Event handler
  const playHandler = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    } else {
      audioRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }
  const timeUpdateHandlar = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current)
    const roundedDuration = Math.round(duration)

    const animate = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({ ...songInfo, currentTime: current, duration, animationPercentage: animate })
  }
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    )
  }
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value })
  }

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length])
      activeSongHandler(songs[(currentIndex + 1) % songs.length])
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1])
        activeSongHandler(songs[songs.length - 1])
        if (isPlaying) audioRef.current.play()

        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length])
      activeSongHandler(songs[(currentIndex - 1) % songs.length])

    }
    if (isPlaying) audioRef.current.play()
  }

  const activeSongHandler = (nexPrev) => {
    const newSong = songs.map((song) => {
      if (song.id === nexPrev.id) {
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
    setSongs(newSong)
  }
  //STATE
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`
  }
  const onEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  }
  return (
    <div className='player'>
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>

        <div style={{ background: `linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})` }} className="track">
          <input min={0} max={songInfo.duration || 0} onChange={dragHandler} value={songInfo.currentTime} type="range" />
          <div style={trackAnim} className="track__animate"></div>
        </div>

        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className='skip-back' size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playHandler}
          className='icon' size="2x"
          icon={isPlaying ? faPause : faPlay} />
        <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className='skip-forward' size="2x" icon={faAngleRight} />
      </div>
      <audio onTimeUpdate={timeUpdateHandlar}
        onLoadedMetadata={timeUpdateHandlar}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={onEndHandler}
      ></audio>
    </div>
  )
}
export default Player;