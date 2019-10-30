import React, { useEffect } from 'react'
import { Tile } from './Tile';
import './users.css'


export function Users({ userData, onInitUsers, onShowUserDetails }) {

    useEffect(() => {
        onInitUsers()
    }, []);

    return (
        <div className='container main'>
            <h1>Registered Users </h1>
            <div className='row tiles'>
                {userData.map(user => {
                    return (
                        <Tile key={user.id} data={user} clickHandler={ () => onShowUserDetails(user.id)} />
                    )
                })}
            </div>
            
          
<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}