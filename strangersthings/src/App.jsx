import { useState } from 'react'
import './App.css'
import PostView from './components/PostView'

function App() {

    const [token, setToken] = useState(null);

  return (
    <>
      <PostView token={token}/>
    </>
  )
}

export default App
