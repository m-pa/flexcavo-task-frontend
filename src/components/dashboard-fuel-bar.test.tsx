import 'regenerator-runtime/runtime'
import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { FuelBar } from './dashboard-fuel-bar'

afterEach(cleanup)

const testFuelStatus = {
  percent: 50
}

describe('equipment header', () => {
  it('has a description', async () => {
    const container = render(<FuelBar fuelStatus={testFuelStatus} />)
    const secondaryText = await container.findByText('Fuel Remaining')
    expect(secondaryText).toBeTruthy()
  })

  it('has a progress bar', async () => {
    const container = render(<FuelBar fuelStatus={testFuelStatus} />)
    const progress = await container.findByRole('progressbar')
    expect(progress).toBeTruthy()
  })
})
