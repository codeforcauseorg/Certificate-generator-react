import Routes from './Routes'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { createTheme } from './theme'

const App = () => (
  <ThemeProvider theme={createTheme()}>
    <Routes />
  </ThemeProvider>
)

export default App
