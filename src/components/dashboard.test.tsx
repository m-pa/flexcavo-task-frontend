import 'regenerator-runtime/runtime'
import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { Dashboard } from './dashboard'
import { StateProvider } from '../lib/stateProvider'

afterEach(cleanup)

const withProvider = (Dashboard: any) => () => (
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
    const element = await container.findByText('Dashboard')
    expect(element).toBeTruthy()
  })

  it('has equipment details', async () => {
    const DashboardWithProvider = withProvider(Dashboard)
    const container = render(<DashboardWithProvider />)
    const element = await container.findByText('Manufacturer')
    expect(element).toBeTruthy()
  })

  it('has fuel bar', async () => {
    const DashboardWithProvider = withProvider(Dashboard)
    const container = render(<DashboardWithProvider />)
    const element = await container.findByText('Fuel Remaining')
    expect(element).toBeTruthy()
  })

  it('shows fuel used', async () => {
    const DashboardWithProvider = withProvider(Dashboard)
    const container = render(<DashboardWithProvider />)
    const element = await container.findByText('24096 l')
    expect(element).toBeTruthy()
  })

  it('shows cumulative operating hours', async () => {
    const DashboardWithProvider = withProvider(Dashboard)
    const container = render(<DashboardWithProvider />)
    const element = await container.findByText('Cumulative Hours Operating')
    expect(element).toBeTruthy()
    const elements = await container.findAllByText('1060 h')
    expect(elements).toHaveLength(2)
  })

  it('shows cumulative idle hours', async () => {
    const DashboardWithProvider = withProvider(Dashboard)
    const container = render(<DashboardWithProvider />)
    const element = await container.findByText('Cumulative Hours Idling')
    expect(element).toBeTruthy()
    const elements = await container.findAllByText('1060 h')
    expect(elements).toHaveLength(2)
  })

  it('has idle time indicator', async () => {
    const DashboardWithProvider = withProvider(Dashboard)
    const container = render(<DashboardWithProvider />)
    const element = await container.findByText('Operating / Idling Ratio')
    expect(element).toBeTruthy()
  })

  it('shows engine status', async () => {
    const DashboardWithProvider = withProvider(Dashboard)
    const container = render(<DashboardWithProvider />)
    const element = await container.findByText('not running')
    expect(element).toBeTruthy()
  })

  it('shows odometer status', async () => {
    const DashboardWithProvider = withProvider(Dashboard)
    const container = render(<DashboardWithProvider />)
    const element = await container.findByText('2702.4 km')
    expect(element).toBeTruthy()
  })

  it('shows Equipment Location', async () => {
    const DashboardWithProvider = withProvider(Dashboard)
    const container = render(<DashboardWithProvider />)
    const element = await container.findByText('Mitte, DE')
    expect(element).toBeTruthy()
  })
})
