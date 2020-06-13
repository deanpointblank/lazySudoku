import React, { Component } from 'react';
import { GameRow } from '../Components/GameRow';

export default class GameBoard extends Component{
    constructor(){
        super()
        this.state = {
            board:  [
                        [
                            ['','','','','','','','',''],
                            ['','','','','','','','',''],
                            ['','','','','','','','','']
                        ],
                        [
                            ['','','','','','','','',''],
                            ['','','','','','','','',''],
                            ['','','','','','','','','']
                        ],
                        [
                            ['','','','','','','','',''],
                            ['','','','','','','','',''],
                            ['','','','','','','','','']
                        ]
                    ]
        }
    }

    changeBoard = (position, value) => {
        this.setState({
           board: this.state.board[position] = value
        })

    }
    
    render(){
        return(
            <table className="mainBoard">
                <colgroup><col/><col/><col/></colgroup>
                <colgroup><col/><col/><col/></colgroup>
                <colgroup><col/><col/><col/></colgroup>
                <tbody>
                    <GameRow row={this.state.board[0]}/>
                </tbody>
                <tbody>
                    <GameRow row={this.state.board[1]}/>
                </tbody>
                <tbody>
                    <GameRow row={this.state.board[2]}/>
                </tbody>

            </table>
        )
    }
}
{/* 
// Task diaplay baord in grid fashion
//-->How though? Css Grid?
//-->
//-->
// add ability to type inputs into board */}