import React from 'react';
import Web3 from 'web3';
import {letterofcredit} from './smartContract';
import {contractDetails} from './contractJSON';
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
var deployedContract = new web3.eth.Contract(contractDetails, "0x2F84804a3dF6584Cd2F5cCD9e75AA1D2c8524aC9");

export const Test = () => {
    // let [count, setCount] = useState(0);
    // console.log(letterofcredit.deploy({
    //     arguments:[accounts[0], accounts[1], 5, "0xCD0AA9856147B6C5B4FF2B7DFEE5DA20AA38253099EF1B4A64ACED233C9AFE29"]
    // }).estimateGas(function(err, gas){
    //     console.log(gas)
    // })
    // );     
//    letterofcredit.deploy({
//         arguments:[accounts[0], accounts[1], 5, "0xCD0AA9856147B6C5B4FF2B7DFEE5DA20AA38253099EF1B4A64ACED233C9AFE29"]
//     }).send().on('receipt', function(receipt){
//         console.log('reciept', receipt)
//     });
    // deployedContract.agencies.call(accounts[0], function(err,data){
    //     console.log(data);
    // });
    // console.log('test', deployedContract);
    deployedContract.methods.exporter().call(function(err,receipt){
        console.log("verify", receipt)
    });
    // web3.eth.personal.unlockAccount("0x27b2f32be5591435c5df926af2bb70a10e43ef61", "123", 600).then(console.log('I Bank unlocked!'));
    // web3.eth.personal.unlockAccount("0xea2810ee8d0f55929bf812cb157a72b5166d891d", "123456", 600).then(console.log);
    // web3.eth.personal.unlockAccount("0xa600acdd67c3b4a899a10ce131d82ae8d5d57d12", "123456", 600).then(console.log);
    // deployedContract.methods.exporterInit('0xa600acdd67c3b4a899a10ce131d82ae8d5d57d12').send(
    //     {from:'0xea2810ee8d0f55929bf812cb157a72b5166d891d'}
    //     ).on('receipt', function(receipt){
    //         console.log('receipt', receipt)
    //     });
    // deployedContract.methods.exporterConfirm().send(
    //     {from:'0xa600acdd67c3b4a899a10ce131d82ae8d5d57d12'}
    //     ).on('receipt', function(receipt){
    //         console.log('receipt', receipt)
    //     });
        

//   this.interval2 = setInterval( () => [this.getBlock(), this.getBlocks()], 10000);

  return (

    <><h5>Test holder</h5>
    </>
  )
};
