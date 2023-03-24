import React, { Component } from 'react';

import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  onInputChange = evt => {
    this.setState({ value: evt.target.value });
  };

  onFormSubmit = evt => {
    evt.preventDefault();

    if (this.state.value.trim() === '') {
      return;
    }

    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.onFormSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onInputChange}
            value={this.state.value}
          />
        </SearchForm>
      </Header>
    );
  }
}
