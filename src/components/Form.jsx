import React, { Component } from 'react';

export default class Form extends Component {
  render() {
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
            />
            <span className="exclamation">!</span>
            <i className="fa-solid fa-circle-check" />
          </div>
        </label>
        <label htmlFor="description">
          Descrição
          <div className="input-box">
            <textarea
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
          <select name="rarity" id="rarity" data-testid="rare-input">
            <option value="default" selected disabled>Select the rarity...</option>
            <option value="normal">normal</option>
            <option value="normal">raro</option>
            <option value="normal">muito raro</option>
          </select>
        </label>
        <label htmlFor="super">
          <input name="super" type="checkbox" data-testid="tryunfo-input" />
          Super Trybe Trunfo
        </label>
        <br />
        <button type="button" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}
