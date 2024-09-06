import {BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import BaseLayout from './layout/BaseLayout.jsx'
import Home from './pages/Home/index.jsx';
import Store from './pages/Store/index.jsx';
import SingleProduct from './pages/SingleProduct/index.jsx';
import ScrollToTop from './components/ScrollToTop/index.jsx';

function App() {

  return (
    <BrowserRouter>   
      <BaseLayout>
        <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/store' element={<Store />} />
          <Route exact path='/detail/:id' element={<SingleProduct />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  )
}

export default App
