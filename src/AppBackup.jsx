import {BrowserRouter,Routes, Route } from 'react-router-dom';

import BaseLayout from './layout/BaseLayout.jsx'
import HeroSpace from './components/HeroSpace'
import ItemList from './components/ItemList/index.jsx'

function App() {

  return (
    <BrowserRouter>   
      <BaseLayout>
        <main className='main-container'>
          <HeroSpace />
          <ItemList />
        </main>
      </BaseLayout>
    </BrowserRouter>
  )
}

export default App
