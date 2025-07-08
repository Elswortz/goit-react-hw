import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeydownHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeydownHandler);
  }

  onKeydownHandler = e => {
    if (e.code === 'Escape') {
      this.props.onEscapeKeydown();
    }
  };

  onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onEscapeKeydown();
    }
  };

  render() {
    const { selectedImg } = this.props;
    const { largeImgURL, alt } = selectedImg;

    return (
      <div className={css.backdrop} onClick={this.onBackdropClick}>
        <div className={css.modal}>
          <img className={css.img} src={largeImgURL} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
