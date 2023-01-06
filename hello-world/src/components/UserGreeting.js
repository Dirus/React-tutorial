import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true
      }
    }
    

    render() {
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Hello Subscriber</div>
        // } else {
        //     message = <div>Hello Guest</div>
        // }
        // return <div>{message}</div>
        return this.state.isLoggedIn ? (
            <div>Hello Subscriber</div>
        ) : (
            <div>Welcome Guest</div>
        )
    }
}

export default UserGreeting
