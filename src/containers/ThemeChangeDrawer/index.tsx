import React, { useContext } from 'react'
import { useTheme } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ThemeContext, { themesDefine } from '../../components/Context'
import Button from '@material-ui/core/Button'

import { useStyles } from './style'

export default function ThemePageDrawer() {
  const classes = useStyles()
  const { switchTheme } = useContext(ThemeContext)

  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerOpen}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="h6" align="center" className={classes.title}>
            SWITCH ME
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <List>
          {[
            themesDefine.primary,
            themesDefine.secondary,
            themesDefine.third,
            themesDefine.fourth,
          ].map((change, index) => {
            return (
              <Button
                key={index}
                className={classes.button}
                variant="contained"
                style={{ background: change.background }}
                onClick={() => switchTheme(change.background)}
              >
                {change.label}
              </Button>
            )
          })}
        </List>
      </Drawer>
    </div>
  )
}
