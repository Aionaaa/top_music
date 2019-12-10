import React from 'react';

const SongDetail = (props) => {
  if(!props.song) return null;

  return(
    <div>
    <h3>
    {props.song.name}
    <br></br>
    </h3>
    <img src={props.song.image}/>
    </div
  )
}

export default SongDetail;
