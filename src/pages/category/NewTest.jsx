import React, { Component } from 'react'

class NewTest extends Component {
    constructor (props) {
    super(props)
    this.state = {
    routes: []  // 路由列表
        }
    }
    
    render () {
        return (
        <ul className="test-wrapper">
            側邊欄
        </ul>
            )
        }
    }

export default NewTest;