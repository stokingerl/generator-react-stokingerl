import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { App } from '../index'


describe('src / app', () => {
  it('should match snapshot', () => {
    const app = render(<App />)
    expect(app.baseElement).toMatchSnapshot()
  })

  it('should render counter and button', () => {
    render(<App />)

    expect(screen.getByRole('heading')).toHaveTextContent('0')
    expect(screen.getByRole('button')).toHaveTextContent('press me')
  })

  it('should increment counter', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button'))

    expect(screen.getByRole('heading')).toHaveTextContent('1')
  })
})
