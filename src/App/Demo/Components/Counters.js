import React from 'react'
import Counter from './Counter'
import Buttons from '../Components/Button'
import * as actionType from '../../Store/Actions/actionType'
import { CounterRow } from '../Components/CounterRow'
import './Counters.css'

export function Counters({
    ctr,
    onStoreCounter,
    onAddCounter,
    onSubtractCounter,
    onAdd10,
    onSubtract10,
    storeResult
}) {

   console.log(storeResult)
    const buttonsArr = [7, 8, 9, '/', 4, 5, 6, 'X', 1, 2, 3, '-', 0, '.', '=', '+']
    return (
        <div className="container">
            <h1>Counter</h1>
            <Counter counter={ctr} />
            <br />
            <br />
            <Buttons
                clickHandler={onAddCounter}
                caption={actionType.ADD}
            />
            &nbsp;
          <Buttons
                clickHandler={onSubtractCounter}
                caption={actionType.SUBTRACT_CTR}
            />
            &nbsp;
          <Buttons
            clickHandler={() => onAdd10(10)}
                caption="ADD 10"
            />
            &nbsp;
          <Buttons
            clickHandler={() => onSubtract10(10)}
                caption="SUBTRACT 10"
            />
            <hr />
            <Buttons
                clickHandler={onStoreCounter}
                caption="Store Counter"
            />
            <small>Result will append after 2 seconds</small>
            <hr />
            <br />  
            { storeResult.map((item) => {
                return(
                    <CounterRow data={item}/>
                )
                
            } )}
             <br /><br /> 

            <h1>Simple Calculator</h1>

            <div className="container calculatorContainer">

            <div className='row'> 
                <input type='text' value='0' /> 
                
                <br /> <br />
                <div className="row">
                    {

                        buttonsArr.map(button => {
                            return <div className="col-3">
                                <Buttons caption={button} buttonclass='calButton' clickHandler='onButtonGroupClick' />
                            </div>
                        })
                    }
                </div>
            </div>
            </div>
        </div>
    );
}
