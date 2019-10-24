import React, { Component } from 'react';
import Web3 from 'web3';
import { makeEntity } from 'react-entities';
export const initialState = {
    value: 1
  };

export const increment = counter => by => {
    counter.setState({ value: counter.state.value + by });
  };

export const decrement = counter => by => {
    counter.setState({ value: counter.state.value - by });
  };

// export const initialBlock ={
//       bvalue: 100
// };