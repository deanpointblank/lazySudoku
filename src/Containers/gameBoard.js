import React, { Component } from 'react';
import GameRow from '../Components/GameRow';

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
    
    render(){
        return(
            <section className="mainBoard">
                <GameBoard row={this.state.board[0][0]}/>
                <GameBoard row={this.state.board[0][1]}/>
                <GameBoard row={this.state.board[0][2]}/>

            </section>
        )
    }
}