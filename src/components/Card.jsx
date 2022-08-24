import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
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
    } = this.props;

    return (
      <div className="card">

        <div className="card-border">
          <p className="name-card" data-testid="name-card">
            { cardName }
          </p>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          { cardTrunfo
            ? <p className="super-trunfo" data-testid="trunfo-card">Super Trunfo</p>
            : null }
          <p className="description-card" data-testid="description-card">
            { cardDescription }
          </p>
          <div className="attr-container">
            <p className="attr" data-testid="attr1-card">
              <span>Attr01. . . . . . . . . . . . . . . . . . . . . </span>
              <span className="attr-value">{ cardAttr1 }</span>
            </p>
            <p className="attr" data-testid="attr2-card">
              <span>Attr02. . . . . . . . . . . . . . . . . . . . . </span>
              <span className="attr-value">{ cardAttr2 }</span>
            </p>
            <p className="attr" data-testid="attr3-card">
              <span>Attr03. . . . . . . . . . . . . . . . . . . . . </span>
              <span className="attr-value">{ cardAttr3 }</span>
            </p>
            <p className="attr" data-testid="rare-card">
              { cardRare }
            </p>
          </div>
        </div>

      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

Card.defaultProps = {
  cardDescription: '',
};
