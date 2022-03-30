import 'regenerator-runtime/runtime'
import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { DashboardHeader } from './dashboard-header'

afterEach(cleanup)

it('shows date', async () => {
  const container = render(<DashboardHeader snapshotTime='2021-06-26T10:00:00Z' />)
  const lastUpdated = await container.findByText('Last Updated: 6/26/2021, 5:00:00 AM')
  expect(lastUpdated).toBeTruthy()
})
