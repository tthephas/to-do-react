import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'
import DoneItems from './DoneItems'

class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map((item, index) => (
      <ListItem task={item} key={index} />
      ))
      let doneItems = this.props.doneList.map((item, index) => (
        <DoneItems task={item} key={index} />
        ))
    return (
      <div>
        <h1> Things i need to do and stop procrastinating! </h1>
          <ul>
            {todoItems}

          </ul>
          <h1> Things i did yesterday. GREAT JOB, YOU ARE SO PRODUCTIVE!  </h1>
          <ul>
            {doneItems}

          </ul>
      </div>
    )
  }
}

export default MyList
