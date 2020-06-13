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

    updateBoard = (position, value) => {
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
                    <GameRow row={this.state.board[0]} updateBoard={this.updateBoard}/>
                </tbody>
                <tbody>
                    <GameRow row={this.state.board[1]} updateBoard={this.updateBoard}/>
                </tbody>
                <tbody>
                    <GameRow row={this.state.board[2]} updateBoard={this.updateBoard}/>
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