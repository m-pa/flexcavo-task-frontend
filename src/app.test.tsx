import 'regenerator-runtime/runtime'
import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { App } from './app'

afterEach(cleanup)

describe('App', () => {
  it('exports a component', () => {
    expect(App).not.toBeUndefined()
    expect(App).toBeInstanceOf(Function)
  })

  it('has a dashboard container', async () => {
    const container = render(<App />)
    const heading = await container.findByText('Dashboard')
    expect(heading).toBeTruthy()
  })
})
