import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// eslint-disable-next-line
let renderFirst = [
  <div>
    App is working !
    <button>Button 1</button>
    {React.createElement('button', {
      onClick: () => console.log('Click')
    }, 'Button 2')}
  </div>,

  React.createElement('button', {
    onClick: () => console.log('Click')
  }, 'Button 3')
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // renderFirst
  <App />
);
