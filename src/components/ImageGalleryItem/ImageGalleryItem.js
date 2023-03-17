import { GaleryItem, GaleryImage } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ webformatURL, tags }) => {
    return (
        <GaleryItem>
            <GaleryImage src={webformatURL} alt={tags} />
        </GaleryItem>
    );
}