import React from 'react'

export function Tile(props) {
    const classNames = ['alert-primary', 'alert-secondary', 'alert-success', 'alert-danger', 'alert-warning', 'alert-info', 'alert-dark'];

    const randomClass = classNames[Math.floor(Math.random() * classNames.length)]
    const classes = `col-md-4 alert ${randomClass}`

    return (
        <div className={classes} role="alert" style={{ textAlign: 'left' }} >
            <button 
                style={{ float: 'right' }} 
                onClick={() => props.clickHandler(props.data.id)}>
                    Nitin</button>
            {props.data.name}
        </div>
    )
}