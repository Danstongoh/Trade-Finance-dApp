import React, { Component } from 'react';
import Web3 from 'web3';

import {contractDetails} from './contractJSON';
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
var deployedContract = new web3.eth.Contract(contractDetails, "0x2F84804a3dF6584Cd2F5cCD9e75AA1D2c8524aC9");

export const initialState = {
    contracts: ['0xC9bd8521c4Ff42e42888937F425C922D9c08e783', '0x20CdadEFb0E798dDda3F673ad9977eE6cCcA9c96']
  };

export const increment = contract => by => {
    contract.setState({ contracts: contract.state.contracts + by });
  };

export const decrement = contract => by => {
    contract.setState({ contracts: contract.state.contracts - by });
  };

