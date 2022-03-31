import 'regenerator-runtime/runtime'
import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { DashboardEquipmentDetails } from './dashboard-equipment-details'

afterEach(cleanup)

const testHeader = {
  OEMName: 'CAT',
  model: 'M315F',
  serialNumber: 'ABC123456',
  snapshotTime: '2021-06-26T10:00:00Z'
}

describe('equipment header', () => {
  it('shows oem name', async () => {
    const container = render(<DashboardEquipmentDetails equipmentHeader={testHeader} />)
    const equipmentOEMName = await container.findByText('CAT')
    expect(equipmentOEMName).toBeTruthy()
  })

  it('shows model name', async () => {
    const container = render(<DashboardEquipmentDetails equipmentHeader={testHeader} />)
    const equipmentOEMName = await container.findByText('M315F')
    expect(equipmentOEMName).toBeTruthy()
  })

  it('shows serial number', async () => {
    const container = render(<DashboardEquipmentDetails equipmentHeader={testHeader} />)
    const equipmentOEMName = await container.findByText('ABC123456')
    expect(equipmentOEMName).toBeTruthy()
  })
})
