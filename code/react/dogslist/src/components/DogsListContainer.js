import React, { Component } from 'react'
import request from 'superagent'
import Dogslist from './DogsList'


export default class DogsListContainer extends Component {
    state = { dogBreeds: null }

    componentDidMount() {
        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                const breeds = Object.keys(response.body.message)
                this.updateBreeds(breeds)
            })
            .catch(console.error)
    }

    updateBreeds(breeds) {
        this.setState({
            dogBreeds: breeds
        })
    }

    render() {
        return <Dogslist dogBreeds={this.state.dogBreeds} />
                
    }

}