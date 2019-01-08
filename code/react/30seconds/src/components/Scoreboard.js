import React, { Component } from 'react'
import Player from './Player'


const players = [
    {
        id: 1,
        name: "Wouter",
        score: 3
    },

    {
        id: 2,
        name: "Annika",
        score: 4
    }
]

export default class Scoreboard extends Component {

    renderPlayer(player) {
        return (
            <Player
                name={player.name}
                score={player.score}
                />
        )
    }

    render() {
        return (
            <div className="scoreboard">
                <h1>Scorebaord</h1>
                <ul>
                    {
                        players
                            .sort((a, b) => b.score - a.score)
                            .map(this.renderPlayer)
                    }
                </ul>
            </div>
        )
    }



}