import React from 'react'

export const GuessWord = ({ item, onDelete }) => {
    return (
        <tr >
            <td><input type='checkbox' /></td>
            <td  >{item.word}</td>
            <td>{item.lettermatch} <button aria-label={`Item  ${item.id} deleted`}  onClick={() => onDelete(item.id)}>Delete</button></td>
        </tr>
    )
}