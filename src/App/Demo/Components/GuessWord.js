import React from 'react'

export const GuessWord = () => {
    return (
        <div className='container'>
            <table className="table">
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Guessed Word</th>
                        <th scope="col">Letter Matched</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>someword</td>
                    <td>2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}