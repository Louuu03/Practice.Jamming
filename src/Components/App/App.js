import React from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      searchResults:[{name:'name1',artist:'artist1',albulm:'albulm1',id:'id1'},
      {name:'name2',artist:'artis2',albulm:'albulm2',id:'id2'},
      {name:'name3',artist:'artist3',albulm:'albulm3',id:'id3'}]
    }
  }
  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
         <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
