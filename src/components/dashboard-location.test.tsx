import 'regenerator-runtime/runtime'
import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { Location } from './dashboard-location'
import { EquipmentLocation } from '../lib/stateProvider'

afterEach(cleanup)

const testLocation: EquipmentLocation = {
  latitude: 52.5200,
  longitude: 13.4050,
  altitude: 70,
  altitudeUnits: 'metre'
}

describe('location', () => {
  it('shows location', async () => {
    const container = render(<Location location={testLocation} />)
    const lastUpdated = await container.findByText('Mitte, DE')
    expect(lastUpdated).toBeTruthy()
  })
})
