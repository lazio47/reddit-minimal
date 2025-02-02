import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AppLayout from './app/appLayout';
import PostsPage from './pages/postsPage';
import PageNotFound from './pages/pageNotFound';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout/>}>
          <Route index element={<PostsPage/>} />
          <Route path='*' element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
