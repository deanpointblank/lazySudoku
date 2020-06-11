import React, { Component } from 'react'

export default class GameBoard extends Component{
    constructor(){
        super()
        this.state = {
            board: []
        }
    }
    
    render(){
        return(
            <section>
                <p>This is where the game goes</p>
            </section>
        )
    }
}