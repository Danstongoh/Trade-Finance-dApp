import React, { useState, useEffect } from "react";
import Web3 from 'web3';
import {contractDetails} from './contractJSON';
import Notifications from 'views/Notifications/Notifications'
import Table from "components/Table/Table.js";
import CardBody from "components/Card/CardBody.js";
import {userPassword} from "./contract-data";
var accounts = ["0xce7ffb3b50da50e6831155a3e8fdc07fea5b25e4", "0x27b2f32be5591435c5df926af2bb70a10e43ef61", "0xf9087bceb2aec9c6cc9fd1b7ba633ca43c614e40", "0xea2810ee8d0f55929bf812cb157a72b5166d891d", "0xa600acdd67c3b4a899a10ce131d82ae8d5d57d12","0xf6f9f75f6c504777d9d2e402852e75eab110c9af", "0x42d055d57bf9b5e6dacfaed96fa49015107eea4a"];
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

 export default function TestSend (param) {
    var deployedContract = new web3.eth.Contract(contractDetails, param);

    const [hasError, setErrors] = useState(false);
    // const [contracts, changeDetails] = useState([]);
    const [result, changeState] = useState([]);
 

    async function login(num) {
        await web3.eth.personal.unlockAccount("0x27b2f32be5591435c5df926af2bb70a10e43ef61", "123", 600)
           .then(console.log)
           .catch(err => setErrors(err));
       }
    // async function getImporter2() {
    //     await web3.eth.personal.unlockAccount("0xea2810ee8d0f55929bf812cb157a72b5166d891d", "123456", 600)
    //        .then(console.log)
    //        .catch(err => setErrors(err));
    //    }
    async function action () {
    deployedContract.methods.exporterInit('0xa600acdd67c3b4a899a10ce131d82ae8d5d57d12').send(
        {from:'0xea2810ee8d0f55929bf812cb157a72b5166d891d'}
        ).then(receipt => changeState(receipt))
         .catch(err => setErrors(err));
       }

    // <button onClick={handleClickDecrement}>Decrement</button>

    async function action () {
    deployedContract.methods.advisingBankInit('0xa600acdd67c3b4a899a10ce131d82ae8d5d57d13').send(
        {from:'0x27b2f32be5591435c5df926af2bb70a10e43ef61'}
        ).then(receipt => changeState(receipt['blockNumber']))
         .catch(err => setErrors(err));
       }

    
      useEffect(() => {
        action();
        login();
      }, []);

    if (result.length !== 0){
        console.log(result);
        //Notifications();
    }

    return (
        <CardBody>
        <Table
        tableHeaderColor="primary"
        tableHead={['Type', 'Address', 'Authenticate']}
        tableData={[]}
        />
        </CardBody>
    )
    
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
    // deployedContract.methods.advisingBankInit('0xea2810ee8d0f55929bf812cb157a72b5166d891d').send(
    //     {from:'0x27b2f32be5591435c5df926af2bb70a10e43ef61'}
    //     ).on('receipt', function(receipt){
    //         console.log('receipt', receipt)
    //     });
    // deployedContract.methods.advisingBankConfirm().send(
    //     {from:'0xea2810ee8d0f55929bf812cb157a72b5166d891d'}
    //     ).on('receipt', function(receipt){
    //         console.log('receipt', receipt)
    //     });
        

