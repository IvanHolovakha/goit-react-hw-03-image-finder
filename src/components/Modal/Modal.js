import React, { Component } from 'react';
import { Overlay, ModalImage } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#root-modal');

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onEscape);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscape);
  }

  onEscape = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  // onOverlay = e => {
  //   console.log('click backdrop');
  //   if (e.currentTarget === e.target) {
  //     this.props.toggleModal();
  //     console.log('click on backdrop');
  //   }
  // };

  render() {
    const { largeImageURL, tags } = this.props;
    return createPortal(
      <Overlay>
        <ModalImage>
          <img src={largeImageURL} alt={tags} />
        </ModalImage>
      </Overlay>,
      modalRoot
    );
  }
}
