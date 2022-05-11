import propTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

function ImageGalleryItem({
    smallImage,
    largeImage,
    openModalImg,
    toggleModal,
}) {
    return (
        <Item>
            <Image
                src={smallImage}
                onClick={() => {
                    toggleModal();
                    openModalImg(largeImage);
                }}
            />
        </Item>
    );
}
ImageGalleryItem.propTypes = {
    smallImage: propTypes.string.isRequired,
    largeImage: propTypes.string.isRequired,
    toggleModal: propTypes.func.isRequired,
    openModalImg: propTypes.func.isRequired,
};
export default ImageGalleryItem;
