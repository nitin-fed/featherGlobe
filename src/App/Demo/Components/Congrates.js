import React from 'react'

export const Congrates = (props) => {
    let success = false;
    let content = null;
    if (success) {
        content = (<span className='alert alert-success'>Congratulation... you guessed correctly.</span>)
    } else {
        content = (
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <input type='test' />
                        </div>

                        <div class="col-sm">
                            <button onClick={ () => props.clickHandler()} type='submit'>Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    return (
        <div >
            {content}

        </div>
    )
}