import { useState } from 'react';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';

import './App.css';

const App = () => {
  const [searchBarText, setSearchBarText] = useState('');

  const onSubmitHandler = value => {
    setSearchBarText(value);
  };

  return (
    <>
      <Searchbar onSubmit={onSubmitHandler} />
      <ImageGallery searchText={searchBarText} />
    </>
  );
};

export default App;
