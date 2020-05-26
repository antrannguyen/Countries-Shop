import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import Home from './pages/Home'
// import Product from './pages/Product'
import Countries from './pages/Countries'
// import SearchInput from './components/SearchBar/index'

const Routes = () => (
  <Switch>
    {/* <Route exact path="/" component={Home} /> */}
    {/* <Route exact path="/products/:id" component={Product} /> */}
    <Route exact path="/" component={Countries} />
    {/* <Route exact path="/" component={SearchInput} /> */}
  </Switch>
)

export default Routes
