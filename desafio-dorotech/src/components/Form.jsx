//import React, { useState } from 'react';
import './Form.css';

const Form = ({search, setSearch }) => {

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="searchText">Buscar:</label>
        <input
          type="text"
          id="searchText"
          name="searchText"
          value={search}
          onChange={handleInputChange}
          placeholder="Digite o nome"
        />
      </div>



      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;