import React, {Component} from 'react'
import Book from './Book'


class Shelf extends Component{
    constructor(){
        super()
    }

    render(){

        
        // let mappedTitles = this.props.shelf.map(row => (row.title)
        //     )

        
        return (
            // <div className='clicked'>
            //     {mappedTitles}
            //     {console.log(mappedTitles)}
            // </div>

            <div className='test'>
                {this.props.shelf.map((book,i) => (
                    <Book 
                        info={book}
                        key={i}
                        // add={this.props.add}
                    />
                ))}
            </div>
                        

                    
        )
    }
}
export default Shelf


// function welcome(){
//     let shelfBooks = this.props.shelf.map(product => <div>{product}</div>)
//     return shelfBooks
// }
// export default welcome