import mockAxios from 'jest-mock-axios'
import { render, screen } from '@testing-library/react'

import { AllTheProviders } from 'shared/tests/providers'
import HomePage from '..'

afterEach(() => {
  mockAxios.reset()
})

test('renders HomePage', () => {
  render(<AllTheProviders component={<HomePage />} />)
  const linkElement = screen.getByText(/logout/i)
  expect(linkElement).toBeInTheDocument()
})
