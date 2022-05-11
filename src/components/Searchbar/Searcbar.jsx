import propTypes from 'prop-types';
import { toast } from 'react-toastify';

// import { Component } from 'react';
import { useState } from 'react';
import { Header, Form, Button, SearchSvg, Input } from './Searchbar.styled';

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Your request is not correct.');
      return;
    }
    onSubmit(query);
    resetForm();
  };

  const resetForm = () => {
    setQuery('');
  };

  const onChangeQuery = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  return (
    <Header>
      <Form onSubmit={onFormSubmit}>
        <Button type="submit">
          <span>
            <SearchSvg />
          </span>
        </Button>
        <Input
          type="text"
          name="query"
          value={query}
          onChange={onChangeQuery}
        ></Input>
      </Form>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default Searchbar;

// class Searchbar extends Component {
//   static propTypes = {
//     onSubmit: propTypes.func,
//   };

//   state = {
//     query: '',
//   };

//   onChangeQuery = event => {
//     this.setState({ query: event.currentTarget.value.toLowerCase() });
//   };

//   onResetForm = () => {
//     this.setState({ query: '', })
//   }

//   onFormSubmit = event => {
//     event.preventDefault();

//     // const { query } = this.state;
//     if (this.state.query.trim() === '') {
//       toast.error('Your request is not correct.');
//       return;
//     };

//     this.props.onSubmit(this.state.query);
//     console.log("onFormSubmit: ", this.state.query);

//     this.onResetForm();    // this.setState({ query: '', })

//   }
//   render() {
//     return (
//       <Header>
//         <Form onSubmit={this.onFormSubmit}>
//           <Button type="submit">
//             <span>
//               <SearchSvg />
//             </span>
//           </Button>
//           <Input
//             type='text'
//             name='query'
//             value={this.state.query}
//             onChange={this.onChangeQuery}></Input>
//         </Form>
//       </Header >
//     );
//   }
// }
