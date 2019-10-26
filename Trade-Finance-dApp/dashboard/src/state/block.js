import Web3 from 'web3';
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

export const initialState ={
    
    hash: '',
    number: 0, 
    time_elapsed: 0
    
};

// export const incrementBlock = block => by => {
//     block.setState({ value: block.state.value + by });
// };

// getBlock(){
//     web3.eth.getBlock("latest").then(
//         (result) =>{
//             this.setState({
//                 curr_block: result.number
//             });
//             this.setState({
//                 block_hash: result.hash
//             });
//             //this.state.block_hash = result.hash;
//             //this.state.curr_block = result.number;
//             console.log(result.number);
//             console.log(result.hash)
//         }
//     )
// }

export const loadBlocks = block => async () => {
    //settings.setState({ loading: true });
  
    const res = await web3.eth.getBlock("latest").then(
        (result) => block.setState({
            hash:result.hash,
            number: result.number, 
        })

    );
    
    //settings.setState({ loading: false, config: res });
    //block.setState({ loading: false, config: res });
  }

export const incrementBlockNumber = block => by => {
    block.setState({ time_elapsed: block.state.time_elapsed + by });
  };