import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// context provider
import CharacterIdProvider from './components/Context';

ReactDOM.render(
  <React.StrictMode>
    <CharacterIdProvider>
      <App />
    </CharacterIdProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
