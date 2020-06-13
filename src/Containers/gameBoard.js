import React, { Component } from 'react';
import GameRow from '../Components/GameRow';

export default class GameBoard extends Component{
    constructor(){
        super()
        this.state = {
            board: []
        }
    }
    
    render(){
        return(
            <section className="mainBoard">
                <GameBoard />
            </section>
        )
    }
}