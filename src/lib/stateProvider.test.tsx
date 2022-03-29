import 'regenerator-runtime/runtime'
import { StateProvider } from './stateProvider'

const expected = { cumulativeIdleHours: { hour: 1060 }, cumulativeOperatingHours: { hour: 3469.4 }, distance: { odometer: 2702.4, odometerUnits: 'kilometre' }, engineStatus: { running: false }, equipmentHeader: { OEMName: 'CAT', model: 'M315F', serialNumber: 'ABC123456', snapshotTime: '2021-06-26T10:00:00Z' }, fuelRemaining: { percent: 39 }, fuelUsed: { fuelConsumed: 24096, fuelUnits: 'litre' }, location: { altitude: 70, altitudeUnits: 'metre', latitude: 52.52, longitude: 13.405 } }

describe('stateProvider', () => {
  it('exports a stateProvider', () => {
    const provider = StateProvider({ children: [] })
    expect(provider?.type.$$typeof.toString()).toEqual('Symbol(react.provider)')
  })

  it('has equipmentHeader as value', () => {
    const provider = StateProvider({ children: [] })
    expect(provider?.props.value).toStrictEqual(expected)
  })
})
