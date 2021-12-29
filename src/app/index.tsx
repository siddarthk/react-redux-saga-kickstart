import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Main, PrivateRoute } from '../ui/component'
import { Home } from '../ui/page'

interface Props {

}

const App = (props: Props) => {
  return (
    <Main>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/dashboard" element={<PrivateRoute auth={{ isAuthenticated: false }}><Home /></PrivateRoute>} />
        </Routes>
      </Router>
    </Main>
  )
}

export default App
