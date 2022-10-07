import React from 'react';
import Spinner from '../spinner';
import SuspenseResult from './SuspenseResult';

const SuspenseDemo: React.FunctionComponent = (): React.ReactElement => <React.Suspense fallback={<Spinner />} >
  <div >
    <SuspenseResult />
  </div>
</React.Suspense >;

export default SuspenseDemo;
