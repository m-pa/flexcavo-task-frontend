import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { LineH5, ListItem } from '@flexcavo/ui-kit'
import { EquipmentHeader } from '../lib/stateProvider'

const useStyles = makeStyles({
  wrapper: {
    marginTop: '70px',
  },
  content: {
    padding: '70px 0'
  }
})

export const DashboardEquipmentDetails = ({ equipmentHeader }: {equipmentHeader: EquipmentHeader }): JSX.Element => {
  const { wrapper, content } = useStyles()
  return (
    <>
      <Grid container className={wrapper} justifyContent='flex-start'>
        <LineH5 label='Equipment Details' />
      </Grid>
      <Grid container className={content}>
        <ListItem primaryText={equipmentHeader.OEMName} secondaryText='Manufacturer' />
        <ListItem primaryText={equipmentHeader.model} secondaryText='Model' />
        <ListItem primaryText={equipmentHeader.serialNumber} secondaryText='Serial Number' />
      </Grid>
    </>
  )
}
