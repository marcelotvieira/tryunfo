import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const {
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      checkUniqueInput,
      hasTrunfo,
    } = this.props;

    const checkBoxTrunfo = (
      <label htmlFor="cardTrunfo">
        <input
          name="cardTrunfo"
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        Super Trybe Trunfo
      </label>);

    const hasTrunfoWarn = (
      <p>Você já tem um Super Trunfo em seu baralho</p>
    );

    return (
      <form action="" className="card-form">
        <label
          htmlFor="cardName"
        >
          Nome
          <div className="input-box">
            <input
              placeholder="Type the name..."
              name="cardName"
              type="text"
              data-testid="name-input"
              className="name-input"
              value={ cardName }
              onChange={ onInputChange }
              onBlur={ checkUniqueInput }
            />
            <span className="exclamation">!</span>
            <i className="fa-solid fa-circle-check" />
          </div>
        </label>

        <label htmlFor="cardDescription">
          Descrição
          <div className="input-box">
            <textarea
              maxLength={ 90 }
              value={ cardDescription }
              onChange={ onInputChange }
              placeholder="Type the card description..."
              name="cardDescription"
              cols="30"
              rows="4"
              data-testid="description-input"
              className="description-input"
            />
          </div>
        </label>

        <label
          className="row-label"
          htmlFor="cardAttr1"
        >
          Attr01
          <div className="input-box">
            <input
              value={ cardAttr1 }
              onChange={ onInputChange }
              onBlur={ checkUniqueInput }
              name="cardAttr1"
              type="number"
              data-testid="attr1-input"
              className="attr1-input"
            />
            <span className="exclamation">!</span>
            <i className="fa-solid fa-circle-check" />
          </div>
        </label>

        <label
          className="row-label"
          htmlFor="cardAttr2"
        >
          Attr02
          <div className="input-box">
            <input
              value={ cardAttr2 }
              onChange={ onInputChange }
              onBlur={ checkUniqueInput }
              name="cardAttr2"
              type="number"
              data-testid="attr2-input"
              className="attr2-input"
            />
            <span className="exclamation">!</span>
            <i className="fa-solid fa-circle-check" />
          </div>
        </label>

        <label
          className="row-label"
          htmlFor="cardAttr3"
        >
          Attr03
          <div className="input-box">
            <input
              value={ cardAttr3 }
              onChange={ onInputChange }
              onBlur={ checkUniqueInput }
              name="cardAttr3"
              type="number"
              data-testid="attr3-input"
              className="attr3-input"
            />
            <span className="exclamation">!</span>
            <i className="fa-solid fa-circle-check" />
          </div>
        </label>

        <label
          className="row-label"
          htmlFor="cardImage"
        >
          Imagem
          <div className="input-box">
            <input
              value={ cardImage }
              onChange={ onInputChange }
              onBlur={ checkUniqueInput }
              name="cardImage"
              type="text"
              data-testid="image-input"
            />
            <span className="exclamation">!</span>
            <i className="fa-solid fa-circle-check" />
          </div>
        </label>

        <label htmlFor="rarity">
          Raridade
          <select
            value={ cardRare }
            onChange={ onInputChange }
            name="cardRare"
            id="rarity"
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <br />
        {!hasTrunfo
          ? checkBoxTrunfo : hasTrunfoWarn}
        <br />

        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool,
  checkUniqueInput: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

Form.defaultProps = {
  cardDescription: '',
  isSaveButtonDisabled: false,

};
