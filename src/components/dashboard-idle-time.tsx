import React, { useState, useEffect } from 'react'
import { Icon, ListItem, Snackbar, theme } from '@flexcavo/ui-kit'
import { CumulativeIdleHours, CumulativeOperatingHours } from '../lib/stateProvider'
import { makeStyles, LinearProgress, Box, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  item: {
    minWidth: '300px'
  },
  icon: {
    fontSize: '2.3rem',
    color: theme.palette.error.main
  }
})

const useProgressStyles = makeStyles({
  root: {
    height: '10px',
    borderRadius: '1px'
  },
  colorPrimary: {
    backgroundColor: theme.palette.warning.main
  },
  barColorPrimary: {
    backgroundColor: theme.palette.info.main
  }
})

export const idleRatio = (idle: number, operating: number): number => operating / idle
export const ratioToPercent = (ratio: number): number => Math.round((ratio / (ratio + 1)) * 100)

const IdleStatusBar = (
  { currentRatio }: { currentRatio: number}
): JSX.Element => {
  const classes = useProgressStyles()
  const percent = ratioToPercent(currentRatio)

  const [open, setOpen] = useState(false)
  const [hasShownSnackbar, setHasShownSnackbar] = useState(false)

  const critical = currentRatio <= 3

  if (critical && !hasShownSnackbar) {
    setOpen(true)
    setHasShownSnackbar(true)
  }

  if (currentRatio > 3 && hasShownSnackbar) {
    setHasShownSnackbar(false)
  }

  useEffect(() => {
    setTimeout(() => setOpen(false), 6000)
  }, [hasShownSnackbar])

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
        <Typography color='textSecondary'>{`${currentRatio.toFixed(1)}/1`}</Typography>
      </Box>
      <Snackbar
        type='error'
        open={open}
        message={`
          Warning: Equipment is idling a lot.
        `}
      />
    </Box>
  )
}

export const IdleTime = (
  { idleHours, operatingHours }: {idleHours: CumulativeIdleHours, operatingHours: CumulativeOperatingHours }
): JSX.Element => {
  const { item, icon } = useStyles()
  const currentIdleRatio = idleRatio(idleHours.hour, operatingHours.hour)
  const critical = currentIdleRatio < 3

  return (
    <ListItem
      className={item}
      primaryText={<IdleStatusBar currentRatio={currentIdleRatio} />}
      secondaryText='Operating / Idling Ratio'
      icon={critical ? <Icon className={icon} name='ErrorOutline' /> : undefined}
    />
  )
}
