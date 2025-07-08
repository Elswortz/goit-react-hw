import { Component } from 'react';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';

import './App.css';

class App extends Component {
  state = {
    searchBarText: '',
  };

  onSubmitHandler = value => {
    this.setState({
      searchBarText: value,
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmitHandler} />
        <ImageGallery searchText={this.state.searchBarText} />
      </>
    );
  }
}

export default App;
