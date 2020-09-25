import React from 'react';
import routeList from './router';
import { withRouter} from 'react-router-dom'

import RouterView from './router/RouterView'

function App() {
  return (
    <div className="__app_bg">
      <RouterView routes={routeList}/>
    </div>
  );
}

export default withRouter(App);
