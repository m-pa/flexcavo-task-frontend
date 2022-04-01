import React from 'react'
import { ListItem, Icon } from '@flexcavo/ui-kit'
import { EquipmentLocation } from '../lib/stateProvider'
// @ts-expect-error
import { nearestCity } from 'cityjs'
import { makeStyles, Link } from '@material-ui/core'

const useStyles = makeStyles({
  item: {
    minWidth: '300px'
  },
  icon: {
    fontSize: '2.5rem'
  },
  iconSmall: {
    position: 'relative',
    fontSize: '12px',
    top: '2px'
  },
  link: {
    fontSize: '12px'
  }
})

const showOnMap: any = () => console.log('not implemented')

export const Location = ({ location }: {location: EquipmentLocation }): JSX.Element => {
  const { item, iconSmall, link } = useStyles()
  const nearest = nearestCity(location)
  return (
    <ListItem
      className={item}
      primaryText={
        <>
          {`${nearest.name as string}, ${nearest.countryCode as string} `}
          <Link className={link} href='#' onClick={showOnMap}>
            Show on Map
            <Icon className={iconSmall} name='ChevronRight' />
          </Link>
        </>
      }
      secondaryText='Equipment Location'
    />
  )
}
