import React from 'react';
import Web3 from 'web3';
import { useBlock, incrementBlockNumber} from 'state/entity/block-entity';
import useInterval from './interval';

export const BlockNumber = () =>{

   useInterval(() => {

    loadBlocks();  
    }, 1000);
        
  const [block, {loadBlocks, incrementBlockNumber}] = useBlock();

  return (
    <>
      {block.number}
    </>
  )
};

export const BlockHash = () => {

    useInterval(() => {
 
     loadBlocks();  
     }, 1000);
         
   const [block, {loadBlocks}] = useBlock();
   return (
     <>
       {block.hash.slice(0,20) + "....." + block.hash.slice(-5,)}
     </>
   )
 };


// export const View = () => {
//     // let [count, setCount] = useState(0);

//    useInterval(() => {

//     // setCount(count + 1);
//     //incrementBlock(1);  
//     loadBlocks();  
//     }, 2000);
        
//   const [block, {incrementBlockNumber, loadBlocks}] = useBlock();
//   const [counter, { increment, decrement }] = useContract();

//   const handleClickIncrement = useCallback(() => increment(1), []);
//   const handleClickDecrement = useCallback(() => decrement(1), []);

// //   this.interval2 = setInterval( () => [this.getBlock(), this.getBlocks()], 10000);

//   return (

//     <> </>
//   )
// };
