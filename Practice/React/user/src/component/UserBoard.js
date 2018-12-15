import React, { Component } from 'react'
import User from './User'

export default class UserBoard extends Component {
    state = {
        Users: [
            {
                id: 1, 
                name: 'Wouter',
                score: 2
            },
            {
                id: 2, 
                name:'Annika',
                score: 1
            },
            {
                id: 3, 
                name: 'Rex',
                score: 5
            }
        ]
        
    }


renderUser = (user) => {
    return <User
        name={user.name}
        score={user.score}
        key={user.id}
    />
}

render() {
    return (
        <div className="userboard">
        <h1>Userboard</h1>
        <ul> 
            {
                this.state.Users
                .sort((a, b) => b.score - a.score)
                .map(this.renderUser)                
            }
        </ul>       
        
        </div>
    )
}
}
