import propTypes from 'prop-types';
import { List } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images, toggleModal, openModalImg }) {
    return (
        <List>
            {images.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    smallImage={webformatURL}
                    largeImage={largeImageURL}
                    openModalImg={openModalImg}
                    toggleModal={toggleModal}
                />
            ))}
        </List>
    );
}
ImageGallery.propTypes = {
    images: propTypes.arrayOf(
        propTypes.exact({
            id: propTypes.number.isRequired,
            largeImageURL: propTypes.string.isRequired,
            webformatURL: propTypes.string.isRequired,
        })
    ).isRequired,
    toggleModal: propTypes.func.isRequired,
    openModalImg: propTypes.func.isRequired,
};
export default ImageGallery;
