import React from 'react'
import './Home.css'
import Counter from './pages/Counter';
import Form from './pages/Form';
import Ratings from './pages/Ratings';
import TickTock from './pages/TickTock';
import StateLiftup from './pages/StateLiftup';
import ProductList from './pages/Contextapi/ProductList';
import { ProductsProvider } from './pages/Contextapi/ProductContext';
import Memorization from './pages/Memorization';
import Errormain from './pages/Errorhandle/Errormain';
import OptimisticUi from './pages/OptimisticUi';
import ErrorBoundary from './pages/Errorhandle/ErrorBoundary';

function Home() {
  return (
    <>
      <div className='background'>
        <div className="container">
          <h3 className='pt-5'>Hello Guys!!</h3>
          <TickTock />
        </div>
        <Counter />
        <Form />
        <Ratings />
        <StateLiftup />
        {/*  */}
        <ProductsProvider>
          <div className='text-center'>
            <h4>Product List using Context API</h4>
            <ProductList />
          </div>
        </ProductsProvider>
     
      {/*  */}
      <Memorization />
      {/*  */}
    
        <Errormain>
      <ErrorBoundary/>
      </Errormain>
      {/*  */}
      <OptimisticUi />
      </div>
    </>
  )
}

export default Home;