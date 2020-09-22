import React from 'react';
import routeList from './router';

import RouterView from './router/RouterView'

function App() {
  return (
    <div className="__app_bg">
      <RouterView routes={routeList}/>
    </div>
  );
}

export default App;
