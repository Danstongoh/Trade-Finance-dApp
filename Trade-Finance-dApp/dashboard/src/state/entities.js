//import React, { Component } from 'react';
import { makeEntity } from 'react-entities';
import {initialState, increment, decrement} from './counter';

export const useCounter = makeEntity({initialState, increment, decrement});
