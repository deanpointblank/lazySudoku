import React, { Component } from 'react'

export const GameRow = (props) => {
    return(
            <>
            <tr>
                <td><input className="gameCell" type="text" value={props.rowValues[0][0]} onChange={event => props.updateBoard(props.rowID, [0, 0], event.target.value)} /></td>
                <td><input className="gameCell" type="text" value={props.rowValues[0][1]} onChange={event => props.updateBoard(props.rowID, [0, 1], event.target.value)} /></td>
                <td><input className="gameCell" type="text" value={props.rowValues[0][2]} onChange={event => props.updateBoard(props.rowID, [0, 2], event.target.value)} /></td>

                <td><input className="gameCell" type="text" value={props.rowValues[0][3]} onChange={event => props.updateBoard(props.rowID, [0, 3], event.target.value)} /></td>
                <td><input className="gameCell" type="text" value={props.rowValues[0][4]} onChange={event => props.updateBoard(props.rowID, [0, 4], event.target.value)} /></td>
                <td><input className="gameCell" type="text" value={props.rowValues[0][5]} onChange={event => props.updateBoard(props.rowID, [0, 5], event.target.value)} /></td>

                <td><input className="gameCell" type="text" value={props.rowValues[0][6]} onChange={event => props.updateBoard(props.rowID, [0, 6], event.target.value)} /></td>
                <td><input className="gameCell" type="text" value={props.rowValues[0][7]} onChange={event => props.updateBoard(props.rowID, [0, 7], event.target.value)} /></td>
                <td><input className="gameCell" type="text" value={props.rowValues[0][8]} onChange={event => props.updateBoard(props.rowID, [0, 8], event.target.value)} /></td>
            </tr>
            <tr>
                <td><input className="gameCell" type="text" value={props.rowValues[1][0]} onChange={event => props.updateBoard(props.rowID, [1, 0], event.target.value)} /></td>
                <td><input className="gameCell" type="text" value={props.rowValues[1][1]} onChange={event => props.updateBoard(props.rowID, [1, 1], event.target.value)} /></td>
                <td><input className="gameCell" type="text" value={props.rowValues[1][2]} onChange={event => props.updateBoard(props.rowID, [1, 2], event.target.value)} /></td>

                <td><input className="gameCell" type="text" value={props.rowValues[1][3]} onChange={event => props.updateBoard(props.rowID, [1, 3], event.target.value)} /></td>
                <td><input className="gameCell" type="text" value={props.rowValues[1][4]} onChange={event => props.updateBoard(props.rowID, [1, 4], event.target.value)} /></td>
                <td><input className="gameCell" type="text" value={props.rowValues[1][5]} onChange={event => props.updateBoard(props.rowID, [1, 5], event.target.value)} /></td>

                <td><input className="gameCell" type="text" value={props.rowValues[1][6]} onChange={event => props.updateBoard(props.rowID, [1, 6], event.target.value)} /></td>
                <td><input className="gameCell" type="text" value={props.rowValues[1][7]} onChange={event => props.updateBoard(props.rowID, [1, 7], event.target.value)} /></td>
                <td><input className="gameCell" type="text" value={props.rowValues[1][8]} onChange={event => props.updateBoard(props.rowID, [1, 8], event.target.value)} /></td>
            </tr>
            <tr>
                <td><input className="gameCell" type="text" value={props.rowValues[2][0]} onChange={event => props.updateBoard(props.rowID, [2, 0], event.target.value)} /></td>
                <td><input className="gameCell" type="text" value={props.rowValues[2][1]} onChange={event => props.updateBoard(props.rowID, [2, 1], event.target.value)} /></td>
                <td><input className="gameCell" type="text" value={props.rowValues[2][2]} onChange={event => props.updateBoard(props.rowID, [2, 2], event.target.value)} /></td>

                <td><input className="gameCell" type="text" value={props.rowValues[2][3]} onChange={event => props.updateBoard(props.rowID, [2, 3], event.target.value)} /></td>
                <td><input className="gameCell" type="text" value={props.rowValues[2][4]} onChange={event => props.updateBoard(props.rowID, [2, 4], event.target.value)} /></td>
                <td><input className="gameCell" type="text" value={props.rowValues[2][5]} onChange={event => props.updateBoard(props.rowID, [2, 5], event.target.value)} /></td>

                <td><input className="gameCell" type="text" value={props.rowValues[2][6]} onChange={event => props.updateBoard(props.rowID, [2, 6], event.target.value)} /></td>
                <td><input className="gameCell" type="text" value={props.rowValues[2][7]} onChange={event => props.updateBoard(props.rowID, [2, 7], event.target.value)} /></td>
                <td><input className="gameCell" type="text" value={props.rowValues[2][8]} onChange={event => props.updateBoard(props.rowID, [2, 8], event.target.value)} /></td>
            </tr>
            </>

    )
}