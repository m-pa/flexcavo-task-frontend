import React, { createRef, useContext } from 'react'
import { Container, Grid, makeStyles, Divider } from '@material-ui/core'
import { ListItem, Icon, theme } from '@flexcavo/ui-kit'
import { stateContext } from '../lib/stateProvider'
import { DashboardHeader } from './dashboard-header'
import { DashboardEquipmentDetails } from './dashboard-equipment-details'
import { FuelBar } from './dashboard-fuel-bar'

const useStyles = makeStyles({
  dashboard: {
    margin: '300px 0',
    padding: '100px',
    background: '#fff',
    borderRadius: theme.shape.borderRadius,
    border: '2px solid #eee',
    paddingBottom: '200px'
  },
  item: {
    minWidth: '300px'
  },
  container: {
    marginTop: '70px'
  },
  icon: {
    fontSize: '2.5rem'
  }
})

export const Dashboard = (): JSX.Element => {
  const { dashboard, item, container, icon } = useStyles()
  const state = useContext(stateContext)

  return state === null
    ? (
      <Container className={dashboard}>
        loading...
      </Container>
      )
    : (
      <Container className={dashboard}>
        <DashboardHeader snapshotTime={state?.equipmentHeader.data.snapshotTime} />
        <DashboardEquipmentDetails equipmentHeader={state.equipmentHeader.data} />
        <Divider></Divider>
        <Grid container className={container} spacing={3} justifyContent='flex-start'>
          <ListItem 
            className={item} 
            primaryText={`${state?.cumulativeOperatingHours.data.hour} h`} 
            secondaryText='Cumulative Hours Operating' 
            icon={<Icon className={icon} name='AccessTime' />} 
          />
          <ListItem 
            className={item} 
            primaryText={`${state?.cumulativeIdleHours.data.hour} h`}
            secondaryText='Cumulative Idle Hours' 
            icon={<Icon className={icon} name='HourglassEmpty' />} 
          />
          <ListItem 
            className={item} 
            primaryText={`${state.distance.data.odometer} ${state.distance.data.odometerUnits === 'kilometre' && 'km'}`} 
            secondaryText='Odometer' 
            icon={<Icon className={icon} name='Directions' />} 
          />
        </Grid>
        <Grid container className={container} spacing={3} justifyContent='flex-start'>
          <ListItem 
            className={item} 
            primaryText={`${state?.fuelUsed.data.fuelConsumed} ${state?.fuelUsed.data.fuelUnits === 'litre' && 'l'}`}
            secondaryText='Fuel Used' 
            icon={<Icon className={icon} name='GasMeter' />} 
          />
          <FuelBar fuelStatus={state.fuelRemaining.data}/>
        </Grid>
      </Container>
      )
}
