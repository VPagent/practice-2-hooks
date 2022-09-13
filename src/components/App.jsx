import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ModalHero } from './ModalHero/ModalHero';
import { SearchForm } from './SearchForm/SearchForm';
import { DefaultList } from './DefaultList/DefaultList'


class App extends Component {
  state = {
    request: '',
    isModalShow: false,
    characters: [],
    hero: null,
  };

  componentDidUpdate(prevProps , prevState) {
    if (prevState.request !== this.state.request) {
      this.requesterAPI(this.state.request)
        .then(resp => this.setState({ characters: resp.results }))
        .catch(err => alert(err));
    }

  };

  requesterAPI = (name) => {
    return fetch(`https://swapi.py4e.com/api/people/?search=${name}`)
      .then(resp => resp.json())
  };

  handleClose = () => {
    this.setState({isModalShow: false})
  };
  handleShow = (name) => {
    this.setState({ isModalShow: true })
    this.requesterAPI(name)
      .then(resp => this.setState({ hero: resp.results[0] }))
      .catch(err => alert(err));
  };

  handleSubmit = (value) => {
    this.setState({request: value})
  }

  render() {
    const { handleClose, handleShow, handleSubmit, state } = this;
    const { isModalShow, characters, hero } = state;
    return (
      <>
        <SearchForm handleSubmit={handleSubmit} />
        <DefaultList array={characters} handleShow={handleShow} />
        <ModalHero handleClose={handleClose} handleShow={handleShow} show={isModalShow} hero={hero} />
      </>
    );
  };
};

export default App;