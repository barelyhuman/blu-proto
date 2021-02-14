import React from 'react';
import { render } from 'react-dom';
import Home from './components/home';

function App() {
  return (
    <>
      <Home />
      <style>
        {`
        body{
          -webkit-app-region: drag
        }
        `}
      </style>
    </>
  );
}

render(<App />, document.getElementById('app'));
