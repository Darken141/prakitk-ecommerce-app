import React, {useContext, lazy, Suspense} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {UserContext} from './contexts/user/user.context'

import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'
import Spinner from './components/spinner/spinner.component'

const ShopProvider = lazy(() => import('./contexts/shop/shop.context'))
const CheckoutProvider = lazy(() => import('./contexts/checkout/checkout.context'))
const SingleProductProvider = lazy(() =>import('./contexts/single-product/single-product.context'))
const AdminProvider = lazy(() => import('./contexts/admin-panel/admin.context'))

const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))
const ProductsPage = lazy(() => import('./pages/products/products.component'))
const SingleProductPage = lazy(() => import('./pages/single-product/single-product.component'))
const ProductListPage = lazy(() => import('./pages/product-list/product-list.component') )
const AddProductPage = lazy(() => import('./pages/add-product/add-product.component'))



const App = () => {
  const {isAdmin, currentUser} = useContext(UserContext)

  return (
    <Suspense fallback={<Spinner/>}>
      <Header />
      <main style={{paddingTop: isAdmin? "18rem": "10rem"}}>
        <ShopProvider>
          <Switch>
            <Route exact path='/' component={HomePage}/>


            <Route exact path='/obchod' component={ShopPage}/>
            <Route exact path='/obchod/:slug' component={ProductsPage}/>
            <Route path='/obchod/:slug/:id'>
              <SingleProductProvider>
                <SingleProductPage/>
              </SingleProductProvider>
            </Route>
            <Route path='/objednavka'>
              <CheckoutProvider>
                <CheckoutPage/>
              </CheckoutProvider>
            </Route>

            <Route path='/prihlasenie' render={() => currentUser ? <Redirect to='/'/> : <SignInAndSignUpPage/>}/>

            <AdminProvider>
              {isAdmin ? <Route path='/produkty' component={ProductListPage}/> : <Redirect to='/'/>}
              {isAdmin ? <Route path='/novy-produkt' component={AddProductPage}/> : <Redirect to='/'/>}
              {isAdmin ? <Route path='/upravit-produkt/:id' component={AddProductPage}/> : <Redirect to='/'/>}
            </AdminProvider>

          </Switch>
        </ShopProvider>
      </main>
      <Footer/>
    </Suspense>
  );
}

export default App;
