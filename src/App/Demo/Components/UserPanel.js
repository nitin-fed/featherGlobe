import React from 'react'
import './panel.css'

export function UserPanel(props) {

    let dataArr = []

    for (const key in props.data) {
        if (props.data.hasOwnProperty(key)) {
            dataArr.push({ key: key, val: props.data[key] })
        }
    }

    if (props.show) {

        return (
            <div className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button onClick={props.clicked} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                {dataArr.map((item) => {
                                    if (typeof (item.val) != 'object') {
                                        return (
                                            <div className="row" key={item.key}>
                                                <div className="col-md-4">{item.key}</div>
                                                <div className="col-md-8">{item.val}</div>
                                            </div>
                                        )
                                    }
                                })
                                }
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={props.clicked}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            null
        )
    }
}