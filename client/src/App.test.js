import React from 'react';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const wrapper = rtl.render(
    <App />
  )
  console.log(wrapper.debug())
});
