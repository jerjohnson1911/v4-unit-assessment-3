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

    addToShelf(book) {
      this.setState({
        shelf: [...this.state.shelf, book]
      })
    }


  render() {
  return (
    <div className="App">
     <div className='grid'>

      {/* <Header /> */}
      <BookList addToShelf={this.addToShelf} books={this.state.books} />
      <Shelf add={this.addToShelf} shelf={this.state.shelf}/>
     </div>

    </div>
  );
}
}
export default App
