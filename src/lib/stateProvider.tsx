import React, { createContext } from 'react'

interface EquipmentHeader {
  OEMName: string
  model: string
  serialNumber: string
  snapshotTime: string
}

interface EquipmentLocation {
  latitude: number
  longitude: number
  altitude: number
  altitudeUnits: string
}

interface CumulativeIdleHours {
  hour: number
}

interface CumulativeOperatingHours {
  hour: number
}

interface Distance {
  odometerUnits: string
  odometer: number
}

interface EngineStatus {
  running: boolean
}

interface FuelUsed {
  fuelUnits: string
  fuelConsumed: number
}

interface FuelRemaining {
  percent: number
}

interface EquipmentState {
  equipmentHeader: EquipmentHeader
  location: EquipmentLocation
  cumulativeIdleHours: CumulativeIdleHours
  cumulativeOperatingHours: CumulativeOperatingHours
  distance: Distance
  engineStatus: EngineStatus
  fuelUsed: FuelUsed
  fuelRemaining: FuelRemaining
}

const state: EquipmentState = {
  equipmentHeader: {
    OEMName: 'CAT',
    model: 'M315F',
    serialNumber: 'ABC123456',
    snapshotTime: '2021-06-26T10:00:00Z'
  },
  location: {
    latitude: 52.5200,
    longitude: 13.4050,
    altitude: 70,
    altitudeUnits: 'metre'
  },
  cumulativeIdleHours: {
    hour: 1060
  },
  cumulativeOperatingHours: {
    hour: 3469.4
  },
  distance: {
    odometerUnits: 'kilometre',
    odometer: 2702.4
  },
  engineStatus: {
    running: false
  },
  fuelUsed: {
    fuelUnits: 'litre',
    fuelConsumed: 24096
  },
  fuelRemaining: {
    percent: 39
  }
}

const stateContext = createContext(state)

export const StateProvider: React.FC<React.ReactNode> = (props) => {
  return (
    <stateContext.Provider value={state}>
      {props.children}
    </stateContext.Provider>
  )
}
