import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { ListItem } from '@flexcavo/ui-kit'
import { EquipmentHeader } from '../lib/stateProvider'

const useStyles = makeStyles({
  wrapper: {
    marginTop: '70px'
  },
  content: {
    padding: '55px 0'
  },
  icon: {
    fontSize: '2.5rem'
  }
})

export const DashboardEquipmentDetails = (
  { equipmentHeader }: {equipmentHeader: EquipmentHeader }
): JSX.Element => {
  const { content } = useStyles()
  return (
    <>
      <Grid container className={content} justifyContent='flex-start'>
        <ListItem
          primaryText={equipmentHeader.OEMName}
          secondaryText='Manufacturer'
        />
        <ListItem
          primaryText={equipmentHeader.model}
          secondaryText='Model'
        />
        <ListItem
          primaryText={equipmentHeader.serialNumber}
          secondaryText='Serial Number'
        />
      </Grid>
    </>
  )
}
