import React from 'react';
import PrivateRoute from '../Navigation/PrivateRoute';

interface IRouteLayout {
  component: any;
  layout: any;
  auth: boolean
};

const RouteLayout = (props: IRouteLayout) => {

  let { layout: Layout, component: Component, auth = false, ...rest } = props;

  return (
    <Layout>
      { auth && <PrivateRoute><Component {...rest} /></PrivateRoute> }
      { !auth && <Component {...rest} /> }
    </Layout>
  );
};

export default RouteLayout;