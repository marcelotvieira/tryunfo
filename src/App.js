import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="form-container">
          <h1>Adicionar nova carta</h1>
          <Form />
        </div>
        <div className="preview-container">
          <h1>Pré-visualização</h1>
        </div>

      </div>
    );
  }
}

export default App;
