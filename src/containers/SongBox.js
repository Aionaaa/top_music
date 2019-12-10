import React, {Component, Fragment} from 'react'
import SongSelector from '../components/SongSelector'
import SongDetail from '../components/SongDetail'

class SongBox extends Component{
  constructor(props){
    super(props);
    this.state = {songs: [],
    currentSong: null};
    this.handleSongSelected = this.handleSongSelected.bind(this)
  }

  componentDidMount(){
    const url = "data.feed.entry[0]["im:image"][0].label";

    fetch(url)
      .then(res => res.json())
      .then(songs => this.setState({songs: songs}))
      .catch(err => console.error)
  }

  handleSongSelected(index){
    const selectedSong = this.state.songs[index];
    this.setState({currentSong: selectedSong})
  }

  render(){
    return(
      <Fragment>
        <h2>SongBox</h2>
        <SongSelector songs={this.state.songs}
        onSongSelected={this.handleSongSelected}/>
        <SongDetail song={this.state.currentSong}/>
        </Fragment
    );
  }


}

export default SongBox;
