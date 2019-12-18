import React, { Component } from 'react';
import { Counters } from '../Components/Counters'

import * as actionType from '../../Store/Actions/actionType'

import { groupClick, storeResult, addCounter, subtractCounter, add10, subtract10 } from '../../Store/Actions/counterActions'

import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    ctr: state.counterReducer.counter,
    storeResult: state.counterReducer.results,
    calScreen: state.counterReducer.calScreen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStoreCounter: () => dispatch(storeResult()),
    onAddCounter: () => dispatch(addCounter()),
    onSubtractCounter: () => dispatch(subtractCounter()),
    onAdd10: (val) => dispatch(add10(val)),
    onSubtract10: (val) => dispatch(subtract10(val)),
    onGroupClick: (evt) => dispatch(groupClick(evt))

  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Counters);
