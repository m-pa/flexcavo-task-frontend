import React from 'react'
import { Container, createTheme, CssBaseline } from '@material-ui/core'
import { Dashboard } from './components/dashboard'
import { ThemeProvider } from '@material-ui/styles'
const MUItheme = createTheme({
  palette: {
    background: {
      default: '#DDD'
    }
  }
})

export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={MUItheme}>
      <CssBaseline />
      <Container>
        <Dashboard />
      </Container>
    </ThemeProvider>

  )
}
