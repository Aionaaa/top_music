import React from 'react';

const SongSelector = (props) => {
  const options = props.songs.map((song, index) => {
    return <option value={index}
    key={index}>{song.name}</option>
  })

  function handleChange(event){
    props.onSongSelected(event.target.value)
  }

  return(
    <select id="song-selector"
    defaultValue="default" onChange={handleChange}>
    <option disabled value="default">Choose a Song</option> {options}</select>
  )
}

export default SongSelector;
