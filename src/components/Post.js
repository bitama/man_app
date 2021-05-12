import React, {Component} from 'react'
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
                likes: this.props.likes
        }
    }
    render() {
        const increaseLikes = () => {
            console.log(`clicked like on ${this.props.poster} s Post`)
            this.setState({ likes: this.state.likes + 1 })
        }
        return(
            <div className="border">
                <h3>posted by:{this.props.poster}</h3>
                <h1>{this.props.title}</h1>
                <h1>likes:{this.state.likes} RT:34</h1>
                <button onClick={increaseLikes} className="btn btn-primary mb-3">like</button>
                
                
            </div>
        )
    }
}
export default Post