import React, { useContext } from 'react'
import { Container, Grid, makeStyles } from '@material-ui/core'
import { ListItem, Icon, theme } from '@flexcavo/ui-kit'
import { stateContext } from '../lib/stateProvider'
import { DashboardHeader } from './dashboard-header'
import { DashboardEquipmentDetails } from './dashboard-equipment-details'

const useStyles = makeStyles({
  dashboard: {
    marginTop: '300px',
    padding: '100px',
    background: '#fff',
    borderRadius: theme.shape.borderRadius,
    border: '2px solid #eee',
    paddingBottom: '200px'
  },
  item: {
    background: 'fuchsia',
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
        <DashboardHeader snapshotTime={state?.equipmentHeader.data.snapshotTime} />
        <DashboardEquipmentDetails equipmentHeader={state.equipmentHeader.data} />
        <Grid container className={container} spacing={3} justifyContent='space-between'>
          <Grid className={item} item><ListItem primaryText={state?.cumulativeIdleHours.data.hour} secondaryText='Cumulative Hours Idle' icon={<Icon name='HourGlassEmpty' />} /></Grid>
          <Grid className={item} item><ListItem primaryText={state?.cumulativeOperatingHours.data.hour} secondaryText='Cumulative Hours Operating' icon={<Icon name='AccessTime' />} /></Grid>
        </Grid>
        <Grid container className={container} spacing={3} justifyContent='space-between'>
          <Grid className={item} item><ListItem primaryText={state?.cumulativeIdleHours.data.hour} /></Grid>
          <Grid className={item} item><ListItem primaryText={state?.cumulativeIdleHours.data.hour} /></Grid>
          <Grid className={item} item><ListItem primaryText={state?.cumulativeIdleHours.data.hour} /></Grid>
        </Grid>
        <Grid container className={container} spacing={3} justifyContent='space-between'>
          <Grid className={item} item><ListItem primaryText={state?.cumulativeIdleHours.data.hour} /></Grid>
          <Grid className={item} item><ListItem primaryText={state?.cumulativeIdleHours.data.hour} /></Grid>
          <Grid className={item} item><ListItem primaryText={state?.cumulativeIdleHours.data.hour} /></Grid>
        </Grid>

      </Container>
      )
}
