import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
    <Layout>
      <Cart />
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
