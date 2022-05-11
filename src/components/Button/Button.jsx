import propTypes from 'prop-types';
import { BtnLoadMore } from './Button.styled';
function Button({ onClick }) {
    return <BtnLoadMore onClick={onClick}>Load More</BtnLoadMore>;
}

Button.propTypes = {
    onClick: propTypes.func.isRequired,
};
export default Button;
