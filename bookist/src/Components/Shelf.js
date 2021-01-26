import React, {Component} from 'react'


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

            <dl className='test'>
                {this.props.shelf.map(row => (
                    <React.Fragment key={row.title}>
                    </React.Fragment>
                ))}
            </dl>
                        

                    
        )
    }
}
export default Shelf


// function welcome(){
//     let shelfBooks = this.props.shelf.map(product => <div>{product}</div>)
//     return shelfBooks
// }
// export default welcome