import propTypes from 'prop-types';
import { Backdrop, ModalWindow, Img } from './Modal.styled';
import { useEffect } from 'react';
// import { Component } from "react";
// import { createPortal } from 'react-dom';
// const modal = document.getElementById('modal-root');

function Modal({ onClose, largeImage }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleClickBackdrop}>
      <ModalWindow>
        <Img src={largeImage} loading="lazy" />
      </ModalWindow>
    </Backdrop>
  );
}

Modal.propTypes = {
  onClose: propTypes.func.isRequired,
  largeImage: propTypes.string.isRequired,
};

export default Modal;

// class Modal extends Component {
//   static propTypes = {
//     onClose: propTypes.func.isRequired,
//     largeImage: propTypes.string.isRequired,
//   };
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }
//   handleClickBackdrop = event => {
//     if (event.target === event.currentTarget) {
//       this.props.onClose();
//     }
//   };
//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   render() {

//     // return createPortal(
//     return (

//       < Backdrop onClick={this.handleClickBackdrop} >
//         <ModalWindow>
//           <Img
//             src={this.props.largeImage}
//             loading="lazy" />
//         </ModalWindow >
//       </Backdrop >
//       // , modal
//     );
//   }
// }
// export default Modal;
