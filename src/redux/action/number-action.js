import * as actionTypes from './action-type';

export const getIncrease = () => ({type: actionTypes.INCREASE})

export const getDecrease = () => ({type: actionTypes.DECREASE})

export const getSet = val => ({type: actionTypes.SETVAL,val})