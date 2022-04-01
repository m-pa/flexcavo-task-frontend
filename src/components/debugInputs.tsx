import React, { useContext } from 'react'
import { Container, makeStyles } from '@material-ui/core'
import { stateContext } from '../lib/stateProvider'
import { Input } from '@flexcavo/ui-kit'

const useStyles = makeStyles({
  input: {
    marginBottom: '20px'
  }
})

export const DebugInputs = (): JSX.Element => {
  const state = useContext(stateContext)
  const { input } = useStyles()

  const updateFuel: any = (e: any) => {
    state?.fuelRemaining.set({
      percent: parseInt(e.target.value)
    })
  }

  const updateOperatingHours: any = (e: any) => {
    state?.cumulativeOperatingHours.set({
      hour: parseInt(e.target.value)
    })
  }

  const updateIdleHours: any = (e: any) => {
    state?.cumulativeIdleHours.set({
      hour: parseInt(e.target.value)
    })
  }

  return (state != null)
    ? (
      <Container>
        <Input
          className={input}
          name='fuel status'
          value={state?.fuelRemaining.data.percent}
          onChange={updateFuel}
          type='number'
          label='fuel'
        />
        <Input
          className={input}
          name='cumulative operating hours'
          value={state?.cumulativeOperatingHours.data.hour}
          onChange={updateOperatingHours}
          type='number'
          label='operating hours'
        />
        <Input
          className={input}
          name='cumulative idle hours'
          value={state?.cumulativeIdleHours.data.hour}
          onChange={updateIdleHours}
          type='number'
          label='idle hours'
        />
      </Container>
      )
    : (<></>)
}
