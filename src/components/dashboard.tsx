import React, { useContext } from 'react'
import { Container, Grid, makeStyles, Divider } from '@material-ui/core'
import { ListItem, theme } from '@flexcavo/ui-kit'
import { stateContext } from '../lib/stateProvider'
import { DashboardHeader } from './dashboard-header'
import { DashboardEquipmentDetails } from './dashboard-equipment-details'
import { FuelBar } from './dashboard-fuel-bar'
import { Location } from './dashboard-location'
import { IdleTime } from './dashboard-idle-time'

const useStyles = makeStyles({
  dashboard: {
    margin: '200px 0',
    padding: '70px',
    background: '#fff',
    borderRadius: theme.shape.borderRadius,
    border: '2px solid #eee',
    maxWidth: '800px'
  },
  item: {
    minWidth: '300px'
  },
  container: {
    marginTop: '70px'
  }
})

export const Dashboard = (): JSX.Element => {
  const { dashboard, item, container } = useStyles()
  const state = useContext(stateContext)

  return state === null
    ? (
      <Container className={dashboard}>
        loading...
      </Container>
      )
    : (
      <Container className={dashboard}>
        <DashboardHeader snapshotTime={state.equipmentHeader.data.snapshotTime} />
        <DashboardEquipmentDetails equipmentHeader={state.equipmentHeader.data} />
        <Divider/>
        <Grid container className={container} spacing={3} justifyContent='flex-start'>
          <FuelBar fuelStatus={state.fuelRemaining.data}/>
          <ListItem 
            className={item} 
            primaryText={`${state.fuelUsed.data.fuelConsumed} ${state.fuelUsed.data.fuelUnits === 'litre' && 'l'}`}
            secondaryText='Fuel Used' 
          />
          <ListItem 
            className={item} 
            primaryText={`${state.cumulativeOperatingHours.data.hour} h`} 
            secondaryText='Cumulative Hours Operating' 
          />
          <ListItem 
            className={item} 
            primaryText={`${state.cumulativeIdleHours.data.hour} h`}
            secondaryText='Cumulative Idle Hours' 
          />
          <IdleTime
            idleHours={state.cumulativeIdleHours.data}
            operatingHours={state.cumulativeOperatingHours.data}
          />
        </Grid>
        <Grid container className={container} spacing={3} justifyContent='flex-start'>
          <ListItem 
            className={item} 
            primaryText={`${state.distance.data.odometer} ${state.distance.data.odometerUnits === 'kilometre' && 'km'}`} 
            secondaryText='Odometer' 
          />
          <Location location={state.location.data}/>
        </Grid>
      </Container>
      )
}
