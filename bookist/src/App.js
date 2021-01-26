import React, {Component} from 'react'
import './App.css';
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import data from './data'

class App extends Component {
    constructor() {
      super()

      this.state = {
        books: data,
        shelf: []
      }
      this.addToShelf = this.addToShelf.bind(this)
    }

    addToShelf(title) {
      this.setState({
        shelf: this.state.shelf.push(title)
      })
    }


  render() {
  return (
    <div className="App">
     <div className='grid'>

      {/* <Header /> */}
      <BookList add={this.addToShelf} books={this.state.books} />
      <Shelf shelf = {this.state.shelf}/>
     </div>

    </div>
  );
}
}
export default App
