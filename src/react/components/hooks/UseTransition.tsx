import React, {useState, useTransition} from 'react';

const UseTransition: React.FunctionComponent = (): React.ReactElement => {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState<number>(0);

  const handleClick = () => startTransition(() => {
    setCount(count + 1);
  });

  return <div >
    <div >
      {isPending ? <div >
        Pending...
      </div > : null}

      <button onClick={handleClick} type="button" >
        {count}
      </button >
    </div >
  </div >;
};

export default UseTransition;
