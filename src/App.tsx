import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AppLayout from './app/appLayout';
import Home from './components/home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout/>}>
          <Route path='/home' element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
