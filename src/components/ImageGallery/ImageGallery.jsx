import { useState, useEffect, useRef } from 'react';

import * as API from '../../services/pixabay-api.js';

import ImageGalleryItem from './ImageGalleryItem.jsx';
import Loader from '../Loader/Loader.jsx';
import Button from '../Button/Button.jsx';
import Modal from '../Modal/Modal.jsx';

import css from './ImageGallery.module.css';

const ImageGallery = ({ searchText }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!searchText) return;

    fetchImages(searchText, page);
  }, [searchText, page]);

  useEffect(() => {
    if (!searchText) return;

    setImages([]);
    setPage(1);
    setError(null);
  }, [searchText]);

  const fetchImages = async (value, page) => {
    try {
      setIsLoading(true);
      const data = await API.getImages(value, page);

      if (data.hits.length === 0) {
        throw new Error(`No images found matching the search query "${value}"`);
      }

      setImages(prevImages =>
        page === 1 ? data.hits : [...prevImages, ...data.hits]
      );
      setTotal(data.totalHits);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreHandler = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = imageData => {
    setSelectedImage(imageData);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

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
            onClick={openModal}
          />
        ))}
      </ul>
      {isLoading && <Loader loading={isLoading} />}
      {images.length > 0 && total !== images.length && (
        <Button onClick={loadMoreHandler} />
      )}
      {showModal && selectedImage && (
        <Modal selectedImg={selectedImage} onEscapeKeydown={closeModal} />
      )}
    </>
  );
};

export default ImageGallery;
