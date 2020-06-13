import React, { Component } from 'react'

export const GameRow = (props) => {
    return(
        <div className="gameRow">
            <div className="gameCellBlock">
                <div className="gameRow">
                    <div className="gameCellRow">
                        <div className="gameCell" value={props.row[0][0]}></div>
                        <div className="gameCell" value={props.row[0][1]}></div>
                        <div className="gameCell" value={props.row[0][2]}></div>
                    </div>
                    <div className="gameCellRow">
                        <div className="gameCell" value={props.row[0][3]}></div>
                        <div className="gameCell" value={props.row[0][4]}></div>
                        <div className="gameCell" value={props.row[0][5]}></div>
                    </div>
                    <div className="gameCellRow">
                        <div className="gameCell" value={props.row[0][6]}></div>
                        <div className="gameCell" value={props.row[0][7]}></div>
                        <div className="gameCell" value={props.row[0][8]}></div>
                    </div>
                </div>
                <div className="gameRow">
                    <div className="gameCellRow">
                        <div className="gameCell" value={props.row[1][0]}></div>
                        <div className="gameCell" value={props.row[1][1]}></div>
                        <div className="gameCell" value={props.row[1][2]}></div>
                    </div>
                    <div className="gameCellRow">
                        <div className="gameCell" value={props.row[1][3]}></div>
                        <div className="gameCell" value={props.row[1][4]}></div>
                        <div className="gameCell" value={props.row[1][5]}></div>
                    </div>
                    <div className="gameCellRow">
                        <div className="gameCell" value={props.row[1][6]}></div>
                        <div className="gameCell" value={props.row[1][7]}></div>
                        <div className="gameCell" value={props.row[1][8]}></div>
                    </div>
                </div>
                <div className="gameRow">
                    <div className="gameCellRow">
                        <div className="gameCell" value={props.row[2][0]}></div>
                        <div className="gameCell" value={props.row[2][1]}></div>
                        <div className="gameCell" value={props.row[2][2]}></div>
                    </div>
                    <div className="gameCellRow">
                        <div className="gameCell" value={props.row[2][3]}></div>
                        <div className="gameCell" value={props.row[2][4]}></div>
                        <div className="gameCell" value={props.row[2][5]}></div>
                    </div>
                    <div className="gameCellRow">
                        <div className="gameCell" value={props.row[2][6]}></div>
                        <div className="gameCell" value={props.row[2][7]}></div>
                        <div className="gameCell" value={props.row[2][8]}></div>
                    </div>
                </div>
            </div>
        </div> 
    )
}