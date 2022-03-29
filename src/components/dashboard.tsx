import React from 'react'
import { Container, makeStyles } from '@material-ui/core'
import { LineH4 } from '@flexcavo/ui-kit'

const useStyles = makeStyles({
  dashboard: {
    marginTop: '300px',
    padding: '20px',
    background: '#fff',
    borderRadius: '1px',
    border: '1px solid #eee'
  }
})

export const Dashboard = (): JSX.Element => {
  const { dashboard } = useStyles()

  return (
    <Container className={dashboard}>
      <LineH4 label='Dashboard' />
    </Container>
  )
}
