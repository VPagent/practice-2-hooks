import { useState } from 'react';

export function SearchForm({ handleSubmit }) {
  const [value, setValue] = useState('');

  const handlerInput = event => {
    setValue(event.target.value);
  };

  const formSubmit = event => {
    event.preventDefault();
    handleSubmit(this.state.value);
  };

  return (
    <form action="" onSubmit={formSubmit}>
      <label htmlFor="">
        Уведіть ім'я персонажа
        <input type="text" value={value} onChange={handlerInput} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}
