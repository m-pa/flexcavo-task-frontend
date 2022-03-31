import React from 'react'
import { ListItem, theme, Snackbar } from '@flexcavo/ui-kit'
import { CumulativeIdleHours, CumulativeOperatingHours } from '../lib/stateProvider'
import { makeStyles, LinearProgress, Box, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  item: {
    minWidth: '300px'
  }
})

const useProgressStyles = makeStyles({
  root: {
    height: '10px',
    borderRadius: '1px',
  },
  colorPrimary: {
    backgroundColor: theme.palette.warning.main
  },
  barColorPrimary: {
    backgroundColor: theme.palette.info.main
  }
})

export const idleRatio = (idle: number, operating: number) => operating/idle
export const ratioToPercent = (ratio: number) => Math.round((ratio / (ratio + 1) ) * 100) 
const IdleStatusBar = (
  { idleHours, operatingHours }: {idleHours: CumulativeIdleHours, operatingHours: CumulativeOperatingHours }
) => {
  const classes = useProgressStyles()

  const currentIdleRatio = idleRatio(idleHours.hour, operatingHours.hour) 
  const percent = ratioToPercent(currentIdleRatio)

  return (
    <Box display='flex' alignItems='center'>
      <Box width='100%' mr={1}>
        <LinearProgress
          value={percent}
          variant='determinate'
          classes={classes}
        />
      </Box>
      <Box minWidth={60}>
        <Typography color='textSecondary'>{`${currentIdleRatio.toFixed(1)}/1`}</Typography>
      </Box>
    </Box>)
}

export const IdleTime = (
    { idleHours, operatingHours }: {idleHours: CumulativeIdleHours, operatingHours: CumulativeOperatingHours }
  ): JSX.Element => {

  const { item } = useStyles()
  return (
    <ListItem 
      className={item} 
      primaryText={<IdleStatusBar idleHours={idleHours} operatingHours={operatingHours}/>}
      secondaryText='Operating / Idling Ratio' 
    />
  )
}
