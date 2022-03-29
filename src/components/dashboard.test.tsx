import 'regenerator-runtime/runtime'
import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { Dashboard } from './dashboard'

afterEach(cleanup)

describe('Dashboard', () => {
  it('exports a component', () => {
    expect(Dashboard).not.toBeUndefined()
    expect(Dashboard).toBeInstanceOf(Function)
  })

  it('has a container', async () => {
    const container = render(<Dashboard />)
    const heading = await container.findByText('Dashboard')
    expect(heading).toBeTruthy()
  })
})
