import React, { Component } from "react";
import { render } from "react-dom";
import "./Hello.css"

export default class Hello extends Component {
    render() {
        return (
            <h2 className="title">
                Hello.react!
            </h2>
        )
    }
}