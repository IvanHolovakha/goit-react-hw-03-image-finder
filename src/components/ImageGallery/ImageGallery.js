import React, { Component } from "react"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { Button } from "components/Button/Button";

export class ImageGallery extends Component {
    state = {
        images: [],
        page: 0
    }

    componentDidUpdate (prevProps, prevState) {
        
        // console.log(this.state.page)
        const KEY = '32394556-d2b9cb8d34e30816bca32634a';
        const {searchQuery} = this.props;
        // const {page} = this.state; 

        if (prevProps.searchQuery !== searchQuery) {
            this.setState({page: 1});
            // console.log(this.state.page);
            setTimeout(() => {
                fetch(`https://pixabay.com/api/?q=${searchQuery}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(response => response.json())
            .then(({hits}) => this.setState(prevState => {return {images: hits, page: prevState.page + 1}}))}, 2000)
        }
    }

    onLoadMoreBtn = () => {
        const KEY = '32394556-d2b9cb8d34e30816bca32634a';
        const {searchQuery} = this.props;
        const {page} = this.state;
        // this.setState({status: 'pending'});
      
        setTimeout(() => {
          fetch(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.json())
        .then(({hits}) => this.setState(prevState => {return {images: [...prevState.images, ...hits], page: prevState.page + 1}}));
        }, 2000)
      }

    render() {
        const {images} = this.state;

        return <ul>
            {images.map(({id, webformatURL}) =>
            <ImageGalleryItem key={id} webformatURL={webformatURL}/>)}
            {images.length > 0 && <Button onClick={this.onLoadMoreBtn}/>}
            </ul>
}
// console.log(props);
// const KEY = '32394556-d2b9cb8d34e30816bca32634a';
// const {searchQuery} = this.state;
// this.setState({status: 'pending', searchQuery: value});
// console.log(this.state.page);
// setTimeout(() => {
// fetch(`https://pixabay.com/api/?q=${searchQuery}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
// .then(response => response.json())
// .then(({hits}) => this.setState({images: hits, status: 'resolved'}));
// }, 2000)
// this.setState({searchQuery: value, page: 1})

    // return <ul>
    //     {images.map(({id, webformatURL}) =>
    //     <ImageGalleryItem key={id} webformatURL={webformatURL}/>)}
    //     </ul>
}