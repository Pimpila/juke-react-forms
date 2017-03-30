import React from 'react'
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';



export default class FilterableArtistsContainer extends React.Component {
  constructor(){
    super()
    this.state = {inputValue: ""}
    this.collectInput = this.collectInput.bind(this)
  }
  collectInput (event){
    this.setState({
      inputValue: event.target.value
    })
  }




  render () {

    const inputValue = this.state.inputValue;

    const filteredArtists = this.props.artists.filter((artist) => {
      return artist.name.includes(inputValue)})
    console.log("filteredArtists: ", filteredArtists)
    return (
      <div>
        <FilterInput collectInput={this.collectInput}/>
        <Artists artists={filteredArtists} />
      </div>
    )
  }
}
