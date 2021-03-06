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
            box2.push(currentBoard[i].slice(3,6))
            box3.push(currentBoard[i].slice(6,9))
            if(box1.length === 3){
               box1 = [...new Set(box1.flat())]
               box2 = [...new Set(box2.flat())]
               box3 = [...new Set(box3.flat())]
               console.log(box1.length === 9)
               console.log(box2.length === 9)
               console.log(box3.length === 9)
               box1 = []
               box2 = []
               box3 = []
            }
        }
    }
    testBoard = () =>{
        this.setState({
            board:  [
                        [
                            [8,2,7,1,5,4,3,9,6],
                            [9,6,5,3,2,7,1,4,8],
                            [3,4,1,6,8,9,7,5,2]
                        ],
                        [
                            [5,9,3,4,6,8,2,7,1],
                            [4,7,2,5,1,3,6,8,9],
                            [6,1,8,9,7,2,4,3,5]
                        ],
                        [
                            [7,8,6,2,3,5,9,1,4],
                            [1,5,4,7,9,6,8,2,3],
                            [2,3,9,8,4,1,5,6,7]
                        ]
                    ]
        })
    }

    solveRow = () =>{

    }

    solveCol = () =>{

    }

    SolveBox = () =>{

    }


    solveBoard = () =>{
        // step1: turn board into 2d Array
        let currentBoard = [...this.state.board].flat()
        // step2: for every cell, check to see if there is already a value
        for (let i = 0; i < currentBoard.length; i++){
            for (let j = 0; j < currentBoard[i].length; j++){
                console.log(currentBoard[i][j] !== "")
            }
        }
        // step3: check if a number between 1 and 9 is compatible with the restrictions

        // step3a: return true if this row constains number
        // step3b: return true if this row constains number
        // step3c: return true if this box constains number
        // step3d: 

        // step3: if no number is compatible, backtrack:
        /// -> step3a: 
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
                <button onClick={event => {this.checkBoardSolution()}}>Submit</button><button onClick={event => {this.solveBoard()}}>Solve</button><button>New Game</button><button onClick={event => {this.testBoard()}}>Test Board</button>
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