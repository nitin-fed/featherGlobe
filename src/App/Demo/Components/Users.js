import React from 'react'
import { Tile } from './Tile';
import './users.css'

import Backdrop from '../../Components/Backdrop'
import { UserPanel } from './UserPanel';
import { SearchBar } from './SearchBar';

import { UserProvider, UserContext } from '../Context/UserContext'

export function Users({ selectedUser, onShowUserDetails, showBackDrop, onBackdropClicked }) {
    return (
        <h1>
            List of Registered Users
        </h1>
        // <UserProvider>
        //     <UserContext.Consumer>
        //         {(value) => {   
        //             debugger
        //             console.log(value)
        //             const userData = value;
        //             return (
        //                 <div className='container main'>
        //                     <pre>Using Context API - Data is not fetching from Redux Store</pre>
        //                     <button onClick={(e) => value.onInit(e)}>Submit</button>
        //                     <Backdrop show={showBackDrop} clicked={onBackdropClicked} />
        //                     <h1>Registered Users </h1>
        //                     <SearchBar />
        //                     <div className='row'>
        //                         {userData.map(user => {
        //                             return (
        //                                 <Tile key={user.id} data={user} clickHandler={() => onShowUserDetails(user.id)} />
        //                             )
        //                         })}
        //                     </div>
        //                     <UserPanel show={showBackDrop} data={selectedUser} clicked={onBackdropClicked} />
        //                 </div>
        //             )
        //         }}
        //     </UserContext.Consumer>
        // </UserProvider>
    )
}