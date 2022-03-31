import React from 'react'
import { createTheme, CssBaseline, Grid } from '@material-ui/core'
import { Dashboard } from './components/dashboard'
import { ThemeProvider } from '@material-ui/styles'
import { StateProvider } from './lib/stateProvider'
import { theme } from '@flexcavo/ui-kit'
import { DebugInputs } from './components/debugInputs'

const MUItheme = createTheme(theme)

export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={MUItheme}>
      <StateProvider>
        <CssBaseline />
        <Grid container justifyContent='center'>
          <Dashboard />
        </Grid>
        <DebugInputs />
      </StateProvider>
    </ThemeProvider>
  )
}
