import React from 'react';
import SuspenseDemo from './suspense';
import HooksDemo from './hooks';

const App: React.FunctionComponent = (): React.ReactElement =>
  <React.StrictMode >
    <div >
      <HooksDemo />
    </div >
  </React.StrictMode >;

export default App;
