import React, { Component } from 'react';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 0,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const KEY = '32394556-d2b9cb8d34e30816bca32634a';
    const { searchQuery } = this.props;

    if (prevProps.searchQuery !== searchQuery) {
      this.setState({ page: 1, loading: true });

      fetch(
        `https://pixabay.com/api/?q=${searchQuery}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(({ hits }) =>
          this.setState(prevState => {
            return { images: hits, page: prevState.page + 1 };
          })
        )
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  onLoadMoreBtn = () => {
    const KEY = '32394556-d2b9cb8d34e30816bca32634a';
    const { searchQuery } = this.props;
    const { page } = this.state;
    this.setState({ loading: true });

    fetch(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(({ hits }) =>
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...hits],
            page: prevState.page + 1,
          };
        })
      )
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { images, loading } = this.state;

    return (
      <>
        <Gallery>
          {images.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              tags={tags}
              largeImageURL={largeImageURL}
            />
          ))}
        </Gallery>
        {loading && <Loader />}
        {images.length > 0 && !loading && (
          <Button onClick={this.onLoadMoreBtn} />
        )}
      </>
    );
  }
}
