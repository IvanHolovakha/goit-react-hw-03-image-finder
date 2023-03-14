import React, {Component} from "react";

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
// import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";

export class App extends Component {
  state = {
    // status: 'idle',
    searchQuery: '',
    // images: [],
    // page: 0
  }

  onSubmit = (value) => {
    // this.setState({status: 'pending', searchQuery: value});
    this.setState({searchQuery: value});
  }

  render () {
    const {searchQuery, status, page} = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit}/>
        <ImageGallery searchQuery={searchQuery}/>
        {/* {status === 'resolved' && <Button onClick={this.onLoadMoreBtn}/>} */}
        {/* {status === 'pending' && <Loader/>} */}
      </div>
    );
  }
};
