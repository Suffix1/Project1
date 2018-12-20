import React, { Component } from 'react'
import Player from './Player'
import './Scoreboard.css'
import AddPlayer from "./AddPlayer"



export default class Scoreboard extends Component {
    state = {
        players: [
            {
              id: 1,
              name: 'Wouter',
              score: 2
            },
            {
              id: 2,
              name: 'Mimi',
              score: 5
            },
            {
              id: 3,
              name: 'Milan',
              score: 4
            }
          ]
        }     
    
   
        render() {
            return (
              <div className="scoreboard">
                <h1>Scoreboard</h1>
                <ul>
                  {
                    this.state.players
                      .sort((a, b) => b.score - a.score)
                      .map(this.renderPlayer)
                  }
                </ul>
                <AddPlayer addPlayer={this.addPlayer}/>
              </div>
            )
          }

          renderPlayer = (player) => {
            return (
              <Player
                id={player.id}
                name={player.name}
                score={player.score}
                key={player.id}
                updatePlayerScore={this.updatePlayerScore}
              />
            )
          }
        

          updatePlayerScore = (id, score) => {
            const updatedPlayers = this.state.players.map(
                player => {
                    if (player.id === id) {
                        return {
                            ...player, 
                            score
                        }
                    }
                else {
                    return player
                }
                }
            )
            this.setState({ players: updatedPlayers })
        }

        addPlayer = (name) => {
          const player = {
            id: Math.round(Math.random()*1000000),
            name,
            score: 0
          }
          this.setState({
            players: this.state.players.concat(player)
          })
        }
}