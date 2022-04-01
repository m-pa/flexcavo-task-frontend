import 'regenerator-runtime/runtime'
import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { IdleTime, idleRatio, ratioToPercent } from './dashboard-idle-time'

afterEach(cleanup)

const testIdleHours = {
  hour: 100
}

const testOperatingHours = {
  hour: 500
}

describe('idle ratio', () => {
  it('calculates correct ratio', () => {
    let ratio = idleRatio(1, 1)
    expect(ratio).toEqual(1)
    ratio = idleRatio(1, 3)
    expect(ratio).toEqual(3)
    ratio = idleRatio(2, 3)
    expect(ratio).toBeLessThan(3)
    ratio = idleRatio(1, 7)
    expect(ratio).toBeGreaterThan(3)
  })
})

describe('idle ratio to percent', () => {
  it('calculates correct ratio', () => {
    let ratio = idleRatio(1, 1)
    let percent = ratioToPercent(ratio)
    expect(percent).toEqual(50)
    ratio = idleRatio(1, 3)
    percent = ratioToPercent(ratio)
    expect(percent).toEqual(75)
    ratio = idleRatio(2, 3)
    percent = ratioToPercent(ratio)
    expect(percent).toEqual(60)
  })
})

describe('idle time component', () => {
  it('has a description', async () => {
    const container = render(<IdleTime idleHours={testIdleHours} operatingHours={testOperatingHours} />)
    const secondaryText = await container.findByText('Operating / Idling Ratio')
    expect(secondaryText).toBeTruthy()
  })

  it('has a progress bar', async () => {
    const container = render(<IdleTime idleHours={testIdleHours} operatingHours={testOperatingHours} />)
    const progress = await container.findByRole('progressbar')
    expect(progress).toBeTruthy()
  })

  it('opens a snackbar warning if ratio is < 3', async () => {
    const container = render(<IdleTime idleHours={{ hour: 100 }} operatingHours={{ hour: 100 }} />)
    const progress = await container.findByText('Warning: Equipment is idling a lot.')
    expect(progress).toBeTruthy()
  })
})
