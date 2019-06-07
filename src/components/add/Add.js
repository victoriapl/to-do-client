import React, { Component } from 'react'
import AddForm from './AddForm'
import AddToDoService from '../../services/data'

const service = new AddToDoService()

class Add extends Component {

  state={
    data: {
      what: '',
      where: '',
      when: '',
      colour: 'green',
    }
  }

  handleInputs = e => {
    const { data } = this.state
    data[e.target.name] = e.target.value
    this.setState(data)
  }

  handleSubmit = e => {
    e.preventDefault()
    const { data } = this.state
    service
      .addToDo(data)
      .then(res =>{
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <nav className="navHome" style={{backgroundColor: '#f9c589'}}>
          <h1>ADD</h1>
        </nav>
        <AddForm handleInputs={this.handleInputs} handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default Add