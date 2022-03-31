import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { LineH5, ListItem, Icon } from '@flexcavo/ui-kit'
import { EquipmentHeader } from '../lib/stateProvider'

const useStyles = makeStyles({
  wrapper: {
    marginTop: '70px',
  },
  content: {
    padding: '70px 0'
  },
  icon: {
    fontSize: '2.5rem'
  }
})

export const DashboardEquipmentDetails = ({ equipmentHeader }: {equipmentHeader: EquipmentHeader }): JSX.Element => {
  const { content, icon } = useStyles()
  return (
    <>
      <Grid container className={content}>
        <ListItem primaryText={equipmentHeader.OEMName} secondaryText='Manufacturer' icon={<Icon className={icon} name='Info' />}/>
        <ListItem primaryText={equipmentHeader.model} secondaryText='Model' />
        <ListItem primaryText={equipmentHeader.serialNumber} secondaryText='Serial Number' />
      </Grid>
    </>
  )
}
