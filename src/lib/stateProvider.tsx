import React, { createContext, useState } from 'react'

export interface EquipmentHeader {
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

interface StateAPI {
  equipmentHeader: { data: EquipmentHeader, set: Function}
  location: { data: EquipmentLocation, set: Function}
  cumulativeIdleHours: { data: CumulativeIdleHours, set: Function}
  cumulativeOperatingHours: { data: CumulativeOperatingHours, set: Function}
  distance: { data: Distance, set: Function}
  engineStatus: { data: EngineStatus, set: Function}
  fuelUsed: { data: FuelUsed, set: Function}
  fuelRemaining: { data: FuelRemaining, set: Function}
}

type StateContext = StateAPI | null

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

export const stateContext = createContext<StateContext>(null)

export const StateProvider: React.FC<React.ReactNode> = (props: any) => {
  const [equipmentHeader, setEquipmentHeader] = useState(state.equipmentHeader)
  const [location, setLocation] = useState(state.location)
  const [cumulativeIdleHours, setCumulativeIdleHours] = useState(state.cumulativeIdleHours)
  const [cumulativeOperatingHours, setCumulativeIdleOperatingHours] = useState(state.cumulativeIdleHours)
  const [distance, setDistance] = useState(state.distance)
  const [engineStatus, setEngineStatus] = useState(state.engineStatus)
  const [fuelUsed, setFuelUsed] = useState(state.fuelUsed)
  const [fuelRemaining, setFuelRemaining] = useState(state.fuelRemaining)

  const data: StateAPI = {
    equipmentHeader: { data: equipmentHeader, set: setEquipmentHeader },
    location: { data: location, set: setLocation },
    cumulativeIdleHours: { data: cumulativeIdleHours, set: setCumulativeIdleHours },
    cumulativeOperatingHours: { data: cumulativeOperatingHours, set: setCumulativeIdleOperatingHours },
    distance: { data: distance, set: setDistance },
    engineStatus: { data: engineStatus, set: setEngineStatus },
    fuelUsed: { data: fuelUsed, set: setFuelUsed },
    fuelRemaining: { data: fuelRemaining, set: setFuelRemaining }
  }

  return (
    <stateContext.Provider value={data}>
      {props.children}
    </stateContext.Provider>
  )
}
