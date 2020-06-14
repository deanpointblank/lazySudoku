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

    updateBoard = (rowID, position, value) => {
        const rowValue = position[0]
        const valuePosition = position[1]
        const currentBoard = {...this.state.board}
        currentBoard[rowID][rowValue][valuePosition] = value
        console.log(rowID, rowValue, valuePosition)
        console.log(currentBoard)
        if (value == '' || value < 10 && value > 0){
            this.setState({
            board: currentBoard
            })
        }

    }
    
    render(){
        return(
            <table className="mainBoard">
                <colgroup><col/><col/><col/></colgroup>
                <colgroup><col/><col/><col/></colgroup>
                <colgroup><col/><col/><col/></colgroup>
                <tbody>
                    <GameRow rowID={0} rowValues={this.state.board[0]} updateBoard={this.updateBoard}/>
                </tbody>
                <tbody>
                    <GameRow rowID={1} rowValues={this.state.board[1]} updateBoard={this.updateBoard}/>
                </tbody>
                <tbody>
                    <GameRow rowID={2} rowValues={this.state.board[2]} updateBoard={this.updateBoard}/>
                </tbody>

            </table>
        )
    }
}
{/* 
-Task diaplay baord in grid fashion
-Validations for each grid
--numbers only between 0 & 10
 */}