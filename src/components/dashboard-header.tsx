import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { LineH4 } from '@flexcavo/ui-kit'

export const DashboardHeader = ({ snapshotTime }: {snapshotTime: string }): JSX.Element => {
  const snapshotTimeString = new Date(snapshotTime).toLocaleString('en-US', { timeZone: 'EST' })
  return (
    <Grid container justifyContent='space-between' alignItems='baseline'>
      <LineH4 label='Dashboard' />
      <Typography>{`Last Updated: ${snapshotTimeString}`}</Typography>
    </Grid>
  )
}
