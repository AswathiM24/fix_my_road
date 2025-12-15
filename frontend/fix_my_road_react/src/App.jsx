import React from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import SignUp from './pages/SignUp'

function App() {
  return (
    <div>
      <BrowserRouter>
            <Routes>
              <Route path = '/register' element = {<SignUp></SignUp>}></Route>
            </Routes>
</BrowserRouter>
    </div>
  )
}

export default App
