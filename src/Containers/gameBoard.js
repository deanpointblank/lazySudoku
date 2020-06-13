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
            <section className="mainBoard">
                <GameRow row={this.state.board[0]}/>
                <GameRow row={this.state.board[1]}/>
                <GameRow row={this.state.board[2]}/>

            </section>
        )
    }
}