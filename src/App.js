import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Checkout from './components/checkout';
import Order from './pages/order';
import Cosmetices from './pages/cosmetices';
import Accessories from './pages/accessories';
import Kids from './pages/kids';
import Mens from './pages/mens';
import Womens from './pages/womens';
import Layout from './components/layout.js';

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />} />
            <Route path='/Checkout' element={<Checkout />} />
            <Route path='/Order' element={<Order />} />
            <Route path='/Cosmetices' element={<Cosmetices />} />
            <Route path='/Accessories' element={<Accessories />} />
            <Route path='/Kids' element={<Kids />} />
            <Route path='/Mens' element={<Mens />} />
            <Route path='/Womens' element={<Womens />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;

