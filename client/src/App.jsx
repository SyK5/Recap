import { useState } from 'react'
import { Routes, Route } from 'react-router'

import './styles/app.css'

import Home from './pages/Home'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
