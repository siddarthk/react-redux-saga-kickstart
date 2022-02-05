import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Main, Blog, Product, Home, Profile } from '../ui';
import RouteWithLayout from '../ui/Layout/RouteLayout';

interface Props {

}

const App = (props: Props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RouteWithLayout layout={Main} component={Home} auth={false} />} />
        <Route path="/product" element={<RouteWithLayout layout={Main} component={Product} auth={false} />} />
        <Route path="/blog" element={<RouteWithLayout layout={Main} component={Blog} auth={false} />} />
        <Route path="/profile" element={<RouteWithLayout layout={Main} component={Profile} auth={false} />} />
      </Routes>
    </Router>
  )
}

export default App
