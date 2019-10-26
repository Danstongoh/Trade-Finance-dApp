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
    // const [contracts, changeDetails] = useState([]);
    const [importer, changeImporter] = useState([]);
    const [issuingBank, changeIB] = useState([]);
    const [advisingBank, changeAB] = useState([]);
    const [exporter, changeExporter] = useState([]);
    

    async function getImporter() {
        await deployedContract.methods.importer().call()
           .then(res => changeImporter(res))
           .catch(err => setErrors(err));
       }
       
    async function getIB() {
        await deployedContract.methods.issuingBank().call()
           .then(res => changeIB(res))
           .catch(err => setErrors(err));
       }
  
      async function getExporter() {
       await deployedContract.methods.exporter().call()
          .then(res => changeAB(res))
          .catch(err => setErrors(err));
      }
      async function getAB() {
        await deployedContract.methods.advisingBank().call()
           .then(res => changeExporter(res))
           .catch(err => setErrors(err));
       }
  
      useEffect(() => {
        getImporter();
        getIB();
        getExporter();
        getAB();

      }, []);

    if (importer.length !== 0){
        var full_list = [
            ['Importer', importer['Address'], JSON.stringify(importer['auth']) ],
            ['Issuing Bank', issuingBank['Address'], JSON.stringify(issuingBank['auth']) ],
            ['Advising Bank', advisingBank['Address'], JSON.stringify(advisingBank['auth']) ],
            ['Exporter', exporter['Address'], JSON.stringify(exporter['auth']) ]
        ];
    console.log(importer['Address']);

    return (
        <CardBody>
        <Table
        tableHeaderColor="primary"
        tableHead={['Type', 'Address', 'Authenticate']}
        tableData={full_list}
        />
        </CardBody>


    )
    }
}



//    letterofcredit.deploy({
//         arguments:[accounts[0], accounts[1], 5, "0xCD0AA9856147B6C5B4FF2B7DFEE5DA20AA38253099EF1B4A64ACED233C9AFE29"]
//     }).send().on('receipt', function(receipt){
//         console.log('reciept', receipt)
//     });

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
        

//   return (

//     <>  {contracts}</>
//   )
// };
