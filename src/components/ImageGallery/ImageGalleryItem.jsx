import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ src, alt }) {
  return (
    <img className={css.img} src={src} alt={alt} width="250" height="250" />
  );
}

export default ImageGalleryItem;
