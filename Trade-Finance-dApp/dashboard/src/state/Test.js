import React, { useState, useEffect } from "react";
import Web3 from 'web3';
import {letterofcredit} from './smartContract';
import {contractDetails} from './contractJSON';
import  useInterval from './interval';
import {useContract} from './entity/contract-entity';


import Table from "components/Table/Table.js";
import CardBody from "components/Card/CardBody.js";


var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

 export default function Test (param) {
    var deployedContract = new web3.eth.Contract(contractDetails, param);

    const [hasError, setErrors] = useState(false);
    const [contracts, changeDetails] = useState([]);
  
  
      async function fetchData() {
       await deployedContract.getPastEvents("allEvents", 
       //contract call parameters
       {fromBlock: 0,toBlock: 'latest' })
          .then(res => changeDetails(res))
          .catch(err => setErrors(err));
      }
  
      useEffect(() => {
        fetchData()
      }, []);
 
    //console.log(contracts[0]);
    var block_no_list = [];
    if (contracts.length !== 0){

        for (let i =contracts.length-1; i >0 ; i -- ){
            var temp_list = [];
           
            temp_list.push(JSON.stringify(contracts[i]['blockNumber']), contracts[i]['blockHash']);
            temp_list.push(contracts[i]['event']);
            block_no_list.push(temp_list);
        }

        //console.log(block_no_list);
    return (
            <CardBody>
                <Table
                tableHeaderColor="primary"
                tableHead={['Block Number', 'Block Hash', 'Event']}
                tableData={block_no_list}
                />
            </CardBody>

    
    )
    }

    if (contracts.length ===0){
        return (

            <> Loading</>
        )
        }
    };
    

     // deployedContract.getPastEvents("allEvents", {
        //     fromBlock: 0,toBlock: 'latest'
        //     }).then(console.log);


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
    // deployedContract.methods.exporter().call(function(err,receipt){
    //     console.log("verify", receipt)
    // });

    //web3.eth.personal.unlockAccount("0x27b2f32be5591435c5df926af2bb70a10e43ef61", "123", 600).then(console.log('I Bank unlocked!'));
    //web3.eth.personal.unlockAccount("0xea2810ee8d0f55929bf812cb157a72b5166d891d", "123456", 600).then(console.log);
    //web3.eth.personal.unlockAccount("0xa600acdd67c3b4a899a10ce131d82ae8d5d57d12", "123456", 600).then(console.log);
    // deployedContract.methods.exporterInit('0xa600acdd67c3b4a899a10ce131d82ae8d5d57d12').send(
    //     {from:'0xea2810ee8d0f55929bf812cb157a72b5166d891d'}
    //     ).on('receipt', function(receipt){
    //         console.log('receipt', receipt)
    //     });
    // deployedContract.methods.advisingBankConfirm().send(
    //     {from:'0xea2810ee8d0f55929bf812cb157a72b5166d891d'}
    //     ).on('receipt', function(receipt){
    //         console.log('receipt', receipt)
    //     });
        
        //var deployedContract = new web3.eth.Contract(contractDetails, '0x2F84804a3dF6584Cd2F5cCD9e75AA1D2c8524aC9');
       
        // deployedContract.getPastEvents("allEvents", {
        //     fromBlock: 0,toBlock: 'latest'
        //     }).then(console.log);

        // const [contract, {loadContractEvents}] = useContract();
     
            
        // useInterval(() => {
 
        //     loadContractEvents();  
        //     }, 2000);
                
        // console.log(contract.event_lists)
//   return (

//     <>  {contracts}</>
//   )
// };
