import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    searchText: '',
    status: {
      vivo: false,
      morto: false,
      desconhecido: false,
    },
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, searchText: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      status: { ...formData.status, [name]: checked },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData); // Para fins de teste
    alert(`Buscando: ${formData.searchText}\nStatus: ${JSON.stringify(formData.status)}`);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="searchText">Buscar:</label>
        <input
          type="text"
          id="searchText"
          name="searchText"
          value={formData.searchText}
          onChange={handleInputChange}
          placeholder="Digite o nome"
        />
      </div>

      <div className="form-group">
        <label>Status:</label>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="vivo"
              checked={formData.status.vivo}
              onChange={handleCheckboxChange}
            />
            Vivo
          </label>
          <label>
            <input
              type="checkbox"
              name="morto"
              checked={formData.status.morto}
              onChange={handleCheckboxChange}
            />
            Morto
          </label>
          <label>
            <input
              type="checkbox"
              name="desconhecido"
              checked={formData.status.desconhecido}
              onChange={handleCheckboxChange}
            />
            Desconhecido
          </label>
        </div>
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;