import React from 'react'
import Counter from './Counter'
import Buttons from '../Components/Button'
import * as actionType from '../../Store/Actions/actionType'
import { CounterRow } from '../Components/CounterRow'
import './Counters.css'

export function Counters({
    ctr,
    calScreen = 0,
    onStoreCounter,
    onAddCounter,
    onSubtractCounter,
    onAdd10,
    onSubtract10,
    storeResult,
    onGroupClick
}) {

    console.log(storeResult)
    const buttonsArr = [7, 8, 9, '/', 4, 5, 6, 'X', 1, 2, 3, '-', 0, '.', '=', '+']
    return (
        <div className="container">
            <h1>Counter</h1>
            <Counter counter={ctr} />
            <br />
            <br />
            <Buttons key='add'
                clickHandler={onAddCounter}
                caption={actionType.ADD}
            />
            &nbsp;
          <Buttons key='subtranct'
                clickHandler={onSubtractCounter}
                caption={actionType.SUBTRACT_CTR}
            />
            &nbsp;
          <Buttons key='add10'
                clickHandler={() => onAdd10(10)}
                caption="ADD 10"
            />
            &nbsp;
          <Buttons key='sub10'
                clickHandler={() => onSubtract10(10)}
                caption="SUBTRACT 10"
            />
            <hr />
            <Buttons key='storeCounter'
                clickHandler={onStoreCounter}
                caption="Store Counter"
            />
            <small>Result will append after 2 seconds</small>
            <hr />
            <br />
            {storeResult.map((item, index) => {
                return (
                    <CounterRow key={index} data={item} />
                )
            })}
            <br /><br />

            <h1>Simple Calculator</h1>

            <div className="container calculatorContainer">

                <div className='row'>
                    <div className="col-12"><input type='text' value={calScreen} className='calScreen' /> </div>
                </div>

                <div className='row'>
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                    <div className="col-3"><Buttons caption='C' buttonclass='calButton' /></div>
                    <div className="col-3"><Buttons caption='AC' buttonclass='calButton' /></div>
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                </div>

                <div className="row">
                    {
                        buttonsArr.map((button, index) => {
                            return <div key={index} className="col-3">
                                <Buttons datalabel={button} caption={button} buttonclass='calButton' clickHandler={(evt) => onGroupClick(evt)} />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}
