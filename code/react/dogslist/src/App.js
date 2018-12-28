import React, { Component } from 'react';
import DogsListContainer from './components/DogsListContainer'
import './App.css';
import { Route} from 'react-router-dom'
import DogBreedImages from './components/DogBreedImages'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <body>
          <main>
              <Route exact path="/" component={DogsListContainer}/> 
              <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
            </main>
        </body>
      </div>
    );
  }
}

export default App;
