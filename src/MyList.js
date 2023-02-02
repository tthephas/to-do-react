import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {
  render() {
    return (
      <div>
        <h1> Things i need to do and stop procrastinating! </h1>
          <ul>
            <ListItem task="Buy Ice Cream" />
          </ul>

        
      </div>


    )
  }
}

export default MyList
