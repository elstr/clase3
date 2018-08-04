// 1- import react y component [X]
// 2- class Button [x]
// 3- exportarlo    [x]


import React, {Component} from "react"

export default class Result extends Component {
    render() {
        const {resultado} = this.props
        return (
            <p>This is the result: {resultado} </p>
        )
    }
}