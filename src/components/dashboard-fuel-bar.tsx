import React from 'react'
import { Icon, ListItem, theme } from '@flexcavo/ui-kit'
import {  FuelRemaining } from '../lib/stateProvider'
import { makeStyles, LinearProgress, Box, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  item: {
    minWidth: '300px'
  },
  icon: {
    fontSize: '2.5rem'
  }
})

const useProgressStyles = makeStyles({
  root: {
    height: '10px',
    borderRadius: '1px',
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[200]
  },
  barColorPrimary: {
    backgroundColor: theme.palette.info.main
  },
  barColorWarning: {
    backgroundColor: theme.palette.warning.main
  }
})

const FuelStatusBar = ({fuelStatus}: {fuelStatus: FuelRemaining }) => {
  const {barColorWarning, ...classes} = useProgressStyles()
  const critical = fuelStatus.percent <= 5
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress
          value={fuelStatus.percent}
          variant='determinate'
          classes={{...classes, barColorPrimary: critical ? barColorWarning : classes.barColorPrimary}}
        />
      </Box>
      <Box minWidth={35}>
        <Typography color="textSecondary">{`${Math.round(
          fuelStatus.percent
        )}%`}</Typography>
      </Box>
    </Box>)
}

export const FuelBar = ({ fuelStatus }: {fuelStatus: FuelRemaining }): JSX.Element => {
  const { item, icon } = useStyles()
  return (
    <>
      <ListItem 
        className={item} 
        primaryText={<FuelStatusBar fuelStatus={fuelStatus}/>}
        secondaryText='Fuel Remaining' 
        icon={<Icon className={icon} name='LocalGasStation' />} 
      />
    </>
  )
}
