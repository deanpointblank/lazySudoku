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
        const currentBoard = [...this.state.board]
        currentBoard[rowID][rowValue][valuePosition] = value
        console.log(rowID, rowValue, valuePosition)
        console.log(currentBoard)
        if (value == '' || value < 10 && value > 0){
            this.setState({
            board: currentBoard
            })
        }

    }

    checkBoardSolution = () => {
        let currentBoard = []
        this.state.board.forEach((section) => {
            section.forEach((row) => {
                currentBoard.push(row)
            })
        })
        //checks line by line horizontally
        currentBoard.forEach((row)=>{
            let currentRow = [...new Set(row)]
            console.log(currentRow.length === 9)
        })
        // checks line by line vertically
        // let boardCols = []
        // for(let i = 0; i < boardRows.length; i++){
        //     for(let j = 0; j < boardRows[i].length; j++){
        //         boardCols.push(boardRows[i][j])
        //         if(boardCols.length === 9){
        //             let currentCol = [...new Set(boardCols)]
        //             console.log(currentCol.length === 9)
        //             boardCols = []
        //         }
        //     }
        // }

        //checks box by box
    }
    
    render(){
        return(
            <>
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
                <button onClick={event => {this.checkBoardSolution()}}>Submit</button><button>Solve</button><button>New Game</button>
            </>
        )
    }
}
{/* 
-Solve Sudoku Board
--Check If Board Is Correct
--Highlight Wrong Numbers
---Signal Correct/Incorrect based on search

-Generate a new game of Sudoku

 */}