import React, {Component} from 'react'
class BookList extends Component{
    constructor(){
        super()
    }

    render(){
        return (
            <dl className='test'>
                {this.props.books.map(book => (
                    <React.Fragment key={book.title}>
                        <p className='test2' onClick={this.props.add}>
                            <img src={book.img}></img>
                            <br/>{book.title} 
                             <br/>By: {book.author}
                        </p>
                        
                        {/* <p>{book.title}</p> */}
                        
                        {/* <p>By: {book.author}</p> */}
                    </React.Fragment>

                    
                ))}
            </dl>
        )
    }
}
export default BookList


// function Welcome(props){
//     let mappedBooks = this.props.books.map(product => <div>{product}</div>)
//     return mappedBooks
// }
// export default mappedBooks