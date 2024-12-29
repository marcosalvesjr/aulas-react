//import React, { useState } from 'react';
import './Form.css';

const Form = ({ search, setSearch, setPageNumber }) => {

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPageNumber(1)
  };


  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className='form-group'>
          <span>Buscar: </span>
          <input
            type="text"
            id="searchText"
            name="searchText"
            value={search}
            onChange={handleInputChange}
            placeholder="Digite o nome"
          />

        </label>

      </div>


      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;