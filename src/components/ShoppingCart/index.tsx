import React from 'react'
import Badge from '@material-ui/core/Badge'
import { Theme, withStyles, createStyles } from '@material-ui/core/styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
// import CartPageDrawer from '../CartPageDrawer'
import { toggleDialog } from '../../redux/actions/ui'
import { useDispatch } from 'react-redux'

import { useSelector } from 'react-redux'
import { AppState } from '../../types'

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  })
)(Badge)

export default function ShoppingCart() {
  const inCart = useSelector((state: AppState) => state.countries.inCart)
  console.log('cart', inCart)
  const dispatch = useDispatch()

  const totalItem = inCart.length

  const handleOpenCartPage = () => dispatch(toggleDialog(1))

  return (
    <StyledBadge badgeContent={totalItem} color="secondary">
      <ShoppingCartIcon onClick={handleOpenCartPage} />
    </StyledBadge>
  )
}
