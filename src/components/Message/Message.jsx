import propTypes from 'prop-types';
import { Text } from './Message.styled';

function Message({ message }) {
    return (
        <Text>{message}</Text>
    )
}

Message.propTypes = {
    message: propTypes.string.isRequired,
}
export default Message;