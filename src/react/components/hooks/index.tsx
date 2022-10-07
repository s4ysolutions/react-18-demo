import React from 'react';
import UseState from './UseState';
import UseEffect from './UseEffect';
import UseTransition from './UseTransition';
import UseId from './UseId';

const HooksDemo: React.FunctionComponent = (): React.ReactElement => <div >
  <UseState />

  <UseEffect />

  <UseTransition />

  <UseId />
</div >;

export default HooksDemo;
