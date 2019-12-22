import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import PlayerCard from './components/PlayerCard'
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup)

it('should render \'players\' on screen', () => {
  const { getByText } = render(<App />)

  const element = getByText(/players/i)
  expect(element).toBeInTheDocument()
  expect(element).toBeTruthy()

})

it('render name', () => {
  const { getByText } = render(<PlayerCard player={{name:"John", country:"US"}}/>)

  const element = getByText(/name/i)
  expect(element).toBeInTheDocument()
  expect(element).toBeTruthy()

})

it('matches snapshot', () => {
  const tree = renderer.create(<PlayerCard player={{name:"john", country:"MEX"}}/>).toJSON()

  expect(tree).toMatchSnapshot()
})