// import { Component } from "react";
import { useState, useEffect } from "react";
import { fetchAPI } from "services/api";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "./Searchbar/Searcbar";
import ImageGallery from './ImageGallery/ImageGallery';
import Message from "./Message/Message";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import LoaderBallTriangle from "./Loader/Loader";
import * as Scroll from 'react-scroll';



export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [openModalImg, setOpenModalImg] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (query === '') {
      return;
    }

    const fetchImages = () => {
      setStatus('pending');
      fetchAPI(query, page)
        .then(res => {
          setImages(prevImages => [...prevImages, ...res]);
          setStatus('resolved');
        })
        .catch(error => {
          setError(error);
          console.log(error);
          setStatus('rejected');
        });
    };


    if (page === 1) {
      setImages([]);
      fetchImages();
    }
    else {
      fetchImages();
    }

  }, [page, query]);

  const onNextSearch = () => {
    Scroll.animateScroll.scrollMore(600);
    setPage(prevPage => prevPage + 1);
  };

  const handleFormSubmit = newQuery => {
    setQuery(newQuery);
    setPage(1);
  };

  const openModal = image => {
    setOpenModalImg(image);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };


  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {status === 'idle' && <Message text="Hello! What are you looking for?" />}
      {images.length > 0 && < ImageGallery images={images} toggleModal={toggleModal} openModalImg={openModal} />}
      {status === 'pending' && < LoaderBallTriangle />}
      {status === 'resolved' && < Button onClick={onNextSearch} />}
      {status === 'rejected' && <Message text={error.message} />}
      {showModal && < Modal onClose={toggleModal} largeImage={openModalImg} />}
      <ToastContainer />
    </>
  )
}

// export default class App extends Component {

//   state = {
//     query: '',
//     images: [],
//     page: 1,
//     error: null,
//     showModal: false,
//     openModalImg: null,
//     status: 'idle',

//   };

//   componentDidMount() {
//     this.setState({ images: [] })
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const prevQuery = prevState.query;
//     const currentQuery = this.state.query;
//     const prevPage = prevState.page;
//     const page = this.state.page;

//     if (prevQuery !== currentQuery || prevPage !== page) {
//       this.setState({
//         satus: 'pending'
//       })
//       if (page === 1) {
//         this.setState({ images: [] })
//       }
//       this.fetchImages();
//     }

//     // if (page > prevPage) {
//     //   this.fetchImages();
//     // };

//     scrollSmooth();
//   }

//   fetchImages = () => {
//     const { query, page, } = this.state;
//     this.setState({ status: 'pending' })

//     fetchAPI(query, page)
//       .then(res => {
//         this.setState(prevState => ({
//           images: [...prevState.images, ...res],
//           status: 'resolved',
//         }));
//       })
//       .catch(error => this.setState({ error, status: 'rejected' }));
//   };


//   // функция для поиска картинки по ключевому слову, попадает в пропс компоненту Searchbar
//   onSearchRequest = newQuery => {
//     if (this.state.query !== newQuery) {
//       this.setState({
//         query: newQuery,
//         page: 1,
//       });
//     }

//   }
//   // функция для увеличения значения страницы на 1, обработчик событя на кнопке LoadMore
//   onNextSearch = () => {
//     this.setState(prevState => ({
//       ...prevState,
//       page: prevState.page + 1
//     }));
//   }

//   openModalImg = image => {
//     this.setState({ openModalImg: image });
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal
//     }));
//   };


//   render() {
//     const {
//       showModal,
//       images,
//       status,
//       openModalImg,
//     } = this.state;


//     return (
//       <>
//         <Searchbar onSubmit={this.onSearchRequest} />

//         {status === 'idle' && <Message text="Hello! What are you looking for?" />}

//         {images.length > 0 && < ImageGallery
//           images={images}
//           toggleModal={this.toggleModal}
//           openModalImg={this.openModalImg} />}

//         {status === 'pending' && < LoaderBallTriangle />}

//         {status === 'resolved' && < Button onClick={this.onNextSearch} />}

//         {status === 'rejected' && <Message text="Something went wrong!" />}

//         {showModal && < Modal
//           onClose={this.toggleModal}
//           largeImage={openModalImg}
//         />}

//         <ToastContainer />
//       </>
//     );
//   }

// };
