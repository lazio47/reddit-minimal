import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AppLayout from './app/appLayout';
import PostsPage from './pages/postsPage';
import CommentsPage from './pages/commentsPage';
import PageNotFound from './pages/pageNotFound';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout/>}>
          <Route index element={<PostsPage/>} />
          <Route path='posts/:id' element={<PostsPage/>} />
          <Route path='comments/:subreddit/:id' element={<CommentsPage />} />
          <Route path='*' element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
