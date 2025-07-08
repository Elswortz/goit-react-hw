import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ src, alt, largeImgURL, onClick }) {
  return (
    <li
      className={css.galleryItem}
      onClick={() => onClick({ largeImgURL, alt })}
    >
      <img className={css.img} src={src} alt={alt} width="250" height="250" />
    </li>
  );
}

export default ImageGalleryItem;
