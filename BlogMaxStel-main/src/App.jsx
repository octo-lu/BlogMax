import './App.css'
import { PostsProvider } from './context/postsContext'
import { Blog } from './pages/Blog'

function App() {
  return (
    <>
    <PostsProvider>
      <Blog/>
    </PostsProvider>
      
    </>
  )
}

export default App
