import { Component } from 'react';
import * as API from '../../services/pixabay-api.js';
import ImageGalleryItem from './ImageGalleryItem.jsx';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
  };

  async componentDidUpdate(prevProps) {
    if (prevProps.searchText !== this.props.searchText) {
      try {
        this.setState({ isLoading: true });
        const materials = await API.getImages(this.props.searchText);
        this.setState({
          images: materials.hits,
          isLoading: false,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    const { images, isLoading } = this.state;
    return (
      <ul className={css.gallery}>
        {images.map(({ id, previewURL, tags }) => (
          <li className={css.galleryItem} key={id}>
            <ImageGalleryItem src={previewURL} alt={tags} />
          </li>
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
