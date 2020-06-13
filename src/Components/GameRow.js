import React, { Component } from 'react'

export const GameRow = (props) => {
    return(
            <>
            <tr>
                <td className="gameCell" value={props.row[0][0]}></td>
                <td className="gameCell" value={props.row[0][1]}></td>
                <td className="gameCell" value={props.row[0][2]}></td>

                <td className="gameCell" value={props.row[0][3]}></td>
                <td className="gameCell" value={props.row[0][4]}></td>
                <td className="gameCell" value={props.row[0][5]}></td>

                <td className="gameCell" value={props.row[0][6]}></td>
                <td className="gameCell" value={props.row[0][7]}></td>
                <td className="gameCell" value={props.row[0][8]}></td>
            </tr>
            <tr>
                <td className="gameCell" value={props.row[1][0]}></td>
                <td className="gameCell" value={props.row[1][1]}></td>
                <td className="gameCell" value={props.row[1][2]}></td>

                <td className="gameCell" value={props.row[1][3]}></td>
                <td className="gameCell" value={props.row[1][4]}></td>
                <td className="gameCell" value={props.row[1][5]}></td>

                <td className="gameCell" value={props.row[1][6]}></td>
                <td className="gameCell" value={props.row[1][7]}></td>
                <td className="gameCell" value={props.row[1][8]}></td>
            </tr>
            <tr>
                <td className="gameCell" value={props.row[2][0]}></td>
                <td className="gameCell" value={props.row[2][1]}></td>
                <td className="gameCell" value={props.row[2][2]}></td>

                <td className="gameCell" value={props.row[2][3]}></td>
                <td className="gameCell" value={props.row[2][4]}></td>
                <td className="gameCell" value={props.row[2][5]}></td>

                <td className="gameCell" value={props.row[2][6]}></td>
                <td className="gameCell" value={props.row[2][7]}></td>
                <td className="gameCell" value={props.row[2][8]}></td>
            </tr>
            </>

    )
}