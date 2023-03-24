import React, { Component } from 'react';
import { GaleryItem, GaleryImage } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalActive: false,
  };

  toggleModal = () => {
    this.setState(prevState => {
      return { isModalActive: !prevState.isModalActive };
    });
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;

    return (
      <GaleryItem onClick={() => this.toggleModal()}>
        <GaleryImage src={webformatURL} alt={tags} />
        {this.state.isModalActive && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            toggleModal={this.toggleModal}
          />
        )}
      </GaleryItem>
    );
  }
}
