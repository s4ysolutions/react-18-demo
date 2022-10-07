import React, {useEffect, useState} from 'react';

const EFFECT_TIMEOUT = 2000;

const UseEffect: React.FunctionComponent = (): React.ReactElement => {
  const [state, setState] = useState<string>('Effect started...');
  useEffect(() => {
    setTimeout(() => setState('Effect completed.'), EFFECT_TIMEOUT);
  });

  return <div >
    <div >
      {state}
    </div >
  </div >;
};

export default UseEffect;
