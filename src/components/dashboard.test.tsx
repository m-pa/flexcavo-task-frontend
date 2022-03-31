import 'regenerator-runtime/runtime'
import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { Dashboard } from './dashboard'
import { StateProvider } from '../lib/stateProvider'

afterEach(cleanup)

const withProvider = (Dashboard: any) => (props: any) => (
  <StateProvider><Dashboard /></StateProvider>
)

describe('Dashboard', () => {
  it('exports a component', () => {
    expect(Dashboard).not.toBeUndefined()
    expect(Dashboard).toBeInstanceOf(Function)
  })

  it('has a header', async () => {
    const DashboardWithProvider = withProvider(Dashboard)
    const container = render(<DashboardWithProvider />)
    const heading = await container.findByText('Dashboard')
    expect(heading).toBeTruthy()
  })

  it('has equipment details', async () => {
    const DashboardWithProvider = withProvider(Dashboard)
    const container = render(<DashboardWithProvider />)
    const heading = await container.findByText('Manufacturer')
    expect(heading).toBeTruthy()
  })
})
