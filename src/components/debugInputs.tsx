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

  const updateFuel = (e: any) => {
    console.log(parseInt(e.target.value))
    state?.fuelRemaining.set({
      percent: parseInt(e.target.value) 
    })
  }

  const updateOperatingHours = (e: any) => {
    console.log(parseInt(e.target.value))
    state?.cumulativeOperatingHours.set({
      hour: parseInt(e.target.value) 
    })
  }

  return (
      <Container>
        <Input 
          className={input} 
          name='fuel status' 
          value={state?.fuelRemaining.data.percent || 100} 
          onChange={updateFuel} 
          type='number' 
          label='fuel' 
        />
        <Input 
          className={input} 
          name='cumulative operating hours' 
          value={state?.cumulativeOperatingHours.data.hour || 100} 
          onChange={updateOperatingHours} 
          type='number' 
          label='operating hours' 
        />
      </Container>
      )
}
