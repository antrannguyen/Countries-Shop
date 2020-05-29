import React from 'react'
import { useDispatch } from 'react-redux'
import { searchCountry } from '../../redux/actions'
import ShoppingCart from '../ShoppingCart/index'
import { useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import CartPageDrawer from '../CartPageDrawer'
import ThemePageDrawer from '../ThemeChangeDrawer'

import { useStyles } from './style'

export default function SearchAppBar() {
  const classes = useStyles()
  const dispatch = useDispatch()

  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleSearchCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchCountry(event.target.value))
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <ThemePageDrawer />

          <Typography className={classes.title} variant="h6" noWrap>
            Search country
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              onChange={handleSearchCountry}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
          >
            <ShoppingCart />
          </IconButton>

          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <List>
              <CartPageDrawer />
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  )
}
