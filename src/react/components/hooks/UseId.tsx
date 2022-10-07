import React, {useId} from 'react';


const UseId: React.FunctionComponent = (): React.ReactElement => {
  const id = useId();
  return <div >
    {id}
  </div >;
};

export default UseId;
