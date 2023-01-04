import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Message: 'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            Message: 'GoodBye!'
        })
    }
    newClickHandler = () => {
        this.setState({
            Message: 'GoodBye!'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.Message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>EventBind</button> */}
                {/* <button onClick={()=> this.clickHandler()}>EventBind</button> */}
                <button onClick={this.clickHandler}>EventBind</button>
                {/* <button onClick={this.newClickHandler}>EventBind</button> */}

            </div>
        )
    }
}

export default EventBind
