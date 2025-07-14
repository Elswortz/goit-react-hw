import { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ selectedImg, onEscapeKeydown }) => {
  useEffect(() => {
    window.addEventListener('keydown', onKeydownHandler);

    return () => {
      window.removeEventListener('keydown', onKeydownHandler);
    };
  }, []);

  const onKeydownHandler = e => {
    if (e.code === 'Escape') {
      onEscapeKeydown();
    }
  };

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onEscapeKeydown();
    }
  };

  const { largeImgURL, alt } = selectedImg;

  return (
    <div className={css.backdrop} onClick={onBackdropClick}>
      <div className={css.modal}>
        <img className={css.img} src={largeImgURL} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
