import { Component } from 'react';

import * as API from '../../services/pixabay-api.js';

import ImageGalleryItem from './ImageGalleryItem.jsx';
import Loader from '../Loader/Loader.jsx';
import Button from '../Button/Button.jsx';
import Modal from '../Modal/Modal.jsx';

import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
    page: 1,
    total: 0,
    showModal: false,
    selectedImage: null,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchText } = this.props;
    const { page } = this.state;

    if (prevProps.searchText !== searchText) {
      this.setState({ images: [], page: 1, error: null }, () =>
        this.fetchImages(searchText, 1)
      );
    }

    if (prevState.page !== page && prevProps.searchText === searchText) {
      this.fetchImages(searchText, page);
    }
  }

  fetchImages = async (value, page) => {
    try {
      this.setState({ isLoading: true });
      const data = await API.getImages(value, page);

      if (data.hits.length === 0) {
        throw new Error(`No images found matching the search query "${value}"`);
      }

      this.setState(prevState => ({
        images: page === 1 ? data.hits : [...prevState.images, ...data.hits],
        total: data.totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMoreHandler = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = imageData => {
    this.setState({
      selectedImage: imageData,
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      selectedImage: null,
      showModal: false,
    });
  };

  render() {
    const { images, isLoading, total, error, showModal, selectedImage } =
      this.state;
    return (
      <>
        {error && (
          <div className={css.error}>
            <p>{error}</p>
          </div>
        )}
        <ul className={css.gallery}>
          {images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              src={webformatURL}
              alt={tags}
              largeImgURL={largeImageURL}
              onClick={this.openModal}
            />
          ))}
        </ul>
        {isLoading && <Loader loading={isLoading} />}
        {images.length > 0 && total !== images.length && (
          <Button onClick={this.loadMoreHandler} />
        )}
        {showModal && selectedImage && (
          <Modal
            selectedImg={selectedImage}
            onEscapeKeydown={this.closeModal}
          />
        )}
      </>
    );
  }
}

export default ImageGallery;
