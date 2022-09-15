import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ModalHero } from './ModalHero/ModalHero';
import { SearchForm } from './SearchForm/SearchForm';
import { DefaultList } from './DefaultList/DefaultList';
import {requesterAPI} from '../API/API'

function App() {
  const [request, setRequest] = useState('');
  const [isModalValue, setIsModalValue] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [hero, setHero] = useState(null);
  
  useEffect(() => {
   
    requesterAPI(request)
    .then(res => (setCharacters(res.results)))
    .catch(err => alert(err))
  }, [request]);


  const handleClose = () => {
    setIsModalValue(false);
  };
  const handleShow = name => {
    setIsModalValue(true);
    requesterAPI(name)
    .then(res => (setHero(res.results[0])))
    .catch(err => alert(err))
  };

  const handleSubmit = value => {
    setRequest(value);
  };

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      <DefaultList array={characters} handleShow={handleShow} />
      <ModalHero
        handleClose={handleClose}
        handleShow={handleShow}
        show={isModalValue}
        hero={hero}
      />
    </>
  );
}

export default App;
