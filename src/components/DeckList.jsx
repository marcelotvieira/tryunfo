import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class DeckList extends Component {
  render() {
    const currKey = Math.random() * 2;
    let { deck } = this.props;
    const { filtered, filteredDeck, onFilter, removeFromDeck } = this.props;
    if (filtered) deck = filteredDeck;
    const cardEls = deck.map((card, index) => (
      <div key={ index } className="card-box">
        <Card key={ currKey } { ...card } />
        <button
          name={ card.cardDescription }
          type="button"
          onClick={ removeFromDeck }
          data-testid="delete-button"
        >
          Excluir
        </button>
      </div>));
    return (
      <div className="deck-container">
        <div className="filter">
          <p> Filtro de Busca </p>
          <input
            onChange={ onFilter }
            placeholder="Nome da carta"
            data-testid="name-filter"
            name="filter"
            type="text"
          />
        </div>
        <div className="deck">
          { cardEls }
        </div>
      </div>
    );
  }
}

DeckList.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })),
  filteredDeck: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })),
  filtered: PropTypes.bool.isRequired,
  onFilter: PropTypes.func.isRequired,
  removeFromDeck: PropTypes.func.isRequired,
};

DeckList.defaultProps = {
  deck: [],
  filteredDeck: [],
};
