import React from 'react';
import axios from 'axios';
import NewPlaylist from '../components/NewPlayList';


export default class PlayListContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      inputValue: ''
    }

    this.collectInput = this.collectInput.bind(this);
    this.showState = this.showState.bind(this);
    this.setDisable = this.setDisable.bind(this);
  }

  collectInput (event){
    this.setState({
      inputValue: event.target.value
    })
    console.log('this.state inside collectInput', this.state)
  }

  showState (event) {
    event.preventDefault();
    this.createPlayList(this.state.inputValue)
    this.setState({inputValue: ''})
  }

  setDisable() {
    if (this.state.inputValue.length > 16 || !this.state.inputValue) {
      return true;
    }
    else {
      return false;
    }
  }

  validate() {
    return this.state.inputValue.length > 16 ?
    <div className="alert alert-warning">Please enter a name 16 characters or less</div>:
    null
  }

  createPlayList(name) {
    axios.post('/api/playlists/', {name})
      .then(res => res.data)
      .then(result => {
        console.log(result)
      });
  }

  render() {
    console.log(this.state.inputValue);
    return (
      <div>
        <NewPlaylist collectInput={this.collectInput} showState={this.showState} inputValue={this.state.inputValue} setDisable={this.setDisable} />
        {this.validate()}
      </div>
    )
  }

}
