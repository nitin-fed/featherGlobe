import React, { useEffect } from 'react'
import { Tile } from './Tile';
import './users.css'

import Backdrop from '../../Components/Backdrop/Backdrop'
import { UserPanel } from './UserPanel';


export function Users({selectedUser, userData, onInitUsers, onShowUserDetails, showBackDrop, onBackdropClicked }) {

    useEffect(() => {
        onInitUsers()
    }, []);

    return (

        <div className='container main'>
          <Backdrop show={showBackDrop} clicked={onBackdropClicked}  />
            <h1>Registered Users </h1>
            <div className='row tiles'>
                {userData.map(user => {
                    return (
                        <Tile key={user.id} data={user} clickHandler={ () => onShowUserDetails(user.id)} />
                    )
                })}
            </div>
            
            <UserPanel show={showBackDrop} data={selectedUser} clicked={onBackdropClicked}  />
        </div>
    )
}