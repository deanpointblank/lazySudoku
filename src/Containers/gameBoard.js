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
        // console.log(rowID, rowValue, valuePosition)
        // console.log(currentBoard)
        if (value === '' || value < 10 && value > 0){
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
        let col = []

        for (let i = 0; i < currentBoard.length; i++){
            for(let j = 0; j < currentBoard[i].length; j++){
                col.push(currentBoard[i][j])
                if(j === 8){
                    col = [...new Set(col)]
                    console.log(col.length === 9)
                    col = []
                }
            }
        }

        //checks box by box
        let box1 = []
        let box2 = []
        let box3 = []
        for(let i = 0; i < currentBoard.length; i++){
            box1.push(currentBoard[i].slice(0,3))
            box2.push(currentBoard[i].slice(2,3))
            box3.push(currentBoard[i].slice(5,3))
            if(box1.length === 3){
               box1 = [...new Set(box1.flat())]
               box2 = [...new Set(box2.flat())]
               box3 = [...new Set(box3.flat())]
               console.log(box1)
               console.log(box1.length === 9)
               console.log(box2)
               console.log(box2.length === 9)
               console.log(box3)
               console.log(box3.length === 9)
               box1 = []
               box2 = []
               box3 = []
            }
        }
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