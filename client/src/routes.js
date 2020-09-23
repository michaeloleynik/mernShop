import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {CartPage} from './pages/CartPage';
import {CatalogPage} from './pages/CatalogPage';
import {AuthPage} from './pages/AuthPage';
import {DetailPage} from './pages/DetailPage';

export const useRoutes = isAuth => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/catalog" exact>
          <CatalogPage />
        </Route>

        <Route path="/cart" exact>
          <CartPage />
        </Route>

        <Route path="/detail/:id">
          <DetailPage />
        </Route>

        <Redirect to="/catalog" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>

      <Redirect to="/" />
    </Switch>
  ) 
}