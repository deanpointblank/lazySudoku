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
            <section className="mainBoard">
                <div className="gameRow">
                    <div className="gameCellBlock">
                        <div className="gameRow">
                            <div className="gameCellRow">
                                <div className="gameCell">1</div>
                                <div className="gameCell">2</div>
                                <div className="gameCell">3</div>
                            </div>
                            <div className="gameCellRow">
                                <div className="gameCell">4</div>
                                <div className="gameCell">5</div>
                                <div className="gameCell">6</div>
                            </div>
                            <div className="gameCellRow">
                                <div className="gameCell">7</div>
                                <div className="gameCell">8</div>
                                <div className="gameCell">9</div>
                            </div>
                        </div>
                        <div className="gameRow">
                            <div className="gameCellRow">
                                <div className="gameCell">1</div>
                                <div className="gameCell">2</div>
                                <div className="gameCell">3</div>
                            </div>
                            <div className="gameCellRow">
                                <div className="gameCell">4</div>
                                <div className="gameCell">5</div>
                                <div className="gameCell">6</div>
                            </div>
                            <div className="gameCellRow">
                                <div className="gameCell">7</div>
                                <div className="gameCell">8</div>
                                <div className="gameCell">9</div>
                            </div>
                        </div>
                        <div className="gameRow">
                            <div className="gameCellRow">
                                <div className="gameCell">1</div>
                                <div className="gameCell">2</div>
                                <div className="gameCell">3</div>
                            </div>
                            <div className="gameCellRow">
                                <div className="gameCell">4</div>
                                <div className="gameCell">5</div>
                                <div className="gameCell">6</div>
                            </div>
                            <div className="gameCellRow">
                                <div className="gameCell">7</div>
                                <div className="gameCell">8</div>
                                <div className="gameCell">9</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}