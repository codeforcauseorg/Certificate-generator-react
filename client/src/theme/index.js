/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import _ from 'lodash'
import { colors, createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import typography from './typography'
import { softShadows } from './shadow'

const baseConfig = {
  direction: 'ltr',
  typography,
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: 'hidden'
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32
      }
    },
    MuiChip: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.075)'
      }
    }
  }
}

const themeConfig = {
  name: 'LIGHT',
  overrides: {
    MuiInputBase: {
      input: {
        '&::placeholder': {
          opacity: 1,
          color: colors.blueGrey[600]
        }
      }
    }
  },
  palette: {
    type: 'light',
    action: {
      active: '#03506a' //small icons
    },
    background: {
      default: '#F5F5F5',
      dark: '#f4f6f8',
      paper: '#e0dee1' // background
    },
    primary: {
      main: '#F1002D' // for header and loader
    },
    secondary: {
      main: '#ee6401' // for button and selected
    },
    text: {
      // for text classes
      primary: '#000',
      secondary: '#03506a'
    }
  },
  shadows: softShadows
}

const createTheme = () => {
  let theme = createMuiTheme(
    _.merge({}, baseConfig, themeConfig, { direction: 'ltr' })
  )

  theme = responsiveFontSizes(theme)

  return theme
}

export { createTheme }

// https://coolors.co/f1002d-ee6401-f9af28-03506a-62a7c4-e0dee1
