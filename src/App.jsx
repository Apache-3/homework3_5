import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { Posts } from './components/pages/Posts'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='posts' element={<Posts />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
