import React, {useState} from 'react';


const UseState: React.FunctionComponent = (): React.ReactElement => {
  const [state, setState] = useState<number>(0);
  return <div >
    <div >
      {state}

      <button onClick={() => setState(state + 1)} type="button">
        +
      </button >

      <button onClick={() => setState(state - 1)} type="button">
        -
      </button >
    </div >
  </div >;
};

export default UseState;
