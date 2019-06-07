import React, { Component } from 'react'
import Navigation from './Navigation'
import AddToDoService from '../../services/data'
import 'bootstrap/dist/css/bootstrap.min.css'
import classnames from 'classnames'
import '../../App.css'

const service = new AddToDoService()

class Home extends Component {

  state={
    data: []
  }

  componentDidMount(){
    service.getToDo()
      .then(allData => {
        this.setState({data: allData})
      })
      .catch(err => console.log(err))
    }

  deletetoDo(id){
    service
    .deleteToDo(id)
    .then(toDo => {
     })
    .catch(err => console.log(err))
    const toDo = this.state.data.filter(todo => {
      return todo._id !== id
    })
    this.setState({data: toDo})
  }
  
  render() {
    const {data} = this.state

    return (   
      <div>
        <div className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#f9c589'}}>
          <h1 className="mx-auto">TO DO</h1>
        </div>
        <Navigation/>
        <section className="listHome" style={{marginTop: '0%'}}>
          {data.map((toDo, i) => {
            return(
              <div className="card  ml-2 mr-2 mb-1 mt-1" key={i} style={{width: 'auto', height: 'auto'}}>
                <div className={classnames('card-body', {
                  green: toDo.colour === 'green',
                  yellow: toDo.colour === 'yellow',
                  red: toDo.colour === 'red'
                })}>
                  <h5 className="card-title">{toDo.what}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{toDo.where}</h6>
                  <button type="button" className="mx-auto btn btn-secondary" onClick={() => {this.deletetoDo(toDo._id)}}>DONE</button>
                </div>
              </div>
            )
          })}
        </section>
      </div>
    )
  }
}


export default Home

