import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Main, PrivateRoute, Home } from '../ui';

interface Props {

}

const App = (props: Props) => {
  return (
    <Main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/dashboard" element={<PrivateRoute><Home /></PrivateRoute>} />
        </Routes>
      </Router>
    </Main>
  )
}

export default App
