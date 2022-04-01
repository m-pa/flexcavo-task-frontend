import React, { useState, useEffect } from 'react'
import { Icon, ListItem, theme, Snackbar } from '@flexcavo/ui-kit'
import { FuelRemaining } from '../lib/stateProvider'
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
    backgroundColor: theme.palette.grey[200]
  },
  barColorPrimary: {
    backgroundColor: theme.palette.info.main
  },
  barColorWarning: {
    backgroundColor: theme.palette.warning.main
  }
})

const FuelStatusBar = ({ fuelStatus }: {fuelStatus: FuelRemaining }): JSX.Element => {
  const { barColorWarning, ...classes } = useProgressStyles()
  const [open, setOpen] = useState(false)
  const [hasShownSnackbar, setHasShownSnackbar] = useState(false)

  const critical = fuelStatus.percent <= 5

  if (critical && !hasShownSnackbar) {
    setOpen(true)
    setHasShownSnackbar(true)
  }

  if (fuelStatus.percent > 5 && hasShownSnackbar) {
    setHasShownSnackbar(false)
  }

  useEffect(() => {
    setTimeout(() => setOpen(false), 6000)
  }, [hasShownSnackbar])

  const barColorPrimary = critical ? barColorWarning : classes.barColorPrimary

  return (
    <Box display='flex' alignItems='center'>
      <Box width='100%' mr={1}>
        <LinearProgress
          value={fuelStatus.percent}
          variant='determinate'
          classes={{ ...classes, barColorPrimary }}
        />
      </Box>
      <Box minWidth={60}>
        <Typography color='textSecondary'>{`${Math.round(
          fuelStatus.percent
        )}%`}
        </Typography>
      </Box>
      <Snackbar
        type='error'
        open={open}
        message={`
          Warning: Equipment low on fuel.
        `}
      />
    </Box>
  )
}

export const FuelBar = ({ fuelStatus }: {fuelStatus: FuelRemaining }): JSX.Element => {
  const { item, icon } = useStyles()

  const critical = fuelStatus.percent <= 5

  return (
    <ListItem
      className={item}
      primaryText={<FuelStatusBar fuelStatus={fuelStatus} />}
      secondaryText='Fuel Remaining'
      icon={critical ? <Icon className={icon} name='ErrorOutline' /> : undefined}
    />
  )
}
