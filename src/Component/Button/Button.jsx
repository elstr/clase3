// 1- import react y component [X]
// 2- class Button [x]
// 3- exportarlo    [x]

import React, {Component} from "react"

export default class Button extends Component {
    render() {
        const {handleClick} = this.props
        return(
            <button onClick={handleClick}>[+]</button>
        )
    }
}



