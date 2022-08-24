import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: 'Nome da carta',
    cardDescription: 'Entre com a descrição da carta',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'raro',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: false,
    onSaveButtonClick: () => { },
  };

  onInputChange = (e) => {
    const { name } = e.target;
    const { value, checked } = e.target;
    this.setState((state) => {
      if (name === 'cardTrunfo') {
        state[name] = checked;
        return {
          state,
        };
      }
      state[name] = value;
      return {
        state,
      };
    });
  };

  render() {
    return (
      <div className="container">
        <div className="form-container">
          <h1>Adicionar nova carta</h1>
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
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
