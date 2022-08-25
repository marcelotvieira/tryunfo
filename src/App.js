import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'raro',
    cardTrunfo: false,
    deck: [],
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    isValidInput: false,
    onSaveButtonClick: () => {},
  };

  componentDidUpdate() {
    const isValid = this.validateSaveButton();
    const { isSaveButtonDisabled } = this.state;
    if (isSaveButtonDisabled !== isValid) {
      this.setState({
        isSaveButtonDisabled: isValid,
      });
    }
  }

  clearForm = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
    });
  };

  saveCard = () => {
    const handleProp = 'deck';
    const { state } = this;
    const target = state[handleProp];
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      deck,
    } = state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    target.push(card);
    this.setState({
      [handleProp]: target,
    });
    const trunfo = deck.some((currCard) => currCard.cardTrunfo === true);
    this.setState({ hasTrunfo: trunfo });
    this.clearForm();
  };

  checkEmpty = (values) => values.some((e) => e.length < 1);

  validateSaveButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
    } = this.state;

    const empty = this.checkEmpty([
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare]);
    if (empty) return true;
    return this.validadeAttr([cardAttr1, cardAttr2, cardAttr3]);
  };

  validadeAttr = (values) => {
    const maxAttr = 210;
    const max = 90;
    const min = 0;
    const notValid = values.some((e) => Number(e) > max || Number(e) < min);
    if (notValid) return true;
    const sum = values.reduce((acc, curr) => acc + Number(curr), 0);
    if (sum > maxAttr) return true;
  };

  checkUniqueInput = (e) => {
    const min = 0;
    const max = 90;
    const { name, value } = e.target;
    const { nextElementSibling: exclamation } = e.target;
    const { nextElementSibling: checked } = exclamation;
    const visible = 'visibility: visible';
    const hidden = 'visibility: hidden';
    if (name.includes('Attr')) {
      if (value !== '' && value > min && value < max) {
        exclamation.style = hidden;
        checked.style = visible;
      } else {
        exclamation.style = visible;
        checked.style = hidden;
      }
    } else {
      if (value !== '') {
        exclamation.style = hidden;
        checked.style = visible;
        return;
      }
      exclamation.style = visible;
      checked.style = hidden;
    }
  };

  onInputChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'cardTrunfo') return this.setState({ [name]: checked });
    return this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container">
        <div className="form-container">
          <h1>Adicionar nova carta</h1>
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            checkUniqueInput={ this.checkUniqueInput }
            onSaveButtonClick={ this.saveCard }
          />
        </div>
        <div className="preview-container">
          <h1>Pré-visualização</h1>
          <Card { ...this.state } />
        </div>

      </div>
    );
  }
}

export default App;
