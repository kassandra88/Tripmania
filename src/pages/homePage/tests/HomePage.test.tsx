import { render, screen } from '@testing-library/react'

import { AllTheProviders } from 'shared/tests/providers'
import HomePage from '..'

test('renders HomePage', () => {
  render(<AllTheProviders component={<HomePage />} />)
  const linkElement = screen.getByText(/logout/i)
  expect(linkElement).toBeInTheDocument()
})
