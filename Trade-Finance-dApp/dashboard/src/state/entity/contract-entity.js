//import React, { Component } from 'react';
import { makeEntity } from 'react-entities';
import {initialState, increment, decrement} from 'state/contract';

export const useContract = makeEntity({initialState, increment, decrement});
