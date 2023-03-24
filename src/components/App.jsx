import React, { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { MainContainer } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  onSubmit = value => {
    this.setState({ searchQuery: value });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <MainContainer>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery searchQuery={searchQuery} />
      </MainContainer>
    );
  }
}
