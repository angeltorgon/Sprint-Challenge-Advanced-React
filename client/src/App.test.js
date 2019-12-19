import React from 'react';
import * as rtl from 'react-testing-library'
import '@testing-library/jest-dom/extend-expect'
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
