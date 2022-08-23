import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form action="" className="card-form">
        <label
          htmlFor="name"
        >
          Nome
          <div className="input-box">
            <input
              placeholder="Type the name..."
              name="name"
              type="text"
              data-testid="name-input"
              className="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
            <span className="exclamation">!</span>
            <i className="fa-solid fa-circle-check" />
          </div>
        </label>

        <label htmlFor="description">
          Descrição
          <div className="input-box">
            <textarea
              value={ cardDescription }
              onChange={ onInputChange }
              placeholder="Type the card description..."
              name="description"
              cols="30"
              rows="4"
              data-testid="description-input"
              className="description-input"
            />
            <span className="exclamation">!</span>
            <i className="fa-solid fa-circle-check" />
          </div>
        </label>

        <label
          className="row-label"
          htmlFor="attr1"
        >
          Attr01
          <div className="input-box">
            <input
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="attr1"
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
          htmlFor="attr2"
        >
          Attr02
          <div className="input-box">
            <input
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="attr2"
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
          htmlFor="attr3"
        >
          Attr03
          <div className="input-box">
            <input
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="attr3"
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
          htmlFor="image"
        >
          Imagem
          <div className="input-box">
            <input
              value={ cardImage }
              onChange={ onInputChange }
              name="image"
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
            name="rarity"
            id="rarity"
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="super">
          <input
            name="super"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trybe Trunfo
        </label>
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

Form.defaultProps = {
  cardDescription: '',
};
