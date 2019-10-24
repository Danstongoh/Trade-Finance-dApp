import React, { useCallback,useState, useEffect, useRef } from 'react';

import { useCounter } from './entities';
import { useBlock} from './block-entity';
import useInterval from './interval';

export const CounterView = () => {
    // let [count, setCount] = useState(0);

   useInterval(() => {

    // setCount(count + 1);
    increment(1);
    //incrementBlock(1);  
    loadBlocks();  
    }, 1000);

  const [block, {incrementBlock, loadBlocks}] = useBlock();
  const [counter, { increment, decrement }] = useCounter();

  const handleClickIncrement = useCallback(() => increment(1), []);
  const handleClickDecrement = useCallback(() => decrement(1), []);

//   this.interval2 = setInterval( () => [this.getBlock(), this.getBlocks()], 10000);

  return (

    <>
        <div><h2>Dynamic Count</h2></div>
      <div>{counter.value}</div>

      <div>{block.blockNo} | {block.hash}</div>
      <button onClick={handleClickIncrement}>Increment</button>
      <button onClick={handleClickDecrement}>Decrement</button>
    </>
  )
};
